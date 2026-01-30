import type { GameConfig } from '@/types';

export const GAME_CONFIG: GameConfig = {
  initialHealth: 5,
  visitorSpawnInterval: 7000,
  visitorLifetime: 5000,
  darkModeInterval: 40000,
  darkModeDuration: 20000,
};

export const VISITOR_SPAWN_COUNT = 8;

export const VISITOR_IMAGES: Record<string, string> = {
  elf: '/images/elf.png',
  human: '/images/human.png',
  org: '/images/org.png',
  goblin: '/images/goblin.png',
  gandalf: '/images/gandalf.png',
  sauron: '/images/sauron.png',
  ring: '/images/ring.png',
  gollum: '/images/gollum.png',
  heart: '/images/heart.png',
};

export const HOTEL_IMAGES = {
  hotel1: '/images/hotel1.png',
  hotel2: '/images/hotel2.png',
  hotel3: '/images/hotel3.png',
  hotel4: '/images/hotel4.png',
};

export const AUDIO_FILES = {
  background: '/sounds/lotr.mp3',
  bad: '/sounds/bad-sound.mp3',
  good: '/sounds/good-sound.mp3',
  gollum: '/sounds/gollum-sound.mp3',
  gandalf: '/sounds/gandalf-sound.mp3',
  sauron: '/sounds/sauron-sound.mp3',
  ring: '/sounds/ring-sound.mp3',
};

export const SCORE_VALUES = {
  goodVisitor: 10,
  badVisitor: -10,
  specialCharacter: 100,
  specialCharacterPenalty: -20,
};

export const HEALTH_VALUES = {
  badVisitor: -1,
  specialCharacter: -2,
};

export const KEYBOARD_CONTROLS = {
  PAUSE: ' ',
  ESCAPE: 'Escape',
  RESTART: 'r',
  MUTE: 'm',
};
