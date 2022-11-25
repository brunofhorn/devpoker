import { useContext, useEffect } from 'react';
import { BottomQuadrantRoom } from '../components/Table/Bottom';
import { LeftQuadrantRoom } from '../components/Table/Left';
import { RightQuadrantRoom } from '../components/Table/Right';
import { Table } from '../components/Table/Middle';
import { TopQuadrantRoom } from '../components/Table/Top';
import { GameContext } from '../contexts/GameContext';
import { GameType } from '../interfaces';

export default function Room() {
  const { players, setPlayers } = useContext(GameContext);

  const getPlayers = () => {
    setPlayers([
      { id: 1, name: 'Bruno', area: 'top' },
      { id: 2, name: 'Guilherme', area: 'top' },
      { id: 3, name: 'Alexandre', area: 'top' },
      { id: 4, name: 'Gabriel', area: 'bottom' },
      { id: 5, name: 'Nivaldo', area: 'left' },
      { id: 6, name: 'João Victor', area: 'bottom' },
      { id: 7, name: 'Adamastor Pitaco', area: 'bottom' },
      { id: 8, name: 'Bruno', area: 'bottom' },
      { id: 9, name: 'Bruno', area: 'top' },
      { id: 10, name: 'Bruno', area: 'bottom' },
    ]);
  };

  useEffect(() => {
    getPlayers();
  }, []);

  return (
    <section className='flex flex-1 items-center justify-center h-screen'>
      <div className='flex flex-1 flex-col justify-center w-[900px] h-[500px]'>
        <TopQuadrantRoom
          players={players.filter((player) => player.area === 'top')}
          game={{ id: '1', name: 'Frontend', gameType: GameType.Fibonacci }}
        />
        <div className='flex flex-1 flex-row'>
          <LeftQuadrantRoom
            players={players.filter((player) => player.area === 'left')}
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
