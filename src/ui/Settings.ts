import { createElement } from '@/utils/helpers';
import { AudioService } from '@/services/AudioService';

export interface SettingsConfig {
  musicEnabled: boolean;
  soundEffectsEnabled: boolean;
  spawnCount: number;
  musicVolume: number;
  effectsVolume: number;
}

export class Settings {
  private parentElement: HTMLElement;
  private container: HTMLDivElement | null = null;
  private audioService: AudioService;
  private onClose?: () => void;
  private onApply?: (config: SettingsConfig) => void;
  private config: SettingsConfig;

  constructor(
    parentElement: HTMLElement,
    audioService: AudioService,
    initialConfig: SettingsConfig,
    callbacks: {
      onClose?: () => void;
      onApply?: (config: SettingsConfig) => void;
    }
  ) {
    this.parentElement = parentElement;
    this.audioService = audioService;
    this.config = { ...initialConfig };
    this.onClose = callbacks.onClose;
    this.onApply = callbacks.onApply;
  }

  show(): void {
    if (this.container) return;

    this.container = createElement('div', {
      id: 'settingsMenu',
      styles: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        padding: '3rem',
        borderRadius: '1rem',
        zIndex: '2000',
        minWidth: '400px',
        maxWidth: '500px',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
      },
    });

    // Title
    const title = createElement('h2', {
      textContent: 'Settings',
      styles: {
        color: '#fff',
        marginBottom: '2rem',
        fontSize: '2rem',
        textAlign: 'center',
        borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
        paddingBottom: '1rem',
      },
    });
    this.container.appendChild(title);

    // Audio Section
    const audioSection = this.createSection('Audio Settings');
    this.container.appendChild(audioSection);

    // Music Toggle
    const musicToggle = this.createToggle(
      'Background Music',
      this.config.musicEnabled,
      (enabled) => {
        this.config.musicEnabled = enabled;
        if (enabled) {
          this.audioService.unmute();
        } else {
          this.audioService.mute();
        }
      }
    );
    audioSection.appendChild(musicToggle);

    // Sound Effects Toggle
    const sfxToggle = this.createToggle(
      'Sound Effects',
      this.config.soundEffectsEnabled,
      (enabled) => {
        this.config.soundEffectsEnabled = enabled;
        this.audioService.setEffectsEnabled(enabled);
      }
    );
    audioSection.appendChild(sfxToggle);

    // Music Volume Slider
    const musicVolumeSlider = this.createSlider(
      'Music Volume',
      Math.round(this.config.musicVolume * 100),
      0,
      100,
      5,
      (value) => {
        this.config.musicVolume = value / 100;
        this.audioService.setBackgroundVolume(this.config.musicVolume);
      }
    );
    audioSection.appendChild(musicVolumeSlider);

    // Effects Volume Slider
    const effectsVolumeSlider = this.createSlider(
      'Effects Volume',
      Math.round(this.config.effectsVolume * 100),
      0,
      100,
      5,
      (value) => {
        this.config.effectsVolume = value / 100;
        this.audioService.setEffectsVolume(this.config.effectsVolume);
      }
    );
    audioSection.appendChild(effectsVolumeSlider);

    // Game Settings Section
    const gameSection = this.createSection('Game Settings');
    this.container.appendChild(gameSection);

    // Spawn Count Slider
    const spawnSlider = this.createSlider(
      'Characters Per Wave',
      this.config.spawnCount,
      4,
      12,
      1,
      (value) => {
        this.config.spawnCount = value;
      }
    );
    gameSection.appendChild(spawnSlider);

    // Buttons Container
    const buttonsContainer = createElement('div', {
      styles: {
        display: 'flex',
        gap: '1rem',
        marginTop: '2rem',
      },
    });

