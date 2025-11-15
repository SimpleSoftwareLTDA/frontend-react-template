import { en } from './en';
import { pt } from './pt';

export const translations = {
  en,
  pt,
} as const;

export type Language = keyof typeof translations;
export type { Translations } from './en';
