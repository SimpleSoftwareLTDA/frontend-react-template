# MUI Header & Footer Template

A professional React + TypeScript + Material UI template with a reusable header and footer, perfect for quickly starting new projects.

## Features

- ✨ **Material UI v7** - Modern, professional UI components
- 🎨 **Dark/Light Mode** - Built-in theme toggle with custom teal accent colors
- 🌍 **Internationalization (i18n)** - Built-in EN/PT translations with easy-to-extend system
- 🔄 **Language Switcher** - Seamless PT/EN toggle in header
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **Glassmorphism Header** - Fixed header with blur effect
- ⚙️ **Easy Configuration** - Centralized config file for quick customization
- 🚀 **Vite** - Lightning-fast development and build
- 🎯 **TypeScript** - Full type safety for translations

## Quick Start

### Method 1: Using degit (Recommended)

```bash
# Clone this template
npx degit your-username/frontend-react-template my-new-project

# Enter directory and install dependencies
cd my-new-project
npm install

# Start development server
npm run dev
```

### Method 2: GitHub Template Button

1. Click **"Use this template"** on GitHub
2. Create your new repository
3. Clone and install:
```bash
git clone https://github.com/your-username/your-new-repo.git
cd your-new-repo
npm install
npm run dev
```

## Customization

All customizable settings are centralized in **`src/config/siteConfig.ts`**:

```typescript
export const siteConfig = {
  // Header Configuration
  header: {
    // Your GitHub profile URL
    githubUrl: 'https://github.com/yourusername',

    // Projects shown in dropdown (6-dots button)
    projects: [
      { name: 'Project Alpha', url: 'https://example.com/alpha' },
      { name: 'Project Beta', url: 'https://example.com/beta' },
      { name: 'Project Gamma', url: 'https://example.com/gamma' },
    ],
  },

  // Default Settings
  defaultLanguage: 'en' as 'en' | 'pt',
  defaultTheme: 'dark' as 'light' | 'dark',
};
```

### To Customize Your Project:

1. **Update project info**: Edit `src/config/siteConfig.ts`
2. **Add your projects**: Update the `projects` array
3. **Set your GitHub URL**: Change `githubUrl`
4. **Choose defaults**: Set `defaultLanguage` and `defaultTheme`
5. **Customize footer**: Edit `src/locales/en.ts` and `src/locales/pt.ts` (footer section)

## Internationalization (i18n)

The template includes built-in support for **English (EN)** and **Portuguese (PT)** translations.

### How It Works

All translations are stored in `src/locales/`:
- `en.ts` - English translations
- `pt.ts` - Portuguese translations

### Using Translations in Your Components

```typescript
import { useTranslation } from './contexts/LanguageContext';

function MyComponent() {
  const { t, translations, language } = useTranslation();

  return (
    <div>
      {/* Method 1: Direct access */}
      <h1>{translations.home.title}</h1>

      {/* Method 2: Using t() function with dot notation */}
      <p>{t('home.subtitle')}</p>

      {/* Method 3: With parameters */}
      <button>{t('header.toggleTheme', { mode: 'dark' })}</button>
    </div>
  );
}
```

### Adding New Translations

1. **Edit translation files**:
```typescript
// src/locales/en.ts
export const en = {
  mySection: {
    greeting: 'Hello {{name}}!',
    button: 'Click me',
  },
};

// src/locales/pt.ts
export const pt: Translations = {
  mySection: {
    greeting: 'Olá {{name}}!',
    button: 'Clique aqui',
  },
};
```

2. **Use in components**:
```typescript
const { t } = useTranslation();
return <h1>{t('mySection.greeting', { name: 'User' })}</h1>;
```

### Language Switching

The language switcher in the header automatically updates all translated content across your app!

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Fixed header with glassmorphism
│   ├── Footer.tsx      # Centered footer
│   └── index.ts        # Component exports
├── contexts/           # React contexts
│   ├── ThemeContext.tsx    # Theme provider (light/dark mode)
│   └── LanguageContext.tsx # i18n provider
├── config/             # Configuration
│   └── siteConfig.ts   # ⭐ Main config file - Edit this!
├── locales/            # Translation files
│   ├── en.ts          # English translations
│   ├── pt.ts          # Portuguese translations
│   └── index.ts       # Exports
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Theme Customization

The theme uses a professional teal color scheme. To customize colors, edit `src/contexts/ThemeContext.tsx`:

```typescript
primary: {
  main: mode === 'light' ? '#0f766e' : '#34d399', // Change these!
}
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Material UI v7** - Component library
- **Vite** - Build tool
- **Emotion** - CSS-in-JS styling

## License

MIT License - Feel free to use this template for any project!

## Credits

Template created by [Brainon Queiroz](https://github.com/QZBrainon)
