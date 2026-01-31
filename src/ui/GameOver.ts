import { createElement } from '@/utils/helpers';
import { GAME_OVER_IMAGES } from '@/utils/constants';

export type GameOverType = 'defeat' | 'gandalf' | 'sauron';

export class GameOver {
  private parentElement: HTMLElement;
  private onRestart?: () => void;
  private onShowLeaderboard?: () => void;

  constructor(
    parentElement: HTMLElement,
    callbacks: {
      onRestart?: () => void;
      onShowLeaderboard?: () => void;
    }
  ) {
    this.parentElement = parentElement;
    this.onRestart = callbacks.onRestart;
    this.onShowLeaderboard = callbacks.onShowLeaderboard;
  }

  show(type: GameOverType, userName: string, score: number): void {
    this.parentElement.innerHTML = '';

    let container: HTMLElement;

    if (type === 'defeat') {
      container = this.createDefeatScreen(userName, score);
    } else if (type === 'gandalf') {
      container = this.createGandalfWinScreen(userName, score);
    } else {
      container = this.createSauronWinScreen(userName, score);
    }

    this.parentElement.appendChild(container);
    this.setupEventListeners(container);
  }

  private createDefeatScreen(userName: string, score: number): HTMLElement {
    const gameOverGif = createElement('img', {
      className: 'over-gif',
      attributes: {
        src: GAME_OVER_IMAGES.over,
        alt: "ring couldn't be destroyed",
      },
    });

    const container = createElement('p', {
      className: 'game-over',
      id: 'game-over-id',
      innerHTML: `
        <p class="over-title">${userName} couldn't destroy the ring.</p>
        <p>I don't say it was ${userName}'s fault, but only ${score}?</p>
        <p>Middle Earth needs better fighters</p>
      `,
    });

    container.insertBefore(gameOverGif, container.firstChild);
    this.addButtons(container);

    return container;
  }

  private createGandalfWinScreen(userName: string, score: number): HTMLElement {
    const gameOverGif = createElement('img', {
      id: 'gandalf-won',
      attributes: {
        src: GAME_OVER_IMAGES.gandalfWon,
        alt: 'a beautiful image of gandalf',
      },
    });

    const container = createElement('p', {
      className: 'gandalf-class',
      id: 'game-over-id',
      innerHTML: `
        <p class="over-title">Now Middle Earth is Free!!</p>
        <div id="gandalf-info-container">
          <p>Gandalf has really come on time as he promised to Aragorn</p>
          <p><i>"Look to my coming on the first light of the fifth day, at dawn look to the east..."</i></p>
          <p>${userName} helped Gandalf and all his friends during the wars.</p>
          <p>${userName} found ${score} soldiers and ran to the heart of the enemy.</p>
        </div>
      `,
    });

    container.insertBefore(gameOverGif, container.firstChild);
    this.addButtons(container);

    return container;
  }

  private createSauronWinScreen(userName: string, score: number): HTMLElement {
    const gameOverGif = createElement('img', {
      id: 'sauron-won',
      attributes: {
        src: GAME_OVER_IMAGES.sauronWon,
        alt: 'a powerful image of sauron',
      },
    });

    const container = createElement('p', {
      className: 'sauron-class',
      id: 'game-over-id',
      innerHTML: `
        <p class="over-title">Sauron took the Middle Earth over.</p>
        <div class="sauron-info-container">
          <p>Now everyone must obey the dark lord.</p>
          <p>${userName} served Sauron loyally...</p>
          <p>Sauron gave ${userName} ${score} soldiers to invade more!</p>
          <br/>
        </div>
      `,
    });

    container.insertBefore(gameOverGif, container.firstChild);
    this.addButtons(container);

    return container;
  }

  private addButtons(container: HTMLElement): void {
    const showPlayersButton = createElement('button', {
      id: 'players-button',
      textContent: 'Top Players',
    });

    const restartDiv = createElement('p', {
      className: 'restart',
      textContent: 'Press space to restart',
    });

    container.appendChild(showPlayersButton);
    container.appendChild(restartDiv);
  }

  private setupEventListeners(container: HTMLElement): void {
    const playersButton = container.querySelector('#players-button') as HTMLButtonElement;
    if (playersButton && this.onShowLeaderboard) {
      playersButton.addEventListener('click', this.onShowLeaderboard);
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === ' ' && this.onRestart) {
        event.preventDefault();
        document.removeEventListener('keydown', handleKeyPress);
        this.onRestart();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
  }

  hide(): void {
    const container = document.getElementById('game-over-id');
    if (container) {
      container.remove();
    }
  }
}
