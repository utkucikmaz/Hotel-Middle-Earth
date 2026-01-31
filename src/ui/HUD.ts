import { createElement } from '@/utils/helpers';
import { VISITOR_IMAGES } from '@/utils/constants';

export class HUD {
  private scoreDisplay: HTMLSpanElement;
  private healthDisplay: HTMLSpanElement;
  private ringDisplay: HTMLSpanElement;
  private settingsButton: HTMLButtonElement;
  private parentElement: HTMLElement;

  constructor(parentElement: HTMLElement, onSettingsClick?: () => void) {
    this.parentElement = parentElement;
    this.scoreDisplay = this.createScoreDisplay();
    this.healthDisplay = this.createHealthDisplay();
    this.ringDisplay = this.createRingDisplay();
    this.settingsButton = this.createSettingsButton(onSettingsClick);
  }

  private createSettingsButton(onClick?: () => void): HTMLButtonElement {
    const btn = createElement('button', {
      id: 'hudSettingsBtn',
      textContent: '⚙️',
      styles: {
        position: 'absolute',
        top: '3vh',
        right: '12vw',
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        fontSize: '20px',
        color: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(5px)',
        zIndex: '20',
        transition: 'all 0.2s ease',
      }
    });

    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.1) rotate(90deg)';
        btn.style.background = 'rgba(255, 255, 255, 0.3)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1) rotate(0deg)';
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
    });

    if (onClick) {
      btn.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent game interaction
          onClick();
      });
      btn.addEventListener('touchstart', (e) => {
          e.stopPropagation();
          e.preventDefault();
          onClick();
      });
    }

    this.parentElement.appendChild(btn);
    return btn;
  }


  private createScoreDisplay(): HTMLSpanElement {
    const display = createElement('span', {
      id: 'scoreDisplay',
      textContent: 'Score: 0',
    });
    this.parentElement.appendChild(display);
    return display;
  }

  private createHealthDisplay(): HTMLSpanElement {
    const display = createElement('span', {
      id: 'healthDisplay',
    });
    this.parentElement.appendChild(display);
    return display;
  }

  private createRingDisplay(): HTMLSpanElement {
    const display = createElement('span', {
      id: 'ringDisplay',
    });
    this.parentElement.appendChild(display);
    return display;
  }

  updateScore(score: number): void {
    this.scoreDisplay.textContent = `Score: ${score}`;
  }

  updateHealth(health: number): void {
    const heartImg = createElement('img', {
      id: 'heart-image',
      attributes: {
        src: VISITOR_IMAGES.heart,
        alt: 'health indicator',
      },
      styles: {
        width: 'auto',
      },
    });

    this.healthDisplay.innerHTML = '';
    this.healthDisplay.appendChild(heartImg);
    this.healthDisplay.appendChild(document.createTextNode(` ${health}`));
  }

  updateRing(hasRing: boolean, _isDarkMode: boolean, onClick?: () => void): void {
    this.ringDisplay.innerHTML = '';

    if (hasRing) {
      const ringImg = createElement('img', {
        id: 'ring-image',
        attributes: {
          src: VISITOR_IMAGES.ring,
          alt: 'the one ring',
          role: 'button',
          tabindex: '0',
        },
        styles: {
          cursor: 'pointer',
        },
      });

      if (onClick) {
        ringImg.addEventListener('click', onClick);
        ringImg.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        });
      }

      this.ringDisplay.appendChild(ringImg);
    }
  }

  showInfo(message: string, duration: number = 2000): void {
    const info = createElement('p', {
      id: 'info-text',
      innerHTML: message,
    });

    this.parentElement.appendChild(info);

    setTimeout(() => {
      if (info.parentElement) {
        info.remove();
      }
    }, duration);
  }

  destroy(): void {
    this.scoreDisplay.remove();
    this.healthDisplay.remove();
    this.ringDisplay.remove();
    this.settingsButton.remove();
  }
}
