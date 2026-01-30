import { Game } from '@/core/Game';
import './styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const setViewportHeightVar = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setViewportHeightVar();
  window.addEventListener('resize', setViewportHeightVar);
  window.addEventListener('orientationchange', setViewportHeightVar);

  const boardElement = document.getElementById('board');

  if (!boardElement) {
    console.error('Board element not found!');
    return;
  }

  const game = new Game(boardElement);

  if (import.meta.env.DEV) {
    (window as unknown as Window & { game?: Game }).game = game;
  }
});
