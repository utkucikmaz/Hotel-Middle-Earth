import type { GameState, GameSide, VisitorCounts } from '@/types';
import { GAME_CONFIG } from '@/utils/constants';

export class GameStateManager {
  private state: GameState = 'menu';
  private score: number = 0;
  private health: number = GAME_CONFIG.initialHealth;
  private userName: string = '';
  private hasRing: boolean = false;
  private currentSide: GameSide = 'good';
  private isDarkMode: boolean = false;
  private visitorCounts: VisitorCounts = {
    elf: 0,
    human: 0,
    org: 0,
    goblin: 0,
  };
  private goodWins: string[] = [];
  private darkWins: string[] = [];

  getState(): GameState {
    return this.state;
  }

  setState(state: GameState): void {
    this.state = state;
  }

  getScore(): number {
    return this.score;
  }

  addScore(points: number): void {
    this.score += points;
  }

  getHealth(): number {
    return this.health;
  }

  setHealth(health: number): void {
    this.health = Math.max(0, health);
  }

  addHealth(amount: number): void {
    this.health = Math.max(0, this.health + amount);
  }

  getUserName(): string {
    return this.userName;
  }

  setUserName(name: string): void {
    this.userName = name.trim().toUpperCase();
  }

  hasTheRing(): boolean {
    return this.hasRing;
  }

  setRing(has: boolean): void {
    this.hasRing = has;
  }

  getCurrentSide(): GameSide {
    return this.currentSide;
  }

  setCurrentSide(side: GameSide): void {
    this.currentSide = side;
  }

  isDarkModeActive(): boolean {
    return this.isDarkMode;
  }

  setDarkMode(active: boolean): void {
    this.isDarkMode = active;
    this.currentSide = active ? 'evil' : 'good';
  }

  getVisitorCounts(): VisitorCounts {
    return { ...this.visitorCounts };
  }

  incrementVisitorCount(type: keyof VisitorCounts): void {
    this.visitorCounts[type]++;
  }

  getGoodWins(): string[] {
    return [...this.goodWins];
  }

  addGoodWin(item: string): void {
    this.goodWins.push(item);
  }

  removeGoodWin(item: string): void {
    const index = this.goodWins.indexOf(item);
    if (index > -1) {
      this.goodWins.splice(index, 1);
    }
  }

  getDarkWins(): string[] {
    return [...this.darkWins];
  }

  addDarkWin(item: string): void {
    this.darkWins.push(item);
  }

  removeDarkWin(item: string): void {
    const index = this.darkWins.indexOf(item);
    if (index > -1) {
      this.darkWins.splice(index, 1);
    }
  }

  reset(): void {
    this.state = 'menu';
    this.score = 0;
    this.health = GAME_CONFIG.initialHealth;
    this.userName = '';
    this.hasRing = false;
    this.currentSide = 'good';
    this.isDarkMode = false;
    this.visitorCounts = { elf: 0, human: 0, org: 0, goblin: 0 };
    this.goodWins = [];
    this.darkWins = [];
  }
}
