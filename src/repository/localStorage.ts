import { IPlayerGame } from '../interfaces';

const playerGamesStoreName = 'playerGames';

export const getPlayerGamesFromCache = (): IPlayerGame[] => {
  let playerGames: IPlayerGame[] = [];

  const store = localStorage.getItem(playerGamesStoreName);

  if (store) {
    playerGames = JSON.parse(store);
  }

  return playerGames;
};

export const isGameInPlayerCache = (gameId: string): boolean => {
  const playerGames = getPlayerGamesFromCache();
  const found = playerGames.find(
    (playerGames) => playerGames.gameId === gameId
  );
  if (found) {
    return true;
  }
  return found ? true : false;
};

export const updatePlayerGamesInCache = (playerGames: IPlayerGame[]) => {
  localStorage.setItem(playerGamesStoreName, JSON.stringify(playerGames));
};
