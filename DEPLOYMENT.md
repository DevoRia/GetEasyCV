# Deployment Guide for GetEasyCV

This guide will help you deploy GetEasyCV to GitHub Pages using GitHub Actions with environment secrets.

## Prerequisites

- ✅ GitHub repository set up
- ✅ Google Analytics tracking ID ready
- ✅ GitHub Pages enabled on your repository

## Step 1: Enable GitHub Pages

1. **Go to your repository settings:**
   - Navigate to your GitHub repository
   - Click **Settings** tab
   - Scroll down to **Pages** section

2. **Configure GitHub Pages:**
   - **Source:** Select "GitHub Actions"
   - **Branch:** Leave as default (will be handled by workflow)

## Step 2: Add Environment Secrets

1. **Go to repository settings:**
   - Repository → **Settings** → **Secrets and variables** → **Actions**

2. **Add your Google Analytics tracking ID:**
   - Click **New repository secret**
   - **Name:** `VITE_GA_TRACKING_ID`
   - **Value:** Your GA4 tracking ID (e.g., `G-ABC123DEF4`)
   - Click **Add secret**

## Step 3: Configure Repository Settings

### Enable GitHub Actions
1. Go to **Settings** → **Actions** → **General**
2. **Actions permissions:** Select "Allow all actions and reusable workflows"
3. **Workflow permissions:** Select "Read and write permissions"
4. Click **Save**

### Enable Pages
1. Go to **Settings** → **Pages**
2. **Source:** Select "GitHub Actions"
3. **Branch:** Leave as default

## Step 4: Deploy Your Application

### Automatic Deployment
The workflow will automatically deploy when you:
- Push to `main` branch
- Create a pull request to `main` branch

### Manual Deployment
1. **Commit and push your changes:**
```bash
git add .
git commit -m "Add deployment workflow"
git push origin main
```

2. **Check deployment status:**
   - Go to **Actions** tab in your repository
   - You'll see the "Deploy GetEasyCV to GitHub Pages" workflow running

## Step 5: Access Your Deployed Application

### Find Your URL
1. **After successful deployment:**
   - Go to **Settings** → **Pages**
   - Your site URL will be displayed
   - Format: `https://devoria.github.io/GetEasyCV/`

2. **Or check Actions:**
   - Go to **Actions** → Latest workflow run
   - Click on the deployment job
   - You'll see the deployment URL

## Step 6: Verify Analytics

1. **Check browser console** on your deployed site
2. **Look for:** `"Google Analytics initialized with tracking ID: G-XXXXXXXXXX"`
3. **Test events** by using the application features
4. **Check Google Analytics** Real-time reports

## Workflow Features

### ✅ **Security**
- Environment variables stored as GitHub secrets
- No `.env` files in repository
- Secure deployment process

### ✅ **Automation**
- Automatic deployment on push to main
- Automatic deployment on pull requests
- Concurrent deployment protection

### ✅ **Performance**
- Node.js 18 with npm caching
- Optimized build process
- GitHub Pages CDN

### ✅ **Monitoring**
- Build status in Actions tab
- Deployment URL in workflow output
- Error handling and logging

## Troubleshooting

### ❌ **Workflow fails to start?**
- Check repository permissions
- Ensure Actions are enabled
- Verify workflow file is in `.github/workflows/`

### ❌ **Build fails?**
- Check Node.js version compatibility
- Verify all dependencies are in `package.json`
- Check for syntax errors in code

### ❌ **Analytics not working?**
- Verify `VITE_GA_TRACKING_ID` secret is set correctly
- Check browser console for errors
- Ensure tracking ID format is correct (`G-XXXXXXXXXX`)

### ❌ **Deployment fails?**
- Check Pages settings are configured
- Verify repository has Pages enabled
- Check workflow permissions

## Environment Variables

| Secret Name | Description | Required |
|-------------|-------------|----------|
| `VITE_GA_TRACKING_ID` | Google Analytics 4 Measurement ID | Yes |

## Custom Domain (Optional)

To use a custom domain:

1. **Add custom domain in Pages settings:**
   - Settings → Pages → Custom domain
   - Enter your domain (e.g., `geteasycv.com`)

2. **Configure DNS:**
   - Add CNAME record pointing to `devoria.github.io`
   - Or use A records for apex domain

3. **Enable HTTPS:**
   - GitHub will automatically provision SSL certificate

## Monitoring Deployment

### Check Deployment Status
- **Actions tab:** View workflow runs
- **Pages tab:** See deployment history
- **Settings → Pages:** View current deployment

### View Logs
- Go to **Actions** → Click on workflow run
- Click on individual job to see detailed logs
- Check for any error messages

## Security Best Practices

- ✅ **Secrets only:** No sensitive data in code
- ✅ **Minimal permissions:** Workflow uses least privilege
- ✅ **Secure deployment:** HTTPS enforced
- ✅ **Environment isolation:** Production secrets separate

## Performance Optimization

The workflow includes:
- **Caching:** npm dependencies cached
- **Concurrency control:** Prevents deployment conflicts
- **Optimized build:** Vite production build
- **CDN delivery:** GitHub Pages global CDN

Your GetEasyCV application will be automatically deployed to GitHub Pages with Google Analytics tracking enabled! 