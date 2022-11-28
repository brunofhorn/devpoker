import axios from 'axios';
import { IPlayer, IPlayerGame, Status } from '../interfaces';
import {
  getPlayersFromStore,
  updatePlayerInStore,
} from '../repository/database';
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

export const resetPlayers = async (gameId: string) => {
  const players = await getPlayersFromStore(gameId);

  players.forEach(async (player) => {
    const updatedPlayer: IPlayer = {
      ...player,
      status: Status.NotStarted,
      vote: 0,
    };

    await updatePlayerInStore(gameId, updatedPlayer);
  });
};

export const moveToSeat = async (players: IPlayer[]) => {
  let contRight = 0;

  let playersSeated: IPlayer[] = players.map((player, index) => {
    let area: string = '';

    if (index == 0) {
      area = 'left';
    }

    if (index > 0) {
      switch (index % 3) {
        case 0:
          area = 'bottom';
          break;
        case 1:
          contRight++;

          if (contRight > 3) {
            area = 'top';
          } else {
            area = 'right';
          }

          break;
        case 2:
          area = 'top';
          break;
        default:
          area = 'bottom';
          break;
      }
    }

    return { ...player, area };
  });

  return playersSeated;
};
