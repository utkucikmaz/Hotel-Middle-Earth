import { GameStateManager } from './GameState';
import { EventManager } from './EventManager';
import { AudioService } from '@/services/AudioService';
import { FirebaseService } from '@/services/FirebaseService';
import { StorageService } from '@/services/StorageService';
import { Visitor } from '@/entities/Visitor';
import { Hotel } from '@/entities/Hotel';
import { HUD } from '@/ui/HUD';
import { Menu } from '@/ui/Menu';
import { Instructions } from '@/ui/Instructions';
import { GameOver, GameOverType } from '@/ui/GameOver';
import { Leaderboard } from '@/ui/Leaderboard';
import { PauseMenu } from '@/ui/PauseMenu';
import { Settings, SettingsConfig } from '@/ui/Settings';
import { GAME_CONFIG, SCORE_VALUES, HEALTH_VALUES, KEYBOARD_CONTROLS } from '@/utils/constants';
import { ParticleEffect } from '@/utils/particles';
import bcgImg from '@/assets/images/bcg.jpg';
import darkBcgImg from '@/assets/images/dark-bcg.jpg';

export class Game {
  private gameState: GameStateManager;
  private eventManager: EventManager;
  private audioService: AudioService;
  private firebaseService: FirebaseService;
  private storageService: StorageService;

  private parentElement: HTMLElement;
  private visitors: Visitor[] = [];
  private hotel: Hotel | null = null;
  private hud: HUD | null = null;
  private particleEffect: ParticleEffect;

  private menu: Menu;
  private instructions: Instructions;
  private gameOver: GameOver;
  private leaderboard: Leaderboard;
  private pauseMenu: PauseMenu;
  private settings: Settings;
  private settingsConfig: SettingsConfig = {
    musicEnabled: true,
    soundEffectsEnabled: true,
    spawnCount: 8,
    musicVolume: 0.3,
    effectsVolume: 1.0,
  };

  private visitorSpawnInterval: number | null = null;
  private visitorCleanupTimeout: number | null = null;
  private darkModeInterval: number | null = null;
  private darkModeTimeout: number | null = null;
  private cycleInterval: number | null = null;

  constructor(parentElement: HTMLElement) {
    this.parentElement = parentElement;
    this.gameState = new GameStateManager();
    this.eventManager = new EventManager();
    this.audioService = new AudioService();
    this.firebaseService = new FirebaseService();
    this.storageService = new StorageService();
    this.particleEffect = new ParticleEffect(parentElement);

    this.menu = new Menu(parentElement, {
      onStart: (userName) => this.startGame(userName),
      onInstructions: () => this.showInstructions(),
      onShowLeaderboard: () => this.showLeaderboardFromMenu(),
    });

    this.instructions = new Instructions(parentElement, {
      onBack: () => this.showMenu(),
    });

    this.gameOver = new GameOver(parentElement, {
      onRestart: () => this.restart(),
      onShowLeaderboard: () => this.showLeaderboard(),
    });

    this.leaderboard = new Leaderboard(parentElement, {
      onBack: () => this.restart(),
    });

    this.pauseMenu = new PauseMenu(parentElement, {
      onResume: () => this.resumeGame(),
      onRestart: () => this.restart(),
      onSettings: () => this.showSettings(),
    });

    this.settings = new Settings(parentElement, this.audioService, this.settingsConfig, {
      onClose: () => this.resumeGame(),
      onApply: (config) => this.applySettings(config),
    });

    this.setupKeyboardControls();
    this.showMenu();
  }

  private setupKeyboardControls(): void {
    document.addEventListener('keydown', (event) => {
      if (this.gameState.getState() === 'playing') {
        if (event.key === KEYBOARD_CONTROLS.PAUSE || event.key === KEYBOARD_CONTROLS.ESCAPE) {
          event.preventDefault();
          this.pauseGame();
        } else if (event.key === KEYBOARD_CONTROLS.MUTE) {
          event.preventDefault();
          this.audioService.toggleMute();
        }
      } else if (this.gameState.getState() === 'paused') {
        if (event.key === KEYBOARD_CONTROLS.PAUSE || event.key === KEYBOARD_CONTROLS.ESCAPE) {
          event.preventDefault();
          this.resumeGame();
        } else if (event.key === KEYBOARD_CONTROLS.RESTART) {
          event.preventDefault();
          this.restart();
        }
      }
    });
  }

