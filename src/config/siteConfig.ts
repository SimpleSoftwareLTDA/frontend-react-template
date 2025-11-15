/**
 * Site Configuration
 *
 * This file contains all the customizable settings for your application.
 * Update these values to personalize your site.
 */

export const siteConfig = {
  // Header Configuration
  header: {
    // GitHub profile link
    githubUrl: 'https://github.com/yourusername',

    // Project links shown in the dropdown menu (6-dots button)
    projects: [
      { name: 'Project Alpha', url: 'https://example.com/alpha' },
      { name: 'Project Beta', url: 'https://example.com/beta' },
      { name: 'Project Gamma', url: 'https://example.com/gamma' },
    ],
  },

  // Default Language ('en' or 'pt')
  defaultLanguage: 'en' as 'en' | 'pt',

  // Default Theme Mode
  defaultTheme: 'dark' as 'light' | 'dark',
};

export type SiteConfig = typeof siteConfig;
