# Setup Guide for Hotel Middle Earth

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- TypeScript
- Vite
- Firebase
- ESLint & Prettier
- Vitest (testing framework)

### 2. Configure Firebase

#### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Follow the setup wizard
4. Enable Firestore Database

#### Get Firebase Credentials
1. In Firebase Console, go to Project Settings
2. Scroll to "Your apps" section
3. Click the web icon (</>) to add a web app
4. Copy the configuration object

#### Set Up Environment Variables
1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=AIzaSy...
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abc123
   ```

#### Configure Firestore Security Rules
In Firebase Console, go to Firestore Database > Rules and add:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{document} {
      // Allow anyone to read scores
      allow read: if true;
      
      // Allow writes only with valid data
      allow write: if request.resource.data.score is int 
                   && request.resource.data.userName is string
                   && request.resource.data.timestamp is int;
    }
  }
}
```

### 3. Move Assets to Public Folder

The project expects assets in the `public` folder. Move your existing assets:

```bash
# If you have images/ and sounds/ folders in the root
mv images public/
mv sounds public/
```

Your structure should look like:
```
public/
├── images/
│   ├── bcg.jpg
│   ├── dark-bcg.jpg
│   ├── elf.png
│   ├── human.png
│   └── ... (all other images)
└── sounds/
    ├── lotr.mp3
    ├── bad-sound.mp3
    └── ... (all other sounds)
```

## Development

### Start Development Server

```bash
npm run dev
```

This will start Vite dev server at `http://localhost:3000`

### Code Quality

```bash
# Run linter
npm run lint

# Format code
npm run format
```

### Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## Building for Production

### Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your base path:
   ```typescript
   export default defineConfig({
     base: '/Hotel-Middle-Earth/', // Your repo name
     // ... rest of config
   });
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy using GitHub Actions or manually:
   ```bash
   # Install gh-pages
   npm install -D gh-pages
   
   # Add to package.json scripts:
   "deploy": "npm run build && gh-pages -d dist"
   
   # Deploy
   npm run deploy
   ```

## Troubleshooting

### Module Resolution Errors

If you see errors about module resolution, ensure:
1. TypeScript paths are configured in `tsconfig.json`
2. Vite aliases match in `vite.config.ts`
3. Run `npm install` again

### Firebase Connection Issues

1. Check that `.env` file exists and has correct values
2. Verify Firebase project is active
3. Check browser console for specific errors
4. Ensure Firestore is enabled in Firebase Console

### Asset Loading Issues

1. Verify assets are in `public/` folder
2. Check file paths in `src/utils/constants.ts`
3. Ensure file names match exactly (case-sensitive)

### Build Errors

1. Clear cache: `rm -rf node_modules dist .vite`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`

## Migration from Old Version

If you're migrating from the old vanilla JS version:

1. **Backup your old code**:
   ```bash
   git checkout -b backup-old-version
   git add .
   git commit -m "Backup old version"
   ```

2. **Keep your Firebase credentials** from the old `script.js`

3. **Move assets** as described above

4. **Test thoroughly** before deploying

5. **Update GitHub Pages** deployment if needed

## Next Steps

After setup:
1. ✅ Test the game locally
2. ✅ Verify Firebase leaderboard works
3. ✅ Run tests to ensure everything works
4. ✅ Build and deploy to production
5. ✅ Update README with your demo link

## Support

If you encounter issues:
1. Check this guide first
2. Review error messages carefully
3. Check browser console for errors
4. Verify all dependencies are installed
5. Ensure Node.js version is 18+

For more help, open an issue on GitHub.
