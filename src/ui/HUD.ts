import { createElement } from '@/utils/helpers';
import { VISITOR_IMAGES } from '@/utils/constants';

export class HUD {
  private scoreDisplay: HTMLSpanElement;
  private healthDisplay: HTMLSpanElement;
  private ringDisplay: HTMLSpanElement;
  private parentElement: HTMLElement;

  constructor(parentElement: HTMLElement) {
    this.parentElement = parentElement;
    this.scoreDisplay = this.createScoreDisplay();
    this.healthDisplay = this.createHealthDisplay();
    this.ringDisplay = this.createRingDisplay();
  }

  private createScoreDisplay(): HTMLSpanElement {
    const display = createElement('span', {
      id: 'scoreDisplay',
      textContent: 'Score: 0',
      styles: {
        color: '#fff',
        position: 'absolute',
        right: '1vw',
        fontSize: '1.5vw',
        textAlign: 'center',
        top: '1vh',
      },
    });
    this.parentElement.appendChild(display);
    return display;
  }

  private createHealthDisplay(): HTMLSpanElement {
    const display = createElement('span', {
      id: 'healthDisplay',
      styles: {
        marginLeft: '1vw',
        color: '#fff',
        textAlign: 'center',
        fontSize: '2vw',
        position: 'absolute',
        top: '1vh',
        left: '0',
      },
    });
    this.parentElement.appendChild(display);
    return display;
  }

  private createRingDisplay(): HTMLSpanElement {
    const display = createElement('span', {
      id: 'ringDisplay',
      styles: {
        position: 'absolute',
        top: '1vh',
        left: '50vw',
        transform: 'translateX(-50%)',
      },
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
        height: '3vh',
        marginTop: '1vh',
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
          width: '2vw',
          height: 'auto',
          cursor: 'pointer',
          paddingTop: '1vh',
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
  }
}
