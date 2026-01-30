import { initializeApp, FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  Firestore,
} from 'firebase/firestore';
import type { PlayerScore } from '@/types';

export class FirebaseService {
  private app: FirebaseApp | null = null;
  private db: Firestore | null = null;
  private initialized = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    try {
      const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
      };

      if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
        console.warn('Firebase configuration is missing. Leaderboard features will be disabled.');
        return;
      }

      this.app = initializeApp(firebaseConfig);
      this.db = getFirestore(this.app);
      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize Firebase:', error);
    }
  }

  async saveScore(playerScore: PlayerScore): Promise<boolean> {
    if (!this.initialized || !this.db) {
      console.warn('Firebase not initialized. Score not saved.');
      return false;
    }

    if (!playerScore.userName || playerScore.userName.trim() === '') {
      console.error('Invalid username. Score not saved.');
      return false;
    }

    try {
      const scoreData = {
        userName: playerScore.userName,
        score: playerScore.score,
        timestamp: Date.now(),
      };

      await addDoc(collection(this.db, 'users'), scoreData);
      return true;
    } catch (error) {
      console.error('Error saving score:', error);
      return false;
    }
  }

  async getTopScores(topN: number = 10): Promise<PlayerScore[]> {
    if (!this.initialized || !this.db) {
      console.warn('Firebase not initialized. Cannot fetch scores.');
      return [];
    }

    try {
      const scoresQuery = query(
        collection(this.db, 'users'),
        orderBy('score', 'desc'),
        limit(topN)
      );

      const querySnapshot = await getDocs(scoresQuery);
      const scores: PlayerScore[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data() as { userName: string; score: number; timestamp?: number };
        scores.push({
          userName: data.userName,
          score: data.score,
          timestamp: data.timestamp,
        });
      });

      return scores;
    } catch (error) {
      console.error('Error fetching top scores:', error);
      return [];
    }
  }

  isInitialized(): boolean {
    return this.initialized;
  }
}
