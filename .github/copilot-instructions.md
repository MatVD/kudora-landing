# Kudora Landing Page - AI Coding Agent Instructions

## Project Overview

A marketing landing page for Kudora, an EVM-compatible Layer-1 blockchain in the Cosmos ecosystem. Built as a single-page application with React 18, TypeScript, Vite, and Tailwind CSS.

## Architecture

- **Single-page layout**: `App.tsx` renders 8 sequential components (Hero → Overview → WhyKudora → NetworkStatus → EcosystemVision → Roadmap → CallToAction → Footer)
- **No routing**: Static component stack, no React Router
- **No state management**: Stateless presentation components only
- **Component structure**: Each section is a self-contained component in `src/components/`

## Development Commands

```bash
npm run dev         # Start dev server on localhost:5173
npm run build       # Production build (TypeScript + Vite)
npm run typecheck   # Run TypeScript checks without emitting files
npm run lint        # ESLint validation
npm run preview     # Preview production build
```

## Styling Conventions

- **Base background**: All sections use `bg-[#0F0F12]` (dark theme) or `bg-gray-900`
- **Color palette**: Purple (`from-purple-600`) and Teal (`to-teal-400`) for gradients
- **Responsive**: Use `sm:`, `md:`, `lg:` breakpoints consistently
- **Spacing**: Sections use `py-24` for vertical padding, max-width container is `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## Animation Patterns

All sections follow the same Framer Motion pattern:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

- **Stagger delays**: Use `delay: index * 0.1` for list items
- **Hover effects**: Cards use `hover:-translate-y-1` and `hover:shadow-xl`
- **Background animations**: Hero section has animated gradient blobs with `animate-pulse`

## Icon Usage

- **Library**: `lucide-react` (imported individually, e.g., `import { ArrowRight } from 'lucide-react'`)
- **Sizing**: Icons are typically `w-5 h-5` or `w-6 h-6`
- **Icon containers**: Use rounded gradient backgrounds (`w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20`)

## Component Patterns

1. **Section headers**: Centered with title, description, and optional badge (e.g., "Live & Operational")
2. **Card grids**: Use `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
3. **Gradient buttons**: Primary actions use `bg-gradient-to-r from-purple-600 to-purple-700`
4. **External links**: Include `<ExternalLink>` icon that appears on hover

## Key Files

- `src/utils/socialUtils.ts`: Centralized social media links (GitHub, Twitter, Discord)
- `tailwind.config.js`: Custom animation keyframes and extended theme
- `vite.config.ts`: Optimizes `lucide-react` in dependencies

## TypeScript Configuration

- **Strict mode enabled**: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- **Module resolution**: Uses `bundler` mode (Vite-specific)
- **References**: Split config (`tsconfig.app.json` for src/, `tsconfig.node.json` for Vite config)

## Integration Notes

- **Supabase**: Installed (`@supabase/supabase-js`) but not yet implemented in components
- **Links**: Many navigation links currently point to `#` placeholders (Block Explorer, Docs, etc.)
- **Assets**: Logo referenced at `/logo_dark_v1.svg` in Footer

## When Adding New Features

1. Create new component in `src/components/` with PascalCase naming
2. Import and add to `App.tsx` component stack in logical order
3. Follow existing motion animation patterns for consistency
4. Use the established purple-teal gradient color scheme
5. Ensure responsive breakpoints match existing sections
