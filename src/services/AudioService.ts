import { AUDIO_FILES } from '@/utils/constants';
import type { AudioConfig } from '@/types';

export class AudioService {
  private audioElements: Map<string, HTMLAudioElement> = new Map();
  private config: AudioConfig = {
    backgroundVolume: 0.3,
    effectsVolume: 1.0,
    muted: false,
  };

  constructor() {
    this.initializeAudio();
  }

  private initializeAudio(): void {
    Object.entries(AUDIO_FILES).forEach(([key, src]) => {
      const audio = new Audio(src);
      if (key === 'background') {
        audio.loop = true;
        audio.volume = this.config.backgroundVolume;
      } else {
        audio.volume = this.config.effectsVolume;
      }
      this.audioElements.set(key, audio);
    });
  }

  async play(soundName: keyof typeof AUDIO_FILES): Promise<void> {
    if (this.config.muted) return;

    // Don't play sound effects if effectsVolume is 0 (disabled)
    if (soundName !== 'background' && this.config.effectsVolume === 0) return;

    const audio = this.audioElements.get(soundName);
    if (audio) {
      try {
        audio.currentTime = 0;
        await audio.play();
      } catch (error) {
        console.warn(
          `Audio playback failed for ${soundName}. User interaction may be required.`,
          error
        );
        if (soundName === 'background') {
          document.addEventListener(
            'click',
            () => {
              audio.play().catch(() => {});
            },
            { once: true }
          );
        }
      }
    }
  }

  stop(soundName: keyof typeof AUDIO_FILES): void {
    const audio = this.audioElements.get(soundName);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  setVolume(soundName: keyof typeof AUDIO_FILES, volume: number): void {
    const audio = this.audioElements.get(soundName);
    if (audio) {
      audio.volume = Math.max(0, Math.min(1, volume));
    }
  }

  setBackgroundVolume(volume: number): void {
    this.config.backgroundVolume = Math.max(0, Math.min(1, volume));
    const bgAudio = this.audioElements.get('background');
    if (bgAudio) {
      bgAudio.volume = this.config.backgroundVolume;
    }
  }

  setEffectsVolume(volume: number): void {
    this.config.effectsVolume = Math.max(0, Math.min(1, volume));
    this.audioElements.forEach((audio, key) => {
      if (key !== 'background') {
        audio.volume = this.config.effectsVolume;
      }
    });
  }

  mute(): void {
    this.config.muted = true;
    this.audioElements.forEach((audio) => audio.pause());
  }

  unmute(): void {
    this.config.muted = false;
  }

  toggleMute(): boolean {
    this.config.muted = !this.config.muted;
    if (this.config.muted) {
      this.audioElements.forEach((audio) => audio.pause());
    }
    return this.config.muted;
  }

  isMuted(): boolean {
    return this.config.muted;
  }

  setEffectsEnabled(enabled: boolean): void {
    if (!enabled) {
      this.audioElements.forEach((audio, key) => {
        if (key !== 'background') {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    }
    this.config.effectsVolume = enabled ? 1.0 : 0;
  }

  getConfig(): AudioConfig {
    return { ...this.config };
  }

  updateConfig(config: Partial<AudioConfig>): void {
    this.config = { ...this.config, ...config };
    if (config.backgroundVolume !== undefined) {
      this.setBackgroundVolume(config.backgroundVolume);
    }
    if (config.effectsVolume !== undefined) {
      this.setEffectsVolume(config.effectsVolume);
    }
  }

  cleanup(): void {
    this.audioElements.forEach((audio) => {
      audio.pause();
      audio.src = '';
    });
    this.audioElements.clear();
  }
}
