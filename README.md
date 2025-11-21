# Pohyi Sasha - Next.js MDX Site

A modern Next.js website with MDX support, internationalization, and theming.

## Features

- ✨ **Next.js 16** with App Router
- 🌍 **Internationalization (i18n)** - Support for Russian (ru), English (en), and Kazakh (kz)
- 🎨 **Theme Switching** - Light and dark mode support
- 📝 **MDX Support** - Write content in MDX format
- 📰 **News System** - Create news articles with MDX (e.g., `content/news/1/text.ru.mdx`)
- 📄 **Dynamic Pages** - Create pages with MDX (e.g., `content/pages/contacts.ru.mdx` → `/contacts`)
- 🎯 **TypeScript** - Full type safety
- 💅 **TailwindCSS** - Modern styling with shadcn/ui design tokens

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
npm run build
npm start
```

## Content Structure

### News Articles

Create news articles in `content/news/[id]/text.[locale].mdx`:

```
content/
  news/
    1/
      text.ru.mdx
      text.en.mdx
      text.kz.mdx
    2/
      text.ru.mdx
      text.en.mdx
      text.kz.mdx
```

Each news article should have frontmatter:

```mdx
---
title: "Article Title"
description: "Article description"
date: "2025-11-21"
---

# Your content here
```

### Dynamic Pages

Create pages in `content/pages/[slug].[locale].mdx`:

```
content/
  pages/
    contacts.ru.mdx
    contacts.en.mdx
    contacts.kz.mdx
    about.ru.mdx
    about.en.mdx
    about.kz.mdx
```

Each page should have frontmatter:

```mdx
---
title: "Page Title"
---

# Your content here
```

The pages will be automatically available at `/{locale}/{slug}` (e.g., `/ru/contacts`, `/en/about`).

## Language Support

- **Russian (ru)** - Default language
- **English (en)**
- **Kazakh (kz)**

Switch languages using the language selector in the navigation bar.

## Theme Support

Toggle between light and dark themes using the theme button in the navigation bar.

## Technology Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Content**: MDX (via @next/mdx and next-mdx-remote)
- **Internationalization**: next-intl
- **Theming**: next-themes
- **Content Parsing**: gray-matter

## License

ISC
