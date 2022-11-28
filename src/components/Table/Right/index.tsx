import { ITableArea } from '../../../interfaces';
import { PlayerCard } from '../../PlayerCard';

export function RightQuadrantRoom({ players, game }: ITableArea) {
  return (
    <div
      className='flex flex-1 bg-slate-500 flex-col gap-2 items-start justify-center pl-10'
      id='quadrant_3'
    >
      {players.map((player, index) => (
        <PlayerCard key={index} {...player} />
      ))}
    </div>
  );
}
