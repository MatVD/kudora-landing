# Kudora Landing Page

Official landing page for Kudora - A decentralized network infrastructure project.

## 🚀 Features

- **Modern React Stack**: Built with React 18, TypeScript, and Vite 7
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experiences
- **Interactive Particles**: Dynamic particle background with TSParticles for visual appeal
- **SEO Optimized**: Comprehensive meta tags for search engines and social media sharing
- **Icon Library**: Lucide React for beautiful, consistent icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Kudora-Labs/kudora-landing.git
cd kudora-landing
```

2. Install dependencies:

```bash
npm install
```

## 🏃 Running the Project

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the project for production:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

### Quick Deploy

For a complete deployment guide, see:

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Detailed deployment documentation

### Automated Deployment

```bash
# Configure your server details in deploy.sh
./deploy.sh user@your-server-ip
```

### Manual Deployment

```bash
# 1. Build the project
npm run build

# 2. Transfer files to server
scp -r dist/* user@server-ip:/tmp/kudora-landing/

# 3. On the server
sudo mv /tmp/kudora-landing/* /var/www/kudora-landing/
sudo chown -R www-data:www-data /var/www/kudora-landing
```

The project includes:

- `nginx.conf` - Nginx server configuration
- `deploy.sh` - Automated deployment script
- Complete SSL/HTTPS setup instructions

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
kudora-landing/
├── src/
│   ├── assets/              # Static assets (images, logos)
│   │   └── logo_dark_v1.svg
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── ParticlesBackground.tsx
│   │   ├── Overview.tsx
│   │   ├── WhyKudora.tsx
│   │   ├── NetworkStatus.tsx
│   │   ├── EcosystemVision.tsx
│   │   ├── Roadmap.tsx
│   │   ├── CallToAction.tsx
│   │   └── Footer.tsx
│   ├── utils/               # Utility functions
│   │   └── socialUtils.ts
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🎨 Components Overview

The landing page is composed of the following sections (in order):

1. **Hero** - Main hero section with headline, CTA, and animated particle background
2. **Overview** - Introduction to Kudora Chain
3. **WhyKudora** - Key benefits and features
4. **NetworkStatus** - Real-time network statistics
5. **EcosystemVision** - Vision and ecosystem overview
6. **Roadmap** - Development roadmap
7. **CallToAction** - Conversion section
8. **Footer** - Links and social media

### ParticlesBackground Component

**`src/components/ParticlesBackground.tsx`**

An interactive particle effect system used in the Hero section, built with TSParticles v3.0:

**Features:**

- ✨ **Glow Effect** - Particles with pronounced shadow/halo (15px blur)
- 🎨 **Theme Colors** - Purple (#8B5CF6) and Teal (#14B8A6) color palette
- 💫 **50 Optimized Particles** - Variable sizes (2-8px) with smooth animations
- 🔗 **Connection Lines** - Subtle purple lines (opacity: 0.25) connecting nearby particles
- 🎭 **Smooth Movement** - Slow, professional animation (speed: 1.2)
- 🖱️ **Interactive**:
  - Hover: Particles connect to cursor (grab mode)
  - Click: Adds 3 new particles (push mode)
- ⚡ **Performance Optimized** - 60 FPS limit, uses `@tsparticles/slim` for smaller bundle
- 📱 **Responsive** - Automatic density adjustment based on screen size
- 🎯 **Retina Ready** - High-DPI display support

**Technical Implementation:**

- Uses React hooks (`useEffect`, `useState`, `useCallback`)
- Initializes engine with `initParticlesEngine` and `loadSlim`
- Fully typed with TypeScript strict mode
- Zero-impact on layout (position: absolute, z-index: 0)

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) v18 - A JavaScript library for building user interfaces
- **Build Tool**: [Vite](https://vitejs.dev/) v7 - Next generation frontend tooling
- **Language**: [TypeScript](https://www.typescriptlang.org/) v5 - JavaScript with syntax for types
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3 - A utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) v12 - Production-ready motion library
- **Particles**: [TSParticles](https://particles.js.org/) v3 - Lightweight particles animation library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Kudora Labs.

## 📧 Contact

Kudora Labs - [@KudoraLabs](https://github.com/Kudora-Labs)

Project Link: [https://github.com/Kudora-Labs/kudora-landing](https://github.com/Kudora-Labs/kudora-landing)

For questions or support, reach out through:

- GitHub: https://github.com/Kudora-Labs
- Twitter: https://x.com/KudoraChain
- Discord: https://discord.gg/tRzeP4Cy

---

Made with ❤️ by Kudora Labs
