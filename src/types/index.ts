export type VisitorType = 'elf' | 'human' | 'org' | 'goblin' | 'gandalf' | 'sauron' | 'ring' | 'gollum';

export type GameState = 'menu' | 'playing' | 'paused' | 'gameOver' | 'victory';

export type GameSide = 'good' | 'evil';

export interface Position {
  x: number;
  y: number;
}

export interface VisitorCounts {
  elf: number;
  human: number;
  org: number;
  goblin: number;
}

export interface GameConfig {
  initialHealth: number;
  visitorSpawnInterval: number;
  visitorLifetime: number;
  darkModeInterval: number;
  darkModeDuration: number;
}

export interface PlayerScore {
  userName: string;
  score: number;
  timestamp?: number;
}

export interface AudioConfig {
  backgroundVolume: number;
  effectsVolume: number;
  muted: boolean;
}

export interface GameSettings {
  audio: AudioConfig;
  difficulty: 'easy' | 'normal' | 'hard';
  showTutorial: boolean;
}