    const applyButton = createElement('button', {
      textContent: 'Apply',
      styles: {
        flex: '1',
        padding: '1rem',
        fontSize: '1rem',
        backgroundColor: '#27ae60',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
      },
    });
    applyButton.addEventListener('click', () => {
      this.hide();
      this.onApply?.(this.config);
    });
    applyButton.addEventListener('mouseenter', () => {
      applyButton.style.backgroundColor = '#2ecc71';
    });
    applyButton.addEventListener('mouseleave', () => {
      applyButton.style.backgroundColor = '#27ae60';
    });

    const closeButton = createElement('button', {
      textContent: 'Close',
      styles: {
        flex: '1',
        padding: '1rem',
        fontSize: '1rem',
        backgroundColor: 'transparent',
        color: '#fff',
        border: '2px solid #fff',
        borderRadius: '5px',
        cursor: 'pointer',
      },
    });
    closeButton.addEventListener('click', () => {
      this.hide();
      this.onClose?.();
    });
    closeButton.addEventListener('mouseenter', () => {
      closeButton.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    closeButton.addEventListener('mouseleave', () => {
      closeButton.style.backgroundColor = 'transparent';
    });

    buttonsContainer.appendChild(applyButton);
    buttonsContainer.appendChild(closeButton);
    this.container.appendChild(buttonsContainer);

    this.parentElement.appendChild(this.container);
  }

  private createSection(title: string): HTMLDivElement {
    const section = createElement('div', {
      styles: {
        marginBottom: '1.5rem',
      },
    });

    const sectionTitle = createElement('h3', {
      textContent: title,
      styles: {
        color: '#fff',
        fontSize: '1.2rem',
        marginBottom: '1rem',
        opacity: '0.8',
      },
    });
    section.appendChild(sectionTitle);

    return section;
  }

  private createToggle(
    label: string,
    initialValue: boolean,
    onChange: (value: boolean) => void
  ): HTMLDivElement {
    const container = createElement('div', {
      styles: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        padding: '0.5rem',
      },
    });

    const labelElement = createElement('label', {
      textContent: label,
      styles: {
        color: '#fff',
        fontSize: '1rem',
      },
    });

    const toggleButton = createElement('button', {
      textContent: initialValue ? 'ON' : 'OFF',
      styles: {
        padding: '0.5rem 1.5rem',
        fontSize: '0.9rem',
        backgroundColor: initialValue ? '#27ae60' : '#e74c3c',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        minWidth: '70px',
        fontWeight: 'bold',
      },
    });

    toggleButton.addEventListener('click', () => {
      const newValue = toggleButton.textContent === 'OFF';
      toggleButton.textContent = newValue ? 'ON' : 'OFF';
      toggleButton.style.backgroundColor = newValue ? '#27ae60' : '#e74c3c';
      onChange(newValue);
    });

    container.appendChild(labelElement);
    container.appendChild(toggleButton);

    return container;
  }

  private createSlider(
    label: string,
    initialValue: number,
    min: number,
    max: number,
    step: number,
    onChange: (value: number) => void
  ): HTMLDivElement {
    const container = createElement('div', {
      styles: {
        marginBottom: '1rem',
        padding: '0.5rem',
      },
    });

    const labelContainer = createElement('div', {
      styles: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem',
      },
    });

    const labelElement = createElement('label', {
      textContent: label,
      styles: {
        color: '#fff',
        fontSize: '1rem',
      },
    });

    const valueDisplay = createElement('span', {
      textContent: String(initialValue),
      styles: {
        color: '#27ae60',
        fontSize: '1rem',
        fontWeight: 'bold',
        minWidth: '30px',
        textAlign: 'right',
      },
    });

    labelContainer.appendChild(labelElement);
    labelContainer.appendChild(valueDisplay);

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = String(min);
    slider.max = String(max);
    slider.step = String(step);
    slider.value = String(initialValue);
    slider.style.width = '100%';
    slider.style.cursor = 'pointer';

    slider.addEventListener('input', () => {
      const value = parseInt(slider.value);
      valueDisplay.textContent = String(value);
      onChange(value);
    });

    container.appendChild(labelContainer);
    container.appendChild(slider);

    return container;
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

  updateConfig(config: SettingsConfig): void {
    this.config = { ...config };
  }
}
