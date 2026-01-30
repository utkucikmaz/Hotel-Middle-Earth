import { createElement, requestFullscreen } from '@/utils/helpers';

export class Menu {
  private parentElement: HTMLElement;
  private onStart?: (userName: string) => void;
  private onInstructions?: () => void;
  private onShowLeaderboard?: () => void;

  constructor(
    parentElement: HTMLElement,
    callbacks: {
      onStart?: (userName: string) => void;
      onInstructions?: () => void;
      onShowLeaderboard?: () => void;
    }
  ) {
    this.parentElement = parentElement;
    this.onStart = callbacks.onStart;
    this.onInstructions = callbacks.onInstructions;
    this.onShowLeaderboard = callbacks.onShowLeaderboard;
  }

  show(): void {
    const form = createElement('form', {
      id: 'nameForm',
      innerHTML: `
        <label for="nameInput" id="title">Hotel Middle Earth</label>
        <div class="menu-input-section">
          <input type="text" id="nameInput" placeholder="Please enter your name" required>
          <input id="submit-btn" type="submit" class="submit-btn" value="Start Game">
        </div>
        <div class="menu-buttons">
          <button type="button" id="instructions-button">Instructions</button>
          <button type="button" id="top-scores-button">Top Scores</button>
        </div>
        <div class="menu-social-links">
          <a href="https://utkucikmaz.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <img src="/images/logo/logo.png" alt="Website" class="social-icon">
            <span>Website</span>
          </a>
          <a href="https://github.com/utkucikmaz/Hotel-Middle-Earth" target="_blank" rel="noopener noreferrer" class="social-link">
            <img src="/images/logo/github-icon.svg" alt="GitHub" class="social-icon">
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/utkucikmaz" target="_blank" rel="noopener noreferrer" class="social-link">
            <img src="/images/logo/linkedin-icon.svg" alt="LinkedIn" class="social-icon">
            <span>LinkedIn</span>
          </a>
        </div>
      `,
    });

    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(form);

    const instructionsButton = document.getElementById('instructions-button');
    if (instructionsButton) {
      instructionsButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.onInstructions) {
          this.onInstructions();
        }
      });
    }

    const topScoresButton = document.getElementById('top-scores-button');
    if (topScoresButton) {
      topScoresButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.onShowLeaderboard) {
          this.onShowLeaderboard();
        }
      });
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const nameInput = document.getElementById('nameInput') as HTMLInputElement;
      const userName = nameInput.value.trim();

      if (userName === '') {
        alert('Please enter a valid name.');
        return;
      }

      try {
        await requestFullscreen(this.parentElement);
      } catch (error) {
        console.warn('Fullscreen not available:', error);
      }

      if (this.onStart) {
        this.onStart(userName);
      }
    });
  }

  hide(): void {
    const form = document.getElementById('nameForm');
    if (form) {
      form.style.display = 'none';
    }
  }
}
