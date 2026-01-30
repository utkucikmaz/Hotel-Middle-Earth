import type { GameSettings } from '@/types';

const STORAGE_KEYS = {
  SETTINGS: 'hme_settings',
  HIGH_SCORE: 'hme_high_score',
  TUTORIAL_SHOWN: 'hme_tutorial_shown',
} as const;

export class StorageService {
  private isAvailable: boolean;

  constructor() {
    this.isAvailable = this.checkStorageAvailability();
  }

  private checkStorageAvailability(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  saveSettings(settings: GameSettings): void {
    if (!this.isAvailable) return;
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }

  loadSettings(): GameSettings | null {
    if (!this.isAvailable) return null;
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to load settings:', error);
      return null;
    }
  }

  saveHighScore(score: number): void {
    if (!this.isAvailable) return;
    try {
      const currentHigh = this.loadHighScore();
      if (score > currentHigh) {
        localStorage.setItem(STORAGE_KEYS.HIGH_SCORE, score.toString());
      }
    } catch (error) {
      console.error('Failed to save high score:', error);
    }
  }

  loadHighScore(): number {
    if (!this.isAvailable) return 0;
    try {
      const score = localStorage.getItem(STORAGE_KEYS.HIGH_SCORE);
      return score ? parseInt(score, 10) : 0;
    } catch (error) {
      console.error('Failed to load high score:', error);
      return 0;
    }
  }

  setTutorialShown(shown: boolean): void {
    if (!this.isAvailable) return;
    try {
      localStorage.setItem(STORAGE_KEYS.TUTORIAL_SHOWN, shown.toString());
    } catch (error) {
      console.error('Failed to save tutorial status:', error);
    }
  }

  isTutorialShown(): boolean {
    if (!this.isAvailable) return false;
    try {
      return localStorage.getItem(STORAGE_KEYS.TUTORIAL_SHOWN) === 'true';
    } catch (error) {
      console.error('Failed to load tutorial status:', error);
      return false;
    }
  }

  clear(): void {
    if (!this.isAvailable) return;
    try {
      Object.values(STORAGE_KEYS).forEach((key) => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error('Failed to clear storage:', error);
    }
  }
}
