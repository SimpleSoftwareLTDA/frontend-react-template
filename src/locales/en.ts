export const en = {
  // Header
  header: {
    projects: 'Projects',
    github: 'GitHub',
    toggleTheme: 'Switch to {{mode}} mode',
    language: 'Language',
  },

  // Footer
  footer: {
    license: 'MIT License',
    author: 'Robson Cassiano',
    message: 'Live Long and Prosper 🖖🏻',
  },

  // Main content
  home: {
    title: 'Welcome to the Application',
    subtitle: 'This is your main content area.',
    scrollText: 'Scroll down to see the glassmorphism effect on the header. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },

  // Common
  common: {
    loading: 'Loading...',
    error: 'Error',
    close: 'Close',
  },
};

export type Translations = {
  header: {
    projects: string;
    github: string;
    toggleTheme: string;
    language: string;
  };
  footer: {
    license: string;
    author: string;
    message: string;
  };
  home: {
    title: string;
    subtitle: string;
    scrollText: string;
  };
  common: {
    loading: string;
    error: string;
    close: string;
  };
};
