# Prestige Estates - Modern Real Estate Website

## Project Overview

A modern, responsive real estate website built with React, Vite, TypeScript, and Tailwind CSS. Features a clean, professional design with navy and gold accents, optimized for performance and SEO.

## Key Features

### Navigation & Routing
- **Client-side routing** using React Router for seamless navigation
- **Automatic scroll-to-top** on route changes with smooth animation (respects `prefers-reduced-motion`)
- **Active link states** in footer navigation with visual indicators
- All internal links use React Router's `<Link>` component for SPA behavior

### Pages
- **Home**: Hero section, featured properties, testimonials with AI-generated avatars, FAQ, contact form
- **Properties**: Grid layout with filtering options
- **Agents**: Profile cards with contact information
- **About**: Company story, statistics, timeline
- **Contact**: Form with validation, map integration

### Design & Accessibility
- **Responsive design** optimized for all devices
- **Keyboard navigation** support with visible focus states
- **ARIA labels** on interactive elements
- **Semantic HTML** structure for better accessibility
- **Optimized images** with proper alt text

### Performance Optimizations
- **Lazy loading** for images
- **Code splitting** with React Router
- **Optimized bundle size** with Vite
- **SEO optimization** with meta tags and sitemap

## Technical Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **Routing**: React Router v6
- **Icons**: Lucide React

## Project Structure

```
src/
├── assets/          # Images and static assets
│   ├── avatar-*.jpg # AI-generated testimonial avatars (6 unique)
│   ├── property-*.jpg
│   └── agent-*.jpg
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollToTop.tsx # Handles scroll behavior on navigation
│   ├── home/        # Home page sections
│   └── ui/          # Reusable UI components
├── pages/           # Page components
├── lib/             # Utilities
└── App.tsx          # Main app component with routing
```

## Custom Features

### ScrollToTop Component
Located in `src/components/layout/ScrollToTop.tsx`, this component:
- Automatically scrolls to top on route changes
- Respects user's motion preferences
- Uses smooth scrolling when motion is allowed

### Footer Navigation
The footer (`src/components/layout/Footer.tsx`) includes:
- Internal navigation links with active states
- Social media icons
- Contact information
- Service listings

### Testimonials Section
Features 6 testimonials with:
- AI-generated avatar images (not real people)
- Star ratings
- Professional testimonial cards
- Responsive grid layout

To update testimonial avatars, replace the images in `src/assets/avatar-*.jpg`

## Development

### Prerequisites
- Node.js & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Deployment

### Via Lovable
Simply open [Lovable](https://lovable.dev/projects/c75e1c84-f6b3-433e-b140-2b3de8197540) and click on Share -> Publish.

### Custom Domain
To connect a custom domain:
1. Navigate to Project > Settings > Domains
2. Click "Connect Domain"
3. Follow the DNS configuration instructions

Read more: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## SEO Configuration

The project includes:
- `public/sitemap.xml` - XML sitemap for search engines
- `public/robots.txt` - Crawler instructions
- Meta tags in `index.html`
- Semantic HTML structure throughout

## Accessibility Checklist

✅ Keyboard navigation support  
✅ Focus states on interactive elements  
✅ ARIA labels on navigation links  
✅ Semantic HTML structure  
✅ Alt text on all images  
✅ Color contrast compliance  
✅ Responsive design  
✅ Smooth scrolling with motion preference support  

## Performance Targets

- Lighthouse Performance: ≥ 90
- Lighthouse SEO: ≥ 90
- Lighthouse Accessibility: ≥ 90
- Lighthouse Best Practices: ≥ 90

## License

This project is created with Lovable. See license terms at [lovable.dev](https://lovable.dev)

## Support

For issues or questions:
- Visit the [Lovable Project](https://lovable.dev/projects/c75e1c84-f6b3-433e-b140-2b3de8197540)
- Check the [Lovable Documentation](https://docs.lovable.dev/)
- Join the [Lovable Discord Community](https://discord.gg/lovable)