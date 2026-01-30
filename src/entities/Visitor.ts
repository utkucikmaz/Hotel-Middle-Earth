import { randomInt } from '@/utils/helpers';
import { VISITOR_IMAGES } from '@/utils/constants';
import type { VisitorType, Position } from '@/types';

export class Visitor {
  type: VisitorType;
  position: Position;
  domElement: HTMLImageElement;
  private targetPosition: Position = { x: 0, y: 0 };
  private animationFrameId: number | null = null;
  private hasRing: boolean;

  constructor(hasRing: boolean = false) {
    this.hasRing = hasRing;
    this.position = {
      x: randomInt(10, 80),
      y: randomInt(25, 75),
    };
    this.type = this.determineType();
    this.domElement = this.createDomElement();
  }

  private determineType(): VisitorType {
    const randomUniqueNumber = randomInt(1, 100);

    // Ring: 3% chance (1-3 out of 100)
    if (randomUniqueNumber <= 3 && !this.hasRing) {
      return 'ring';
    }

    // Sauron: 3% chance (4-6 out of 100)
    if (randomUniqueNumber >= 4 && randomUniqueNumber <= 6) {
      return 'sauron';
    }

    // Gandalf: 3% chance (7-9 out of 100)
    if (randomUniqueNumber >= 7 && randomUniqueNumber <= 9) {
      return 'gandalf';
    }

    // Gollum: 20% chance (10-29 out of 100)
    if (randomUniqueNumber >= 10 && randomUniqueNumber <= 29) {
      return 'gollum';
    }

    // Regular visitors: 71% chance (30-100 out of 100)
    const randomNumber = randomInt(1, 4);
    const types: VisitorType[] = ['elf', 'human', 'org', 'goblin'];
    return types[randomNumber - 1];
  }

  private createDomElement(): HTMLImageElement {
    const img = document.createElement('img');
    img.id = 'visitor';
    img.className = this.type;
    img.src = VISITOR_IMAGES[this.type];
    img.style.position = 'absolute';
    img.style.left = `${this.position.x}vw`;
    img.style.bottom = `${this.position.y}vh`;
    img.style.transition = 'all 0.3s ease-out';
    img.style.cursor = 'pointer';
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `${this.type} visitor`);
    img.setAttribute('tabindex', '0');

    return img;
  }

  setTargetPosition(isDarkMode: boolean): void {
    const positions: Record<VisitorType, { good: Position; evil: Position }> = {
      human: { good: { x: 55, y: 0 }, evil: { x: 0, y: 0 } },
      elf: { good: { x: 88, y: 0 }, evil: { x: 22, y: 0 } },
      goblin: { good: { x: 55, y: 0 }, evil: { x: 0, y: 0 } },
      org: { good: { x: 88, y: 0 }, evil: { x: 25, y: 0 } },
      sauron: { good: { x: 25, y: 0 }, evil: { x: 25, y: 0 } },
      gandalf: { good: { x: 55, y: 0 }, evil: { x: 55, y: 0 } },
      ring: { good: { x: 58, y: 5 }, evil: { x: 28, y: 5 } },
      gollum: { good: { x: 55, y: 0 }, evil: { x: 25, y: 0 } },
    };

    this.targetPosition = isDarkMode ? positions[this.type].evil : positions[this.type].good;
  }

  startMoving(isDarkMode: boolean): void {
    this.setTargetPosition(isDarkMode);

    const animate = () => {
      const speed = 0.5;
      const dx = this.targetPosition.x - this.position.x;
      const dy = this.targetPosition.y - this.position.y;

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        this.position.x += dx * speed * 0.02;
        this.position.y += dy * speed * 0.02;

        this.domElement.style.left = `${this.position.x}vw`;
        this.domElement.style.bottom = `${this.position.y}vh`;

        this.animationFrameId = requestAnimationFrame(animate);
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  stopMoving(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  destroy(): void {
    this.stopMoving();
    if (this.domElement.parentElement) {
      this.domElement.remove();
    }
  }
}
