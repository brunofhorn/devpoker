import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { addPlayerToGame } from '../../services/players';

export default function JoinGame() {
  const router = useRouter();
  const { players, setPlayers } = useContext(GameContext);
  const [gameId, setGameId] = useState('');
  const [playerName, setPlayerName] = useState('');

  const joinGame = async (event: FormEvent) => {
    event.preventDefault();

    if (gameId) {
      const res = await addPlayerToGame(gameId, playerName);

      if (res) {
        setPlayers([...players, { ...res.player, area: 'top' }]);
        router.push(`/game/${gameId}`);
      }
    }
  };

  return (
    <div>
      <form onSubmit={joinGame} className='mt-10 flex gap-2'>
        <input
          className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
          type='text'
          required
          placeholder='Nome do player'
          onChange={(event) => setPlayerName(event.target.value)}
          value={playerName}
        />
        <input
          className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
          type='text'
          required
          placeholder='Nome da Sala'
          onChange={(event) => setGameId(event.target.value)}
          value={gameId}
        />
        <button
          className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700'
          type='submit'
        >
          ENTRAR NO GAME
        </button>
      </form>
    </div>
  );
}
