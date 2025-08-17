# Maruti Marketing Website

A modern, static marketing website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 15** with App Router
- 🎯 **TypeScript** for type safety
- 🎨 **Tailwind CSS v4** for styling
- 📱 **Responsive design**
- 🚀 **Static export** ready
- 🔧 **ESLint & Prettier** configured
- 🏗️ **Modern tooling** with Turbopack

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

Build the static website:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
├── lib/                 # Utility functions
├── types/              # TypeScript type definitions
└── styles/             # Additional styles
```

## Configuration

- **Next.js**: Configured for static export in `next.config.ts`
- **Tailwind CSS**: Using v4 with PostCSS in `postcss.config.mjs`
- **ESLint**: Configured in `eslint.config.mjs`
- **Prettier**: Configured in `.prettierrc.json`
- **TypeScript**: Configured in `tsconfig.json`

## Deployment

This project is configured for static export and can be deployed to any static hosting service like:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any CDN or web server

The built files in the `out` directory are ready to be served statically.
