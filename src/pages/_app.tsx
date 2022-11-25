import '../styles/global.css';
import type { AppProps } from 'next/app';
import { GameProvider } from '../contexts/GameContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}
