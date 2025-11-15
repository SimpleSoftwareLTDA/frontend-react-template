/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";
import { translations, type Language, type Translations } from "../locales";
import { siteConfig } from "../config/siteConfig";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Helper function to get nested translation with dot notation
// e.g., t('header.projects')
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }

  const translate = (key: string, params?: Record<string, string>): string => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = context.t;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    // Replace parameters like {{mode}} with actual values
    if (params && typeof value === "string") {
      return Object.entries(params).reduce(
        (text, [param, val]) => text.replace(`{{${param}}}`, val),
        value
      );
    }

    return value;
  };

  return {
    language: context.language,
    setLanguage: context.setLanguage,
    t: translate,
    translations: context.t,
  };
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(
    siteConfig.defaultLanguage.toLowerCase() as Language
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
