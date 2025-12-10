# 💍 Reinhardus & Janita - Wedding Invitation Website

A beautiful, responsive, and animated wedding invitation website built with modern web technologies.

## 🌟 Features

- **Responsive Design** - Mobile-first design that looks great on all devices
- **Smooth Animations** - Beautiful animations using Framer Motion
- **Atomic Design Pattern** - Well-organized, reusable component structure
- **Multiple Sections**:
  - Welcome/Hero Section with wedding date
  - Our Story with images and timeline
  - Venue information with Google Maps integration
  - Daily schedule/timeline
  - Dress code guidelines with images
  - Additional information (kids, plus-ones welcome)
  - Gift/Registry information
  - Photo gallery
  - RSVP form with validation
  - Contact section
  - Footer
- **TanStack Router** - Modern client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Afrikaans Language** - Full interface in Afrikaans

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ (or upgrade from current 18 version)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The development server will open at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic building blocks (Button, Input, Text, etc.)
│   ├── molecules/       # Combinations of atoms (Hero, ImageCard, etc.)
│   └── organisms/       # Complex sections (StorySection, VenueSection, etc.)
├── pages/               # Page components (HomePage, RSVPPage)
├── utils/               # Utility functions
├── router.tsx           # TanStack Router configuration
├── App.tsx              # Main app component
├── index.css            # Global styles with Tailwind
└── main.tsx             # Entry point
```

## 🎨 Design System

### Colors
- **Primary**: Rose/Coral tones (Wedding theme)
- **Accent**: Warm beige/bronze
- **Typography**: Playfair Display (headers) + Inter (body)

### Components

#### Atoms
- `Button` - Customizable button with variants
- `Heading` - Responsive heading component
- `Text` - Flexible text component
- `Image` - Image with lazy loading
- `Input` - Form input field
- `Select` - Select dropdown
- `TextArea` - Text area for longer input

#### Molecules
- `Hero` - Hero section with background image
- `ImageCard` - Image with text content
- `TimelineItem` - Timeline event item
- `FeatureCard` - Feature showcase card
- `Navigation` - Top navigation bar
- `GalleryGrid` - Responsive image gallery

#### Organisms
- `StorySection` - Our story section
- `ScheduleSection` - Event schedule timeline
- `VenueSection` - Venue details with map
- `DressCodeSection` - Dress code guidelines
- `InfoSection` - Additional information
- `GiftSection` - Gift/Registry information
- `GallerySection` - Photo gallery
- `ContactSection` - Contact information
- `RSVPForm` - RSVP form with validation
- `Footer` - Website footer

## 🎯 Pages

- `/` - Home page with all sections
- `/rsvp` - Dedicated RSVP form page

## 📝 Customization

### Update Wedding Details
Edit the following files with your information:
- `src/pages/HomePage.tsx` - Hero title, date, and sections
- `src/components/organisms/VenueSection.tsx` - Venue name, address, coordinates
- `src/components/organisms/ScheduleSection.tsx` - Schedule times and events
- `src/components/organisms/ContactSection.tsx` - Contact information
- `src/components/molecules/Navigation.tsx` - Navigation links

### Update Colors
Edit `tailwind.config.js` to customize the primary and accent colors.

### Update Images
Replace placeholder URLs with your actual images. Current placeholders use Unsplash URLs.

### Update Dates
- RSVP Deadline: `src/components/organisms/RSVPForm.tsx`
- Wedding Date: `src/pages/HomePage.tsx`

## 🔧 Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **TanStack Router** - Client-side routing
- **React DOM** - DOM rendering

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

This creates a `dist` folder that can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3

## 📄 License

Created with ❤️ for Reinhardus & Janita

---

*Made with Tailwind CSS, Framer Motion, and lots of love! 💕*

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
