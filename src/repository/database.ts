import axios from 'axios';
import { IGame, IPlayer } from '../interfaces';

export const getGameFromStore = async (
  id: string
): Promise<IGame | undefined> => {
  const { data } = await axios.get(`/api/game/${id}`);

  let game = undefined;

  if (data.exists) {
    game = data;
  }
  return game as IGame;
};

export const updateRoundDataInStore = async (
  gameId: string,
  average: number,
  roundStatus: string
): Promise<boolean> => {
  await axios.put('/api/game/round', {
    data: {
      gameId,
      average,
      roundStatus,
    },
  });

  return true;
};

export const getPlayersFromStore = async (
  gameId: string
): Promise<IPlayer[]> => {
  const { data } = await axios.get('/api/game/players', {
    data: {
      gameId,
    },
  });

  return data;
};

export const updatePlayerInStore = async (gameId: string, player: IPlayer) => {
  await axios.put('/api/game/player', {
    data: {
      gameId,
      player,
    },
  });
  return true;
};
