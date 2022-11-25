import { ITableArea } from '../../../interfaces';
import { PlayerCard } from '../../PlayerCard';

export function TopQuadrantRoom({ players, game }: ITableArea) {
  return (
    <div
      className='flex flex-1 bg-red-500 items-center justify-center gap-2'
      id='quadrant_1'
    >
      {players.map((player) => (
        <PlayerCard {...player} />
      ))}
    </div>
  );
}
