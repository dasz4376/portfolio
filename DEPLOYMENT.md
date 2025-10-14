# Deployment Guide

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

## How It Works

Every time you push to the `main` or `master` branch, GitHub Actions will:
1. Check out your code
2. Install dependencies with pnpm
3. Build the production version
4. Deploy to GitHub Pages

## Setup Required (One-Time)

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/dasz4376/portfolio`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save the changes

### 2. Push the Workflow File

Make sure the `.github/workflows/deploy.yml` file is committed and pushed to your repository:

```bash
git add .github/workflows/deploy.yml
git add package.json
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

## How to Deploy

Simply push your changes to the main branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The deployment will start automatically! You can watch the progress:
1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Click on the latest workflow run

## Manual Deployment

You can also trigger a deployment manually:
1. Go to **Actions** tab on GitHub
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select the branch and click **Run workflow**

## Deployment URL

Your site will be available at:
**https://dasz4376.github.io/portfolio/**

## Troubleshooting

If deployment fails:
1. Check the Actions tab for error messages
2. Make sure the build succeeds locally: `pnpm run build`
3. Verify GitHub Pages is enabled in repository settings
4. Check that the workflow file is in `.github/workflows/deploy.yml`

