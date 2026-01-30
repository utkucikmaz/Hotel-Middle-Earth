# Deployment Guide

## Prerequisites

Before deploying, ensure you have:
- ✅ Built the project successfully (`npm run build`)
- ✅ Tested locally (`npm run dev`)
- ✅ Configured Firebase credentials in `.env`
- ✅ All assets in the `public/` folder

## GitHub Pages Deployment

### Option 1: Using GitHub Actions (Recommended)

1. **Create GitHub Actions workflow**:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}
          
      - name: Setup Pages
        uses: actions/configure-pages@v3
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. **Add Firebase secrets to GitHub**:
   - Go to your repository Settings → Secrets and variables → Actions
   - Add each Firebase credential as a secret:
     - `VITE_FIREBASE_API_KEY`
     - `VITE_FIREBASE_AUTH_DOMAIN`
     - `VITE_FIREBASE_PROJECT_ID`
     - `VITE_FIREBASE_STORAGE_BUCKET`
     - `VITE_FIREBASE_MESSAGING_SENDER_ID`
     - `VITE_FIREBASE_APP_ID`

3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: GitHub Actions

4. **Push to main branch**:
```bash
git add .
git commit -m "Add deployment workflow"
git push origin main
```

### Option 2: Manual Deployment

1. **Update vite.config.ts** with your base path:

```typescript
export default defineConfig({
  base: '/Hotel-Middle-Earth/', // Your repo name
  // ... rest of config
});
```

2. **Install gh-pages**:
```bash
npm install -D gh-pages
```

3. **Add deploy script to package.json**:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

4. **Deploy**:
```bash
npm run deploy
```

## Netlify Deployment

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Initialize site**:
```bash
netlify init
```

4. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Add environment variables** in Netlify dashboard:
   - Go to Site settings → Environment variables
   - Add all Firebase credentials

6. **Deploy**:
```bash
netlify deploy --prod
```

## Vercel Deployment

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Add environment variables**:
   - Go to project settings in Vercel dashboard
   - Add Firebase credentials under Environment Variables

5. **Redeploy**:
```bash
vercel --prod
```

## Post-Deployment Checklist

- [ ] Test the live site thoroughly
- [ ] Verify Firebase leaderboard works
- [ ] Check all images and sounds load correctly
- [ ] Test on mobile devices
- [ ] Verify fullscreen mode works
- [ ] Check all game mechanics function properly
- [ ] Test pause/resume functionality
- [ ] Verify keyboard controls work
- [ ] Check accessibility features
- [ ] Update README with live demo link

## Troubleshooting

### Assets not loading
- Ensure assets are in `public/` folder
- Check file paths in `src/utils/constants.ts`
- Verify base path in `vite.config.ts`

### Firebase not connecting
- Check environment variables are set correctly
- Verify Firebase project is active
- Check browser console for errors
- Ensure Firestore security rules are configured

### Build fails
- Clear cache: `rm -rf node_modules dist .vite`
- Reinstall: `npm install`
- Check for TypeScript errors: `npm run build`

### 404 errors on refresh
For GitHub Pages, add a `404.html` that redirects to `index.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/Hotel-Middle-Earth'">
  </head>
</html>
```

## Performance Optimization

Before deploying:
1. Optimize images (use WebP format)
2. Compress audio files
3. Enable gzip compression
4. Use CDN for assets if needed
5. Test with Lighthouse

## Monitoring

After deployment:
1. Set up Google Analytics (optional)
2. Monitor Firebase usage
3. Check error logs
4. Monitor performance metrics

## Updating the Deployment

To update your deployed site:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push origin main

# For manual deployment
npm run deploy
```

## Rolling Back

If you need to rollback:

```bash
# For GitHub Pages
git revert HEAD
git push origin main

# For Netlify/Vercel
# Use their dashboard to rollback to previous deployment
```

## Security Notes

- Never commit `.env` file
- Keep Firebase credentials in environment variables
- Set up proper Firestore security rules
- Enable rate limiting if needed
- Monitor for suspicious activity

## Support

If you encounter issues:
1. Check the troubleshooting section
2. Review build logs
3. Check browser console
4. Verify environment variables
5. Test locally first

Happy deploying! 🚀
