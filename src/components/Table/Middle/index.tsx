import { resetRound } from '../../../services/game';

export function Table() {
  const status = 1;
  return (
    <div className='flex flex-1 rounded-2xl bg-violet-500 justify-center items-center'>
      <div className='flex flex-1 flex-col bg-slate-200 m-16 p-6'>
        <div className='flex flex-1'>TITULO</div>
        {status == 1 ? (
          <div className='flex flex-1 flex-col'>
            <button
              onClick={() => resetRound('2c3aa0d1-a327-49e8-87e6-658cc7ac2866')}
            >
              COMEÇAR NOVA VOTAÇÃO
            </button>
          </div>
        ) : (
          <div className='grid grid-cols-4 gap-2 justify-center items-center'>
            <div className='justify-center items-center'>REVELAR</div>
            <div className='justify-center items-center'>REINICIAR</div>
            <div className='justify-center items-center'>SAIR</div>
            <div className='justify-center items-center'>CONVIDAR</div>
          </div>
        )}
      </div>
    </div>
  );
}