  private showMenu(): void {
    this.cleanup();
    this.gameState.setState('menu');
    this.menu.show();
  }

  private showInstructions(): void {
    this.instructions.show();
  }

  private async startGame(userName: string): Promise<void> {
    this.gameState.setUserName(userName);
    this.gameState.setState('playing');
    this.menu.hide();

    this.parentElement.style.backgroundImage = `url('${bcgImg}')`;

    this.hotel = new Hotel(this.parentElement);
    this.hud = new HUD(this.parentElement);

    this.updateHUD();
    this.audioService.play('background');

    this.startVisitorCycle();
  }

  private startVisitorCycle(): void {
    const spawnAndClean = () => {
      this.spawnVisitors();

      this.visitorCleanupTimeout = window.setTimeout(() => {
        this.cleanupVisitors();
      }, GAME_CONFIG.visitorLifetime);
    };

    spawnAndClean();
    this.visitorSpawnInterval = window.setInterval(spawnAndClean, GAME_CONFIG.visitorSpawnInterval);

    this.darkModeTimeout = window.setTimeout(() => {
      this.toggleDarkMode();
    }, GAME_CONFIG.darkModeDuration);

    this.cycleInterval = window.setInterval(() => {
      spawnAndClean();
      this.darkModeTimeout = window.setTimeout(() => {
        this.toggleDarkMode();
      }, GAME_CONFIG.darkModeDuration);
    }, GAME_CONFIG.darkModeInterval);
  }

