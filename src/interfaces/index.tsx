import { ReactNode } from 'react';

export interface IGameContext {
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
  id: number;
  name: string;
  vote?: number;
  emoji?: string;
  area?: 'top' | 'right' | 'bottom' | 'left';
}

export interface IPlayerCard {
  player: IPlayer;
  game: IGame;
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
