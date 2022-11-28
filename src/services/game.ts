import axios from 'axios';
import { Status } from '../interfaces';
import {
  getGameFromStore,
  updateRoundDataInStore,
} from '../repository/database';
import { resetPlayers } from './players';

export const updateRound = async (
  gameId: string,
  average: number,
  roundStatus: string
): Promise<boolean> => {
  await updateRoundDataInStore(gameId, average, roundStatus);
  return true;
};

export const resetRound = async (gameId: string) => {
  const game = await getGameFromStore(gameId);

  if (game) {
    updateRound(gameId, 0, Status.Started);

    await resetPlayers(gameId);
  }
};