  private spawnVisitors(): void {
    const spawnCount = this.settingsConfig.spawnCount;
    for (let i = 0; i < spawnCount; i++) {
      const visitor = new Visitor(this.gameState.hasTheRing());
      this.visitors.push(visitor);
      this.parentElement.appendChild(visitor.domElement);

      visitor.domElement.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.handleVisitorClick(visitor);
      });
      visitor.domElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleVisitorClick(visitor);
        }
      });
    }
  }

  private cleanupVisitors(): void {
    this.visitors.forEach((visitor) => visitor.destroy());
    this.visitors = [];
  }

  private toggleDarkMode(): void {
    const isDark = !this.gameState.isDarkModeActive();
    this.gameState.setDarkMode(isDark);

    this.parentElement.style.backgroundImage = isDark
      ? `url('${darkBcgImg}')`
      : `url('${bcgImg}')`;

    if (isDark) {
      this.darkModeTimeout = window.setTimeout(() => {
        this.toggleDarkMode();
      }, GAME_CONFIG.darkModeDuration);
    }
  }

  private handleVisitorClick(visitor: Visitor): void {
    if (this.gameState.getState() !== 'playing') return;

    const isDark = this.gameState.isDarkModeActive();
    const rect = visitor.domElement.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    if (isDark) {
      this.handleVisitorClickEvil(visitor);
    } else {
      this.handleVisitorClickGood(visitor);
    }
    const type = visitor.type;
    if (type === 'gandalf' || type === 'sauron' || type === 'ring') {
      this.particleEffect.createClickEffect(x, y, 'special');
    } else if (
      ((type === 'human' || type === 'elf') && !isDark) ||
      ((type === 'org' || type === 'goblin') && isDark)
    ) {
      this.particleEffect.createClickEffect(x, y, 'good');
    } else {
      this.particleEffect.createClickEffect(x, y, 'bad');
    }

    visitor.startMoving(isDark);
    this.updateHUD();
    this.checkGameEnd();
  }

  private handleVisitorClickGood(visitor: Visitor): void {
    const type = visitor.type;

    if (type === 'human' || type === 'elf') {
      this.gameState.addScore(SCORE_VALUES.goodVisitor);
      this.audioService.play('good');
    } else if (type === 'org' || type === 'goblin') {
      this.gameState.addScore(SCORE_VALUES.badVisitor);
      this.gameState.addHealth(HEALTH_VALUES.badVisitor);
      this.audioService.play('bad');
    } else if (type === 'gandalf' && this.gameState.getGoodWins().includes('ring')) {
      this.audioService.play('gandalf');
      this.gameState.addScore(SCORE_VALUES.specialCharacter);
      this.gameState.addGoodWin('gandalf');
      this.endGame('gandalf');
    } else if (type === 'ring' && this.gameState.getGoodWins().length === 0) {
      this.audioService.play('ring');
      this.gameState.setCurrentSide('good');
      this.gameState.addGoodWin('ring');
      this.gameState.setRing(true);
      this.hud?.showInfo('You captured the Ring. Find Gandalf to destroy it.');
    } else if (type === 'gollum' && this.gameState.getGoodWins().includes('ring')) {
      this.gameState.removeGoodWin('ring');
      this.gameState.setRing(false);
      this.audioService.play('gollum');
      this.hud?.showInfo('Gollum stole your Ring!');
    } else if (type === 'gollum' && this.gameState.getDarkWins().includes('ring')) {
      this.gameState.removeDarkWin('ring');
      this.gameState.setRing(false);
      this.audioService.play('gollum');
      this.hud?.showInfo('Gollum stole your Ring!');
    } else if (type === 'sauron') {
      this.audioService.play('sauron');
      this.gameState.addScore(SCORE_VALUES.specialCharacterPenalty);
      this.gameState.addHealth(HEALTH_VALUES.specialCharacter);
      this.hud?.showInfo('The power of Sauron is limited on this side.');
    } else if (type === 'gandalf' && !this.gameState.getGoodWins().includes('ring')) {
      this.audioService.play('gandalf');
      this.hud?.showInfo('You should find the Ring before Gandalf!');
    } else if (type === 'gollum') {
      this.hud?.showInfo("You don't have the Ring, Gollum run away.");
    }
  }

  private handleVisitorClickEvil(visitor: Visitor): void {
    const type = visitor.type;

    if (type === 'org' || type === 'goblin') {
      this.gameState.addScore(SCORE_VALUES.goodVisitor);
      this.audioService.play('bad');
    } else if (type === 'human' || type === 'elf') {
      this.gameState.addScore(SCORE_VALUES.badVisitor);
      this.gameState.addHealth(HEALTH_VALUES.badVisitor);
      this.audioService.play('good');
    } else if (type === 'sauron' && this.gameState.getDarkWins().includes('ring')) {
      this.audioService.play('sauron');
      this.gameState.addScore(SCORE_VALUES.specialCharacter);
      this.gameState.addDarkWin('sauron');
      this.endGame('sauron');
    } else if (type === 'ring' && this.gameState.getDarkWins().length === 0) {
      this.audioService.play('ring');
      this.gameState.setCurrentSide('evil');
      this.gameState.addDarkWin('ring');
      this.gameState.setRing(true);
      this.hud?.showInfo('You captured the Ring. Find Sauron to rule the Middle Earth!');
    } else if (type === 'gollum' && this.gameState.getDarkWins().includes('ring')) {
      this.gameState.removeDarkWin('ring');
      this.gameState.setRing(false);
      this.audioService.play('gollum');
      this.hud?.showInfo('Gollum stole your Ring!');
    } else if (type === 'gollum' && this.gameState.getGoodWins().includes('ring')) {
      this.gameState.removeGoodWin('ring');
      this.gameState.setRing(false);
      this.audioService.play('gollum');
      this.hud?.showInfo('Gollum stole your Ring!');
    } else if (type === 'gandalf') {
      this.audioService.play('gandalf');
      this.gameState.addScore(SCORE_VALUES.specialCharacterPenalty);
      this.gameState.addHealth(HEALTH_VALUES.specialCharacter);
      this.hud?.showInfo('The power of Gandalf is limited on this side.');
    } else if (type === 'sauron' && !this.gameState.getDarkWins().includes('ring')) {
      this.audioService.play('sauron');
      this.hud?.showInfo('You should find the Ring before Sauron!');
    } else if (type === 'gollum') {
      this.hud?.showInfo("You don't have the Ring, Gollum run away.");
    }
  }

  private updateHUD(): void {
    if (!this.hud) return;

    this.hud.updateScore(this.gameState.getScore());
    this.hud.updateHealth(this.gameState.getHealth());
    this.hud.updateRing(this.gameState.hasTheRing(), this.gameState.isDarkModeActive(), () => {
      const side = this.gameState.getCurrentSide();
      const message =
        side === 'good'
          ? 'The ring is captured by Minas Tirith, find Gandalf'
          : 'The ring is captured by Mordor, find Sauron';
      this.hud?.showInfo(message);
    });
  }

  private checkGameEnd(): void {
    if (this.gameState.getHealth() <= 0) {
      this.endGame('defeat');
    }
  }

  private async endGame(type: GameOverType): Promise<void> {
    this.gameState.setState('gameOver');
    this.stopAllIntervals();
    this.cleanupVisitors();
    this.audioService.stop('background');

    await this.firebaseService.saveScore({
      userName: this.gameState.getUserName(),
      score: this.gameState.getScore(),
    });

    this.storageService.saveHighScore(this.gameState.getScore());

    this.gameOver.show(type, this.gameState.getUserName(), this.gameState.getScore());
  }

  private pauseGame(): void {
    if (this.gameState.getState() !== 'playing') return;

    this.gameState.setState('paused');
    this.stopAllIntervals();
    this.audioService.stop('background');
    this.pauseMenu.show();
  }

  private resumeGame(): void {
    if (this.gameState.getState() !== 'paused') return;

    this.gameState.setState('playing');
    this.audioService.play('background');
    this.pauseMenu.hide();
    this.startVisitorCycle();

    if (document.fullscreenElement === null) {
      this.parentElement.requestFullscreen().catch((err) => {
        console.warn('Could not enter fullscreen:', err);
      });
    }
  }

  private showSettings(): void {
    this.settings.show();
  }

  private applySettings(config: SettingsConfig): void {
    this.settingsConfig = { ...config };

    if (!config.musicEnabled) {
      this.audioService.mute();
    } else {
      this.audioService.unmute();
    }

    this.audioService.setEffectsEnabled(config.soundEffectsEnabled);
    this.audioService.setBackgroundVolume(config.musicVolume);
    this.audioService.setEffectsVolume(config.effectsVolume);

    this.hud?.showInfo(
      `Settings applied! Spawning ${config.spawnCount} characters per wave.`,
      2000
    );

    this.resumeGame();
  }

  private async showLeaderboard(): Promise<void> {
    const scores = await this.firebaseService.getTopScores(10);
    this.leaderboard.show(scores);
  }

  private async showLeaderboardFromMenu(): Promise<void> {
    const scores = await this.firebaseService.getTopScores(10);
    this.leaderboard.show(scores, () => this.showMenu());
  }

  private restart(): void {
    this.cleanup();
    this.gameState.reset();
    window.location.reload();
  }

  private stopAllIntervals(): void {
    if (this.visitorSpawnInterval) {
      clearInterval(this.visitorSpawnInterval);
      this.visitorSpawnInterval = null;
    }
    if (this.visitorCleanupTimeout) {
      clearTimeout(this.visitorCleanupTimeout);
      this.visitorCleanupTimeout = null;
    }
    if (this.darkModeInterval) {
      clearInterval(this.darkModeInterval);
      this.darkModeInterval = null;
    }
    if (this.darkModeTimeout) {
      clearTimeout(this.darkModeTimeout);
      this.darkModeTimeout = null;
    }
    if (this.cycleInterval) {
      clearInterval(this.cycleInterval);
      this.cycleInterval = null;
    }
  }

  private cleanup(): void {
    this.stopAllIntervals();
    this.cleanupVisitors();
    this.hotel?.destroy();
    this.hud?.destroy();
    this.pauseMenu.hide();
    this.particleEffect.cleanup();
    this.hotel = null;
    this.hud = null;
  }

  destroy(): void {
    this.cleanup();
    this.audioService.cleanup();
    this.eventManager.clear();
  }
}
