import { ReactNode } from 'react';

export interface IGameContext {
  gameId: string;
  setGameId: (newState: string) => void;
  isPlayersLoading: boolean;
  setIsPlayersLoading: (newState: boolean) => void;
  players: IPlayer[] | [];
  setPlayers: (newState: IPlayer[]) => void;
}

export interface IGameProvider {
  children: ReactNode;
}

export interface ITableArea {
  game: IGame;
  players: IPlayer[] | [];
}

export interface IPlayer {
  playerId: number;
  name: string;
  creator: boolean;
  vote?: number;
  emoji?: string;
  area?: string | 'top' | 'right' | 'bottom' | 'left';
}

export interface IPlayerGame {
  playerId: string;
  gameId: string;
}

export interface IGame {
  id: string;
  name: string;
  average?: number; //nao obirgatorio
  gameStatus?: Status; // nao obrigatorio
  gameType?: GameType | GameType.Fibonacci;
  createdBy?: string; // nao obrigatorio
  createdById?: string; // nao obrigatorio
  createdAt?: Date; // nao obrigatorio
  updatedAt?: Date;
}

export enum Status {
  NotStarted = 'Não Iniciado',
  Started = 'Iniciado',
  InProgress = 'Em Progresso',
  Finished = 'Finalizado',
}

export enum GameType {
  Fibonacci = 'Fibonacci',
  ShortFibonacci = 'ShortFibonacci',
  TShirt = 'TShirt',
}
