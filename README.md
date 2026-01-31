# Hotel Middle Earth

An immersive browser-based game set in the Middle Earth universe. Collect visitors, make strategic choices, and compete for the highest score in this engaging fantasy adventure!

## [Live Demo](https://utkucikmaz.github.io/Hotel-Middle-Earth/)

## Features

### Core Gameplay

- **Strategic Decision Making** - Choose wisely between good and evil visitors
- **Dynamic Game Modes** - Switch between light and dark sides with unique rules
- **Special Characters** - Encounter Gandalf, Sauron, Gollum, and the One Ring
- **Global Leaderboard** - Compete with players worldwide via Firebase

### Technical Features

- **Modern Tech Stack** - Built with TypeScript, Vite, and modular architecture
- **Responsive Design** - Fully playable on desktop and mobile devices
- **Accessibility** - ARIA labels, keyboard navigation, and reduced motion support
- **Audio System** - Immersive sound effects with volume controls
- **Pause/Resume** - Full game state management with pause functionality
- **Local Storage** - Save settings and high scores locally
- **Secure Backend** - Environment-based Firebase configuration

## Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Firebase account (for leaderboard features)

### Installation

```bash
# Clone the repository
git clone https://github.com/utkucikmaz/Hotel-Middle-Earth.git
cd Hotel-Middle-Earth

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env and add your Firebase credentials

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## How to Play

### Good Side (Light Mode)

- ✅ **Collect**: Elves and Humans (+10 points)
- ❌ **Avoid**: Orcs and Goblins (-10 points, -1 health)
- 💍 **Find the Ring** and bring it to Gandalf to win!
- ⚠️ **Beware**: Sauron causes double damage on this side

### Evil Side (Dark Mode)

- ✅ **Collect**: Orcs and Goblins (+10 points)
- ❌ **Avoid**: Elves and Humans (-10 points, -1 health)
- 💍 **Find the Ring** and bring it to Sauron to conquer Middle Earth!
- ⚠️ **Beware**: Gandalf causes double damage on this side

### Special Characters

- 💍 **The Ring** - Rare spawn, required for victory
- 🧙 **Gandalf** - Destroys the ring (good side victory)
- 👁️ **Sauron** - Claims the ring (evil side victory)
- 🐸 **Gollum** - Steals your ring if you have it!

### Controls

- **Click/Tap** - Interact with visitors
- **Space/Esc** - Pause/Resume game
- **M** - Mute/Unmute audio
- **R** - Restart game (when paused)

## Architecture

### Project Structure

```
src/
├── core/              # Core game logic
│   ├── Game.ts        # Main game controller
│   ├── GameState.ts   # State management
│   └── EventManager.ts # Event system
├── entities/          # Game entities
│   ├── Visitor.ts     # Visitor class
│   └── Hotel.ts       # Hotel buildings
├── services/          # External services
│   ├── AudioService.ts    # Audio management
│   ├── FirebaseService.ts # Backend integration
│   └── StorageService.ts  # Local storage
├── ui/                # UI components
│   ├── HUD.ts         # Heads-up display
│   ├── Menu.ts        # Main menu
│   ├── GameOver.ts    # End screens
│   ├── Leaderboard.ts # Score display
│   └── PauseMenu.ts   # Pause overlay
├── utils/             # Utilities
│   ├── constants.ts   # Game constants
│   └── helpers.ts     # Helper functions
├── types/             # TypeScript types
│   ├── index.ts       # Type definitions
│   └── vite-env.d.ts  # Vite environment
└── main.ts            # Entry point
```

### Design Patterns Used

- **State Pattern** - Game state management (Menu, Playing, Paused, GameOver)
- **Observer Pattern** - Event-driven architecture
- **Singleton Pattern** - Service classes (Audio, Firebase, Storage)
- **Factory Pattern** - Visitor creation with random types
- **Module Pattern** - Clean separation of concerns

## Tech Stack

### Core

- **TypeScript 5.3** - Type-safe development
- **Vite 5.0** - Lightning-fast build tool
- **Firebase 10.7** - Backend and leaderboard

### Development

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Unit testing
- **GitHub Actions** - CI/CD pipeline

### Styling

- **CSS3** - Modern styling with custom properties
- **Responsive Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Layout system

## Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Copy your Firebase config
4. Add credentials to `.env`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Set up Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{document} {
      allow read: if true;
      allow write: if request.resource.data.score is int
                   && request.resource.data.userName is string;
    }
  }
}
```

## Performance Optimizations

- **RequestAnimationFrame** - Smooth animations
- **Object Pooling** - Efficient visitor management
- **Lazy Loading** - On-demand resource loading
- **Code Splitting** - Optimized bundle size
- **Asset Optimization** - Compressed images and audio
- **Memory Management** - Proper cleanup of intervals and listeners

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Utku Cikmaz**

- <img src="./src/assets/images/logo/logo.png" alt="Website" width="16" height="16"> **Website**: [utkucikmaz.com](https://utkucikmaz.com)
- <img src="./src/assets/images/logo/github-icon.svg" alt="GitHub" width="16" height="16"> **GitHub**: [utkucikmaz](https://github.com/utkucikmaz)
- <img src="./src/assets/images/logo/linkedin-icon.svg" alt="LinkedIn" width="16" height="16"> **LinkedIn**: [utkucikmaz](https://www.linkedin.com/in/utkucikmaz)

## Acknowledgments

- Inspired by J.R.R. Tolkien's Middle Earth universe
- Game assets and sounds from various open-source resources
- Built with modern web technologies and best practices

## Project Stats

- **Lines of Code**: ~3,000+
- **Files**: 25+ TypeScript modules
- **Test Coverage**: 80%+
- **Bundle Size**: <200KB (gzipped)
- **Lighthouse Score**: 95+

