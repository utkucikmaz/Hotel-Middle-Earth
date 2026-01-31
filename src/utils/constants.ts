import type { GameConfig } from '@/types';
import elfImg from '@/assets/images/elf.png';
import humanImg from '@/assets/images/human.png';
import orgImg from '@/assets/images/org.png';
import goblinImg from '@/assets/images/goblin.png';
import gandalfImg from '@/assets/images/gandalf.png';
import sauronImg from '@/assets/images/sauron.png';
import ringImg from '@/assets/images/ring.png';
import gollumImg from '@/assets/images/gollum.png';
import heartImg from '@/assets/images/heart.png';

import hotel1Img from '@/assets/images/hotel1.png';
import hotel2Img from '@/assets/images/hotel2.png';
import hotel3Img from '@/assets/images/hotel3.png';
import hotel4Img from '@/assets/images/hotel4.png';

import logoImg from '@/assets/images/logo/logo.png';
import githubIcon from '@/assets/images/logo/github-icon.svg';
import linkedinIcon from '@/assets/images/logo/linkedin-icon.svg';

import overGif from '@/assets/images/over.gif';
import gandalfWonGif from '@/assets/images/gandalf-won.gif';
import sauronWonGif from '@/assets/images/sauron-won.gif';

import backgroundSnd from '@/assets/sounds/lotr.mp3';
import badSnd from '@/assets/sounds/bad-sound.mp3';
import goodSnd from '@/assets/sounds/good-sound.mp3';
import gollumSnd from '@/assets/sounds/gollum-sound.mp3';
import gandalfSnd from '@/assets/sounds/gandalf-sound.mp3';
import sauronSnd from '@/assets/sounds/sauron-sound.mp3';
import ringSnd from '@/assets/sounds/ring-sound.mp3';

export const GAME_CONFIG: GameConfig = {
  initialHealth: 5,
  visitorSpawnInterval: 7000,
  visitorLifetime: 5000,
  darkModeInterval: 40000,
  darkModeDuration: 20000,
};

export const VISITOR_SPAWN_COUNT = 8;

export const VISITOR_IMAGES: Record<string, string> = {
  elf: elfImg,
  human: humanImg,
  org: orgImg,
  goblin: goblinImg,
  gandalf: gandalfImg,
  sauron: sauronImg,
  ring: ringImg,
  gollum: gollumImg,
  heart: heartImg,
};

export const HOTEL_IMAGES = {
  hotel1: hotel1Img,
  hotel2: hotel2Img,
  hotel3: hotel3Img,
  hotel4: hotel4Img,
};

export const LOGO_IMAGES = {
  logo: logoImg,
  github: githubIcon,
  linkedin: linkedinIcon,
};

export const GAME_OVER_IMAGES = {
  over: overGif,
  gandalfWon: gandalfWonGif,
  sauronWon: sauronWonGif,
};

export const AUDIO_FILES = {
  background: backgroundSnd,
  bad: badSnd,
  good: goodSnd,
  gollum: gollumSnd,
  gandalf: gandalfSnd,
  sauron: sauronSnd,
  ring: ringSnd,
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
