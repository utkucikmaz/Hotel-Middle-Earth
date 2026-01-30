import { createElement } from '@/utils/helpers';
import type { PlayerScore } from '@/types';

export class Leaderboard {
  private parentElement: HTMLElement;
  private onBack?: () => void;

  constructor(parentElement: HTMLElement, callbacks: { onBack?: () => void }) {
    this.parentElement = parentElement;
    this.onBack = callbacks.onBack;
  }

  show(scores: PlayerScore[], onBackOverride?: () => void): void {
    const container = createElement('div', {
      id: 'topPlayersContainer',
    });

    const title = createElement('p', {
      textContent: 'Top Players',
      className: 'top-players-title',
    });
    container.appendChild(title);

    const playerList = createElement('ol', {
      className: 'player-list',
    });

    if (scores.length === 0) {
      const emptyMessage = createElement('li', {
        textContent: 'No scores yet. Be the first!',
        styles: {
          listStyle: 'none',
        },
      });
      playerList.appendChild(emptyMessage);
    } else {
      scores.forEach((score) => {
        const listItem = createElement('li', {
          textContent: `${score.userName}: ${score.score}`,
        });
        playerList.appendChild(listItem);
      });
    }

    container.appendChild(playerList);

    const backButton = createElement('button', {
      textContent: 'Back',
      className: 'back-button',
    });

    const backHandler = onBackOverride ?? this.onBack;
    if (backHandler) {
      backButton.addEventListener('click', backHandler);
    }

    container.appendChild(backButton);

    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(container);
  }

  hide(): void {
    const container = document.getElementById('topPlayersContainer');
    if (container) {
      container.remove();
    }
  }
}
