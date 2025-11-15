import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { siteConfig } from "../config/siteConfig";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeContextProvider");
  }
  return context;
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(siteConfig.defaultTheme);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#0f766e" : "#34d399", // teal-800 / teal-400
            light: mode === "light" ? "#14b8a6" : "#5eead4",
            dark: mode === "light" ? "#0d9488" : "#2dd4bf",
          },
          background: {
            default: mode === "light" ? "#f9fafb" : "#1a202c",
            paper: mode === "light" ? "#ffffff" : "#2d3748",
          },
          text: {
            primary: mode === "light" ? "#111827" : "#e5e7eb",
            secondary: mode === "light" ? "#6b7280" : "#9ca3af",
          },
          divider:
            mode === "light"
              ? "rgba(0, 0, 0, 0.12)"
              : "rgba(255, 255, 255, 0.12)",
        },
        shape: {
          borderRadius: 10,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: "10px",
                textTransform: "none",
              },
            },
          },
          MuiIconButton: {
            styleOverrides: {
              root: {
                borderRadius: "10px",
                width: "36px",
                height: "36px",
              },
            },
          },
        },
      }),
    [mode]
  );

  const value = useMemo(() => ({ mode, toggleTheme }), [mode]);

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
