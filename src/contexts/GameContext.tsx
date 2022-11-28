import { createContext, useState } from 'react';
import { IGameContext, IPlayer, IGameProvider } from '../interfaces';

const initialValue = {
  gameId: '',
  setGameId: () => {},
  isPlayersLoading: true,
  setIsPlayersLoading: () => {},
  players: [],
  setPlayers: () => {},
};

export const GameContext = createContext<IGameContext>(initialValue);

export const GameProvider = ({ children }: IGameProvider) => {
  const [isPlayersLoading, setIsPlayersLoading] = useState<boolean>(
    initialValue.isPlayersLoading
  );
  const [players, setPlayers] = useState<IPlayer[]>(initialValue.players);
  const [gameId, setGameId] = useState(initialValue.gameId);

  return (
    <GameContext.Provider
      value={{
        gameId,
        setGameId,
        isPlayersLoading,
        setIsPlayersLoading,
        players,
        setPlayers,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
