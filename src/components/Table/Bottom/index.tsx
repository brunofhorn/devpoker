import { ITableArea } from '../../../interfaces';
import { PlayerCard } from '../../PlayerCard';

export function BottomQuadrantRoom({ players, game }: ITableArea) {
  return (
    <div
      className='flex flex-1 bg-red-500 items-center justify-center gap-2'
      id='quadrant_4'
    >
      {players.map((player) => (
        <PlayerCard {...player} />
      ))}
    </div>
  );
}
