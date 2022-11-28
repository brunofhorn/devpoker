import axios from 'axios';
import { IPlayer, IPlayerGame } from '../interfaces';
import {
  getPlayerGamesFromCache,
  updatePlayerGamesInCache,
} from '../repository/localStorage';

export const updatePlayerGames = (gameId: string, playerId: string) => {
  let playerGames: IPlayerGame[] = getPlayerGamesFromCache();

  playerGames.push({ gameId, playerId });

  updatePlayerGamesInCache(playerGames);
};

export const addPlayerToGame = async (gameId: string, playerName: string) => {
  const { data } = await axios.get(`/api/game/${gameId}`);

  if (!data) {
    console.log('Game not found');
    return { status: false, player: null };
  }

  const newPlayer = await axios.post('/api/game/join', {
    gameId: data.game.id,
    playerName,
  });

  updatePlayerGames(data.game.id, newPlayer.data.playerId);
  // await addPlayerToGameInStore(gameId, newPlayer);

  return { status: true, player: newPlayer.data };
};

export const moveToSeat = async (players: IPlayer[]) => {
  let playersSeated: IPlayer[] = players.map((player, index) => {
    let area: string = '';

    if (index == 0) {
      area = 'left';
    }

    if (index > 0) {
      let cont = 1;

      switch (cont) {
        case 1:
          area = 'top';
          break;
        case 2:
          area = 'right';
          break;
        case 3:
          area = 'bottom';
          break;
        default:
          break;
      }

      cont++;
    }

    return { ...player, area };
  });

  return playersSeated;
};
