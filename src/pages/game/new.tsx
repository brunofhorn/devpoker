import axios from 'axios';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { updatePlayerGames } from '../../services/players';

export default function NewGame() {
  const router = useRouter();
  const { setPlayers } = useContext(GameContext);
  const [hostPlayer, setHostPlayer] = useState('');
  const [gameTitle, setGameTitle] = useState('');

  const createGame = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await axios.post('/api/game/', {
        name: gameTitle,
        gameType: 'Fibonacchi',
        hostPlayer,
      });

      console.log(data);

      await updatePlayerGames(data.id, data.players[0].playerId);
      await setPlayers([{ ...data.players[0], area: 'left' }]);
      router.push(`/game/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={createGame} className='mt-10 flex gap-2'>
        <input
          className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
          type='text'
          required
          placeholder='Nome do player'
          onChange={(event) => setHostPlayer(event.target.value)}
          value={hostPlayer}
        />
        <input
          className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
          type='text'
          required
          placeholder='Nome da Sala'
          onChange={(event) => setGameTitle(event.target.value)}
          value={gameTitle}
        />
        <button
          className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700'
          type='submit'
        >
          CRIAR GAME
        </button>
      </form>
    </div>
  );
}
