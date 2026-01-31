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
    return container;
  }

  private createHotels(): void {
    const hotelPositions = [
      { id: 'hotel1' },
      { id: 'hotel2' },
      { id: 'hotel3' },
      { id: 'hotel4' },
    ];

    hotelPositions.forEach(({ id }) => {
      const img = document.createElement('img');
      img.id = id;
      img.src = HOTEL_IMAGES[id as keyof typeof HOTEL_IMAGES];
      img.setAttribute('alt', `${id} building`);
      
      this.containerElement.appendChild(img);
    });
  }

  destroy(): void {
    if (this.containerElement.parentElement) {
      this.containerElement.remove();
    }
  }
}
