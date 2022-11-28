import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { gameId } = req.query;

  const games = await prisma.playerGame.findMany({
    select: {
      player: {
        select: {
          id: true,
          name: true,
        },
      },
      creator: true,
      gameId: true,
    },
    where: {
      gameId: gameId?.toString(),
    },
  });

  return res.status(200).json(
    games.map((game) => {
      return {
        creator: game.creator,
        gameId: game.gameId,
        playerId: game.player.id,
        name: game.player.name,
      };
    })
  );
}
