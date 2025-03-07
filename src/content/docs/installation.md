---
title: Installation & Setup
description: How this digital garden was planted and how to grow your own
---

# Installation & Setup

This digital garden is built using [Astro](https://astro.build) with the [Starlight](https://starlight.astro.build) documentation theme. Here's how you can create your own:

## Prerequisites

- Node.js (v16.12.0 or higher)
- npm (v7 or higher)

## Quick Start

1. Create a new Astro project with Starlight:
```bash
npm create astro@latest -- --template starlight
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Customization

The site can be customized in several ways:

1. **Configuration**: Edit `astro.config.mjs` to modify site settings
2. **Content**: Add Markdown files in `src/content/docs/`
3. **Styling**: Customize CSS in `src/styles/custom.css`
4. **Components**: Create custom components in `src/components/`

## Deployment

Build your site for production:
```bash
npm run build
```

The built site will be in the `dist/` directory, ready to be deployed to your favorite hosting platform. 