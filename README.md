# Sarah Pyeon - Portfolio Website

A stunning, professional portfolio website for Sarah Pyeon, showcasing her achievements in music, research, cultural leadership, and community service.

## Features

- 🎨 Modern, sophisticated design with smooth animations
- 📱 Fully responsive (mobile-first approach)
- 🎵 YouTube video integration for performances
- 💝 GoFundMe integration for Parkinson's research support
- 📊 Interactive timeline and visualizations
- ♿ Accessibility features (ARIA labels, keyboard navigation)
- ⚡ Optimized for performance (lazy loading, intersection observer)

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS with custom Korean cultural theme
- **Animations:** Framer Motion
- **Video Embeds:** React YouTube
- **Forms:** React Hook Form
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. If you encounter npm permission errors, fix your npm cache permissions first:
```bash
sudo chown -R $(whoami) ~/.npm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Main navigation bar
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section with education timeline
│   │   ├── Research.tsx     # Research & publications
│   │   ├── Music.tsx        # Music & performance section
│   │   ├── Leadership.tsx   # Leadership roles
│   │   ├── Art.tsx          # Art & creative work
│   │   ├── Honors.tsx       # Honors & awards timeline
│   │   ├── Projects.tsx     # Project showcase
│   │   ├── Volunteer.tsx    # Volunteer experience
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer component
│   │   └── GoFundMeButton.tsx # Floating GoFundMe button
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Customization

### Adding YouTube Videos

In `src/components/Music.tsx`, replace the placeholder video IDs in the `performances` array:

```typescript
const performances = [
  {
    title: 'Performance Title',
    videoId: 'YOUR_YOUTUBE_VIDEO_ID', // Replace this
    // ...
  },
];
```

### Updating GoFundMe Link

Update the GoFundMe URL in:
- `src/components/Music.tsx` (line ~29)
- `src/components/Contact.tsx` (line ~23)
- `src/components/GoFundMeButton.tsx` (line ~16)

```typescript
const gofundmeUrl = 'https://www.gofundme.com/YOUR_CAMPAIGN_URL';
```

### Adding Resume PDF

1. Add your resume PDF to the `public/` folder
2. Update the resume URL in `src/components/Contact.tsx`:

```typescript
const resumeUrl = '/resume.pdf'; // Path to your PDF
```

### Social Media Links

Update social media links in `src/components/Contact.tsx` (around line 150):

```typescript
<a href="YOUR_LINKEDIN_URL" aria-label="LinkedIn">...</a>
<a href="YOUR_YOUTUBE_URL" aria-label="YouTube">...</a>
<a href="YOUR_INSTAGRAM_URL" aria-label="Instagram">...</a>
```

### Research Paper PDF

1. Add your research paper PDF to the `public/` folder
2. Update the PDF URL in `src/components/Research.tsx`:

```typescript
const featuredPublication = {
  // ...
  pdfUrl: '/research-paper.pdf', // Path to your PDF
};
```

## Color Theme

The website uses a custom Korean cultural color palette defined in `tailwind.config.js`:

- `korean-midnight`: #0a1628
- `korean-crimson`: #c41e3a
- `korean-gold`: #d4af37
- `korean-blue`: #1e3a5f
- `korean-red`: #ae023e

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and configure the build

### Netlify

1. Push your code to GitHub
2. In Netlify, create a new site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

The website includes:
- ARIA labels for all interactive elements
- Keyboard navigation support
- Alt text for images (add actual alt text when adding real images)
- Proper heading hierarchy
- High contrast color scheme

## Performance Optimization

- Lazy loading for videos and images
- Intersection Observer for scroll animations
- Code splitting with React
- Optimized bundle size with Vite

## License

All rights reserved. © 2025 Sarah Pyeon

## Contact

For questions or support, please contact: spyeon0529@gmail.com

