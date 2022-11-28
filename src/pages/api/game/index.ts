import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, gameType, hostPlayer } = req.body;

  const game = await prisma.game.create({
    data: {
      name,
      gameType,
      average: 0,
      players: {
        create: {
          creator: true,
          player: {
            create: {
              name: hostPlayer,
            },
          },
        },
      },
    },
    include: {
      players: {
        select: {
          creator: true,
          player: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return res.status(201).json({
    ...game,
    players: game.players.map((player) => {
      return {
        creator: player.creator,
        playerId: player.player.id,
        name: player.player.name,
      };
    }),
  });
}
