import { createContext, useState } from 'react';
import { IGameContext, IPlayer, IGameProvider } from '../interfaces';

const initialValue = {
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

  return (
    <GameContext.Provider
      value={{
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
