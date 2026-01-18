# Premium Portfolio - Next.js + TypeScript + Tailwind CSS

A modern, professional portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Three.js** - 3D background effects
- **Lucide React** - Beautiful icons

## ✨ Features

### Design
- Clean white minimalistic theme
- Professional typography (Instrument Sans + Libre Baskerville)
- Smooth scroll animations with Framer Motion
- 3D particle background with Three.js
- Custom cursor with follower effect
- Responsive design for all devices

### Components
- **Navigation** - Sticky header with smooth transitions
- **Hero** - Large typography with 3D background
- **Stats Bar** - Animated counter with stats
- **About** - Two-column layout with profile card
- **Experience** - Timeline with hover effects
- **Projects** - Card grid with detailed information
- **Skills** - Animated progress bars
- **Contact** - Functional form with validation
- **Loading Screen** - Animated letter reveal
- **Scroll Progress** - Top progress bar

### Animations
- Page load animations
- Scroll-triggered reveals
- Counter animations
- Progress bar fills
- Hover transitions
- Custom cursor effects

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. **Extract the ZIP file**
```bash
cd portfolio-nextjs
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🛠 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── Hero.tsx             # Hero section
│   ├── ThreeBackground.tsx  # 3D background
│   ├── StatsBar.tsx         # Stats with counters
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Timeline
│   ├── Projects.tsx         # Project cards
│   ├── Skills.tsx           # Skill bars
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer
│   ├── LoadingScreen.tsx    # Loading animation
│   ├── CustomCursor.tsx     # Custom cursor
│   └── ScrollProgress.tsx   # Progress bar
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
└── package.json             # Dependencies
```

## 🎨 Customization

### Content

#### Update Personal Information
Edit content in component files:

**Hero Section** (`components/Hero.tsx`):
```typescript
const titleWords = ['Your', 'Custom', 'Title']
```

**About Section** (`components/About.tsx`):
```typescript
// Update text, education, location
```

**Experience** (`components/Experience.tsx`):
```typescript
const experiences = [
  {
    date: 'Your Date',
    title: 'Your Title',
    // ... more fields
  }
]
```

**Projects** (`components/Projects.tsx`):
```typescript
const projects = [
  {
    title: 'Your Project',
    // ... more fields
  }
]
```

### Styling

#### Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors
    }
  }
}
```

#### Fonts
Change fonts in `app/layout.tsx`:
```typescript
import { Your_Font } from 'next/font/google'

const yourFont = Your_Font({
  subsets: ['latin'],
  variable: '--font-your',
})
```

#### Animation Speeds
Adjust in component files:
```typescript
transition={{ duration: 0.6 }} // Change duration
```

### 3D Background

Customize in `components/ThreeBackground.tsx`:
```typescript
const particleCount = 1000  // Particle density
const particleMaterial = new THREE.PointsMaterial({
  color: 0x000000,  // Color
  size: 1.5,         // Size
  opacity: 0.3       // Transparency
})
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload .next folder
```

### Self-Hosted
```bash
npm run build
npm start
```

### Environment Variables
Create `.env.local`:
```
# Add your environment variables
NEXT_PUBLIC_API_URL=your_api_url
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎯 Performance

- Optimized images with Next.js Image
- Code splitting with App Router
- Font optimization with next/font
- Lazy loading components
- Efficient animations with Framer Motion

## 📝 TypeScript

All components are fully typed. Example:

```typescript
interface ProjectCardProps {
  number: string
  title: string
  description: string
  // ... more types
}
```

## 🔌 Adding New Sections

1. Create component in `components/`:
```typescript
// components/NewSection.tsx
'use client'

import { motion } from 'framer-motion'

const NewSection = () => {
  return (
    <section id="new-section" className="py-32">
      {/* Your content */}
    </section>
  )
}

export default NewSection
```

2. Import in `app/page.tsx`:
```typescript
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <>
      {/* ... other components */}
      <NewSection />
    </>
  )
}
```

3. Add to navigation in `components/Navigation.tsx`:
```typescript
const navLinks = [
  // ... existing links
  { href: '#new-section', label: 'New Section' },
]
```

## 🐛 Troubleshooting

### Port already in use
```bash
npx kill-port 3000
npm run dev
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Type errors
```bash
npm run lint
# Fix reported issues
```

## 📦 Key Dependencies

```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "typescript": "^5.3.0",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^11.0.0",
  "three": "^0.160.0",
  "lucide-react": "^0.344.0"
}
```

## 🌟 Features Breakdown

### Framer Motion Animations
- `motion.div` for animated components
- `useInView` for scroll triggers
- `useSpring` for smooth values
- `whileInView` for viewport animations

### Tailwind CSS
- Utility classes for styling
- Custom theme configuration
- Responsive design utilities
- Custom animations in config

### TypeScript
- Type-safe props
- Interface definitions
- Better IDE support
- Compile-time checks

## 💡 Best Practices

1. **Components** - Keep components small and reusable
2. **Types** - Define interfaces for all props
3. **Styling** - Use Tailwind utilities, avoid custom CSS
4. **Performance** - Use `use client` only when needed
5. **Accessibility** - Include ARIA labels and semantic HTML

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Support

For questions or issues:
- Email: sathiyamurthy.sr@northeastern.edu
- Check Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

## 🔄 Updates

To update dependencies:
```bash
npm update
# or
npm install next@latest react@latest
```

---

**Built with Next.js 14, TypeScript, and Tailwind CSS**

Version: 1.0.0 | Last Updated: January 2026
