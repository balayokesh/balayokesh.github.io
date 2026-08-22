# Portfolio Setup and Deployment

This project is a modern, responsive portfolio built with React, Vite, and Tailwind CSS. It highlights a clean, dark-mode aesthetic specifically tailored for backend engineers.

## Local Setup

Follow these steps to run the project locally on your machine:

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed (version 18 or higher is recommended).
2. **Install Dependencies**: Open your terminal in the project directory and run:
   ```bash
   npm install
   ```
3. **Run Development Server**: Start the local development server by running:
   ```bash
   npm run dev
   ```
4. **Preview**: Open `http://localhost:3000` (or the port specified in your terminal) in your browser to view the site.
5. **Build for Production**: To generate production-ready static files in the `dist` folder, run:
   ```bash
   npm run build
   ```

## Deployment Guide (Free & Easy)

You can deploy this site for free so it's live on the internet using Vercel or Netlify.

### Option A: Vercel (Recommended)

1. Create a free account at [Vercel](https://vercel.com).
2. Push your project code to a GitHub, GitLab, or Bitbucket repository.
3. In the Vercel dashboard, click **Add New...** > **Project**.
4. Import your newly created repository.
5. Vercel will automatically detect the Vite framework and apply the correct settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your portfolio will be live in seconds!

### Option B: Netlify

1. Create a free account at [Netlify](https://netlify.com).
2. Push your code to a Git repository.
3. Go to your Netlify dashboard and click **Add new site** > **Import an existing project**.
4. Connect to your Git provider and select your repository.
5. Apply the following build settings:
   - **Base directory**: (leave blank)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**.

Enjoy your new premium portfolio!
