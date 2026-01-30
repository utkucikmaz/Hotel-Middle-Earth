import { createElement } from '@/utils/helpers';

export class Instructions {
  private parentElement: HTMLElement;
  private onBack?: () => void;

  constructor(parentElement: HTMLElement, callbacks: { onBack?: () => void }) {
    this.parentElement = parentElement;
    this.onBack = callbacks.onBack;
  }

  show(): void {
    const container = createElement('div', {
      id: 'instructionsContainer',
      innerHTML: `
        <h1 id="instruction-title">Welcome to the Hotel Middle Earth!</h1>
        <div id="backbutton-container">
          <button id="backButton">Back</button>
        </div>
        <br/>
        <ul id="instruction-list">
          <div id="inst-good">
            <li>In this background collect <img src="./images/elf.png" class="inst-char"> and <img src="./images/human.png" class="inst-char"> to score points.</li>
            <li>Avoid <img src="./images/org.png" class="inst-char"> and <img src="./images/goblin.png" class="inst-char"> to maintain your health.</li>
            <li>Be careful about the <img src="./images/gollum.png" class="inst-char" id="gollum-inst"> if you have the <img src="./images/ring.png" class="inst-char" id="ring-inst">, he is a filthy thief.</li>
            <li>If you serve <img src="./images/sauron.png" class="inst-char"> you lose double health and score.</li>
            <li>If you lose all your health before you destroy the ring, the game is over.</li>
            <li>If you find both <img src="./images/ring.png" class="inst-char" id="ring-inst"> and <img src="./images/gandalf.png" class="inst-char">, <img src="./images/hotel3.png" class="inst-char"> wins!</li>
          </div>
          <div id="inst-bad">
            <li>Eye mode will activate periodically, be cautious!</li>
            <li>Now you must obey <img src="./images/sauron.png" class="inst-char"> and collect <img src="./images/org.png" class="inst-char"> and <img src="./images/goblin.png" class="inst-char">.</li>
            <li>Even though you serve <img src="./images/sauron.png" class="inst-char">, <img src="./images/gollum.png" class="inst-char" id="gollum-inst"> is still a thief.</li>
            <li>If you serve <img src="./images/gandalf.png" class="inst-char"> you lose double health and score.</li>
            <li>If you lose all your health before you destroy the ring, the game is over.</li>
            <li>If you find both <img src="./images/ring.png" class="inst-char" id="ring-inst"> and <img src="./images/sauron.png" class="inst-char">, <img src="./images/hotel2.png" class="inst-char"> wins!</li>
          </div>
        </ul>
      `,
    });

    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(container);

    const backButton = container.querySelector('#backButton') as HTMLButtonElement;
    if (backButton && this.onBack) {
      backButton.addEventListener('click', this.onBack);
    }
  }

  hide(): void {
    const container = document.getElementById('instructionsContainer');
    if (container) {
      container.remove();
    }
  }
}
