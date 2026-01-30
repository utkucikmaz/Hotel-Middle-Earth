export class ParticleEffect {
  private particles: HTMLElement[] = [];
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  createClickEffect(x: number, y: number, type: 'good' | 'bad' | 'special'): void {
    const colors = {
      good: ['#27ae60', '#2ecc71', '#3498db'],
      bad: ['#e74c3c', '#c0392b', '#e67e22'],
      special: ['#f39c12', '#f1c40f', '#e67e22', '#ffd700'],
    };

    const particleCount = type === 'special' ? 20 : 12;
    const particleColors = colors[type];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 50 + Math.random() * 50;
      const size = type === 'special' ? 8 + Math.random() * 4 : 4 + Math.random() * 4;
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      
      particle.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        box-shadow: 0 0 10px ${color};
      `;

      this.container.appendChild(particle);
      this.particles.push(particle);

      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity;

      this.animateParticle(particle, x, y, dx, dy);
    }
  }

  private animateParticle(
    particle: HTMLElement,
    startX: number,
    startY: number,
    dx: number,
    dy: number
  ): void {
    let frame = 0;
    const maxFrames = 60;

    const animate = () => {
      frame++;
      const progress = frame / maxFrames;
      
      const currentX = startX + dx * progress;
      const currentY = startY + dy * progress + (progress * progress * 100);
      const opacity = 1 - progress;
      const scale = 1 - progress * 0.5;

      particle.style.left = `${currentX}px`;
      particle.style.top = `${currentY}px`;
      particle.style.opacity = `${opacity}`;
      particle.style.transform = `scale(${scale})`;

      if (frame < maxFrames) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
        const index = this.particles.indexOf(particle);
        if (index > -1) {
          this.particles.splice(index, 1);
        }
      }
    };

    requestAnimationFrame(animate);
  }

  createScorePopup(x: number, y: number, score: number, isPositive: boolean): void {
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.textContent = `${isPositive ? '+' : ''}${score}`;
    
    popup.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      font-size: 2rem;
      font-weight: bold;
      color: ${isPositive ? '#27ae60' : '#e74c3c'};
      text-shadow: 0 0 10px ${isPositive ? '#27ae60' : '#e74c3c'};
      pointer-events: none;
      z-index: 1000;
      animation: scoreFloat 1s ease-out forwards;
    `;

    this.container.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 1000);
  }

  cleanup(): void {
    this.particles.forEach(particle => particle.remove());
    this.particles = [];
  }
}

// Add CSS animations for particles
const style = document.createElement('style');
style.textContent = `
  @keyframes scoreFloat {
    0% {
      opacity: 1;
      transform: translateY(0) scale(0.5);
    }
    50% {
      opacity: 1;
      transform: translateY(-30px) scale(1.2);
    }
    100% {
      opacity: 0;
      transform: translateY(-60px) scale(0.8);
    }
  }

  .particle {
    transition: opacity 0.3s ease;
  }
`;
document.head.appendChild(style);
