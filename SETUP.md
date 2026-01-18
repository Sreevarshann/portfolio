# 🚀 Quick Setup Guide

## Step 1: Extract the ZIP
Extract the `portfolio-nextjs.zip` file to your desired location.

## Step 2: Install Dependencies
Open terminal in the project folder and run:

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js
- All dependencies

**Note**: This may take 2-3 minutes depending on your internet connection.

## Step 3: Run Development Server

```bash
npm run dev
```

The site will open at: **http://localhost:3000**

## Step 4: Customize Content

Edit these files to update your information:

1. **Personal Info**: `components/Hero.tsx`, `components/About.tsx`
2. **Experience**: `components/Experience.tsx`
3. **Projects**: `components/Projects.tsx`
4. **Skills**: `components/Skills.tsx`
5. **Contact**: `components/Contact.tsx`

## Step 5: Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## Deploy to Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Your site is live.

---

## Troubleshooting

### "Command not found: npm"
Install Node.js from: https://nodejs.org

### "Port 3000 already in use"
```bash
npx kill-port 3000
npm run dev
```

### Build errors
```bash
rm -rf node_modules .next
npm install
npm run build
```

---

**Need help?** Check README.md for detailed documentation.
