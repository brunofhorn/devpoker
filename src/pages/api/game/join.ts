import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { gameId, playerName } = req.body;

  const player = await prisma.player.create({
    data: {
      name: playerName,
    },
  });

  await prisma.playerGame.create({
    data: {
      creator: false,
      gameId,
      playerId: player.id,
    },
  });

  return res
    .status(200)
    .json({ creator: false, playerId: player.id, name: player.name });
}
