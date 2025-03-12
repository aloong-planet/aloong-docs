---
sidebar_position: 0
title: Setup Tailwind v4
---

# Setting Up Tailwind CSS v4

Tailwind CSS v4 brings significant improvements over previous versions, including a new hsl color system, better performance, and expanded utility classes. This guide will help you set up Tailwind CSS v4 for your Next.js project, following the [official Tailwind CSS installation guide](https://tailwindcss.com/docs/installation/using-postcss).

## Installation Requirements

Install Tailwind CSS, its PostCSS plugin, and PostCSS itself:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

For those using other package managers:

```bash
# Yarn
yarn add tailwindcss @tailwindcss/postcss postcss

# pnpm
pnpm add tailwindcss @tailwindcss/postcss postcss
```

## Creating the Configuration Files

### 1. Configure PostCSS

Create a `postcss.config.mjs` file in the root of your project:

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

### 2. Create a Tailwind Config File (Optional)

If you need to customize Tailwind, create a `tailwind.config.ts` file in the root of your project:

Here's a example configuration based on a modern Next.js project:

```typescript
import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background) / <alpha-value>)',
                foreground: 'hsl(var(--foreground) / <alpha-value>)',
                card: {
                    DEFAULT: 'hsl(var(--card) / <alpha-value>)',
                    foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
                    foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
                    foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
                    foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
                    foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
                    foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
                },
                border: 'hsl(var(--border) / <alpha-value>)',
                input: 'hsl(var(--input) / <alpha-value>)',
                ring: 'hsl(var(--ring) / <alpha-value>)',
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

export default config;
```

## Integrating with CSS

### 1. Create a CSS file

Create a global CSS file (e.g., `app/globals.css` or `styles/globals.css`) and import Tailwind CSS:

```css
@import "tailwindcss";

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 2. Import CSS in Your Application

Import your CSS file in your application:

#### For App Router (Next.js 13+)
In `app/layout.tsx`:

```typescript
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### For Pages Router
In `pages/_app.tsx`:

```typescript
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

## Key Differences in Tailwind v4

Here are some important changes in Tailwind CSS v4:

1. **New Import System**: In v4, you simply use `@import "tailwindcss"` instead of the directive-based approach.

2. **PostCSS Integration**: The new `@tailwindcss/postcss` package is used as a plugin in your PostCSS config.

3. **HSL Color System**: The new configuration uses HSL color values with CSS variables for enhanced theming.

4. **Improved Performance**: Tailwind v4 includes significant performance improvements for build times.

5. **TypeScript Configuration**: Using `tailwind.config.ts` provides better type checking (optional).

## Testing Your Configuration

After setting up your Tailwind CSS v4 configuration, create a simple component to test it:

```tsx
export default function TestComponent() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-primary">
        Tailwind CSS v4 is working!
      </h1>
      <p className="mt-2 text-muted-foreground">
        This text should be using your configured color scheme.
      </p>
      <button className="mt-4 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
        Styled Button
      </button>
    </div>
  );
}
```

If your styles are applied correctly, your Tailwind CSS v4 configuration is working properly.

## Conclusion

Tailwind CSS v4 offers a more powerful and efficient approach to styling your Next.js applications. The simplified import system and improved performance make it an excellent choice for modern web development.

For more detailed information, refer to these official resources:

- [Tailwind CSS Installation with PostCSS](https://tailwindcss.com/docs/installation/using-postcss)
- [Framework Guides](https://tailwindcss.com/docs/installation/framework-guides)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
