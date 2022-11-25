import { IPlayer } from '../../interfaces';

export function PlayerCard({ name }: IPlayer) {
  return (
    <div className='flex flex-col items-center justify-start w-12'>
      <div className='flex w-full h-20 bg-slate-400 rounded-md justify-center items-center'>
        <span>1</span>
      </div>
      <span className='text-[10px] text-center break-words h-10  mt-2'>
        {name}
      </span>
    </div>
  );
}
