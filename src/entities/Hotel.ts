import { HOTEL_IMAGES } from '@/utils/constants';

export class Hotel {
  private containerElement: HTMLDivElement;

  constructor(parentElement: HTMLElement) {
    this.containerElement = this.createContainer();
    parentElement.appendChild(this.containerElement);
    this.createHotels();
  }

  private createContainer(): HTMLDivElement {
    const container = document.createElement('div');
    container.id = 'hotel-container';
    container.style.position = 'absolute';
    container.style.width = '100vw';
    container.style.height = '20vh';
    container.style.bottom = '0';
    return container;
  }

  private createHotels(): void {
    const hotelPositions = [
      { id: 'hotel1', left: '0' },
      { id: 'hotel2', left: '25vw' },
      { id: 'hotel3', left: '50vw' },
      { id: 'hotel4', right: '0vw' },
    ];

    hotelPositions.forEach(({ id, left, right }) => {
      const img = document.createElement('img');
      img.id = id;
      img.src = HOTEL_IMAGES[id as keyof typeof HOTEL_IMAGES];
      img.style.position = 'absolute';
      img.style.height = '20vh';
      img.style.width = 'auto';
      img.setAttribute('alt', `${id} building`);
      
      if (left) {
        img.style.left = left;
      } else if (right) {
        img.style.right = right;
      }

      this.containerElement.appendChild(img);
    });
  }

  destroy(): void {
    if (this.containerElement.parentElement) {
      this.containerElement.remove();
    }
  }
}
