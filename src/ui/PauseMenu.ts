import { createElement } from '@/utils/helpers';

export class PauseMenu {
  private parentElement: HTMLElement;
  private container: HTMLDivElement | null = null;
  private onResume?: () => void;
  private onRestart?: () => void;
  private onSettings?: () => void;

  constructor(
    parentElement: HTMLElement,
    callbacks: {
      onResume?: () => void;
      onRestart?: () => void;
      onSettings?: () => void;
    }
  ) {
    this.parentElement = parentElement;
    this.onResume = callbacks.onResume;
    this.onRestart = callbacks.onRestart;
    this.onSettings = callbacks.onSettings;
  }

  show(): void {
    if (this.container) return;

    this.container = createElement('div', {
      id: 'pauseMenu',
      styles: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: '3rem',
        borderRadius: '1rem',
        zIndex: '1000',
        textAlign: 'center',
        minWidth: '300px',
      },
    });

    const title = createElement('h2', {
      textContent: 'Game Paused',
      styles: {
        color: '#fff',
        marginBottom: '2rem',
        fontSize: '2rem',
      },
    });
    this.container.appendChild(title);

    const buttonStyle = {
      display: 'block',
      width: '100%',
      padding: '1rem',
      margin: '0.5rem 0',
      fontSize: '1rem',
      backgroundColor: 'transparent',
      color: '#fff',
      border: '2px solid #fff',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    const resumeButton = createElement('button', {
      textContent: 'Resume (Space)',
      styles: buttonStyle,
    });
    resumeButton.addEventListener('click', () => this.onResume?.());
    this.container.appendChild(resumeButton);

    const restartButton = createElement('button', {
      textContent: 'Restart (R)',
      styles: buttonStyle,
    });
    restartButton.addEventListener('click', () => this.onRestart?.());
    this.container.appendChild(restartButton);

    const settingsButton = createElement('button', {
      textContent: 'Settings',
      styles: buttonStyle,
    });
    settingsButton.addEventListener('click', () => this.onSettings?.());
    this.container.appendChild(settingsButton);

    this.parentElement.appendChild(this.container);
  }

  hide(): void {
    if (this.container) {
      this.container.remove();
      this.container = null;
    }
  }

  isVisible(): boolean {
    return this.container !== null;
  }
}
