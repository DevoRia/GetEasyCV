# GitHub Pages Setup Guide

## Manual Setup Steps

If the automatic deployment fails, follow these manual steps:

### Step 1: Enable GitHub Pages

1. **Go to your repository settings:**
   - Navigate to `https://github.com/DevoRia/GetEasyCV`
   - Click **Settings** tab
   - Scroll down to **Pages** section

2. **Configure GitHub Pages:**
   - **Source:** Select "GitHub Actions"
   - **Branch:** Leave empty (will be handled by workflow)
   - Click **Save**

### Step 2: Add Google Analytics Secret

1. **Go to repository settings:**
   - Repository → **Settings** → **Secrets and variables** → **Actions**

2. **Add your Google Analytics tracking ID:**
   - Click **New repository secret**
   - **Name:** `VITE_GA_TRACKING_ID`
   - **Value:** `G-RYLRZLEVHN` (your tracking ID)
   - Click **Add secret**

### Step 3: Enable GitHub Actions

1. **Go to Settings → Actions → General**
2. **Actions permissions:** Select "Allow all actions and reusable workflows"
3. **Workflow permissions:** Select "Read and write permissions"
4. Click **Save**

### Step 4: Manual Workflow Trigger

If automatic deployment doesn't work:

1. **Go to Actions tab:**
   - Navigate to `https://github.com/DevoRia/GetEasyCV/actions`

2. **Select the workflow:**
   - Click on "Deploy GetEasyCV (Static)"

3. **Run workflow manually:**
   - Click **Run workflow** button
   - Select **main** branch
   - Click **Run workflow**

### Step 5: Check Deployment

1. **Monitor the workflow:**
   - Watch the workflow run in real-time
   - Check for any errors in the logs

2. **Find your site URL:**
   - After successful deployment, go to **Settings** → **Pages**
   - Your site URL will be displayed
   - Format: `https://devoria.github.io/GetEasyCV/`

### Troubleshooting

#### ❌ "Pages site failed" error
- Make sure Pages is enabled in Settings → Pages
- Try running the workflow manually
- Check that the repository has proper permissions

#### ❌ Build fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Look for syntax errors in the code

#### ❌ Analytics not working
- Verify `VITE_GA_TRACKING_ID` secret is set correctly
- Check browser console for errors
- Ensure tracking ID format is correct (`G-XXXXXXXXXX`)

### Alternative: Static Site Deployment

If GitHub Pages continues to fail, you can also:

1. **Use Netlify:**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Use Vercel:**
   - Import your GitHub repository to Vercel
   - It will automatically detect Vite and build

3. **Use GitHub Pages (manual):**
   - Build locally: `npm run build`
   - Upload `dist` folder to a `gh-pages` branch

### Environment Variables

| Secret Name | Description | Required |
|-------------|-------------|----------|
| `VITE_GA_TRACKING_ID` | Google Analytics 4 Measurement ID | Yes |

### Manual Build Test

To test locally before deployment:

```bash
# Install dependencies
npm ci

# Create environment file
echo "VITE_GA_TRACKING_ID=G-RYLRZLEVHN" > .env

# Build project
npm run build

# Check dist folder
ls -la dist/
```

The build should create a `dist` folder with your built application. 