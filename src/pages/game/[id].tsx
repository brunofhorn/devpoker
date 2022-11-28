import { useContext, useEffect, useState } from 'react';
import { BottomQuadrantRoom } from '../../components/Table/Bottom';
import { LeftQuadrantRoom } from '../../components/Table/Left';
import { RightQuadrantRoom } from '../../components/Table/Right';
import { Table } from '../../components/Table/Middle';
import { TopQuadrantRoom } from '../../components/Table/Top';
import { GameContext } from '../../contexts/GameContext';
import { GameType, IPlayer } from '../../interfaces';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Game() {
  const router = useRouter();
  const { id } = router.query;
  const { players, setPlayers } = useContext(GameContext);

  const getPlayers = async () => {
    const { data } = await axios.get('/api/game/players', {
      data: {
        gameId: id,
      },
    });

    console.log(data);

    setPlayers(data);
  };

  useEffect(() => {
    if (!router.isReady) return;

    getPlayers();
  }, [router.isReady]);

  return (
    <section className='flex flex-1 items-center justify-center h-screen'>
      <div className='flex flex-1 flex-col justify-center w-[900px] h-[500px]'>
        <TopQuadrantRoom
          players={players.filter((player) => player.area === 'top')}
          game={{ id: '1', name: 'Frontend', gameType: GameType.Fibonacci }}
        />
        <div className='flex flex-1 flex-row'>
          <LeftQuadrantRoom
            players={players.filter((player) => player.creator)}
            game={{ id: '1', name: 'Frontend', gameType: GameType.Fibonacci }}
          />
          <Table />
          <RightQuadrantRoom
            players={players.filter((player) => player.area === 'right')}
            game={{ id: '1', name: 'Frontend', gameType: GameType.Fibonacci }}
          />
        </div>
        <BottomQuadrantRoom
          players={players.filter((player) => player.area === 'bottom')}
          game={{ id: '1', name: 'Frontend', gameType: GameType.Fibonacci }}
        />
      </div>
    </section>
  );
}
