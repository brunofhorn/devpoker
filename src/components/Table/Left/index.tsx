import { ITableArea } from '../../../interfaces';
import { PlayerCard } from '../../PlayerCard';

export function LeftQuadrantRoom({ players, game }: ITableArea) {
  return (
    <div
      className='flex flex-1 bg-slate-500 justify-center items-end flex-col gap-2 pr-10'
      id='quadrant_2'
    >
      {players.map((player, index) => (
        <PlayerCard key={index} {...player} />
      ))}
    </div>
  );
}
