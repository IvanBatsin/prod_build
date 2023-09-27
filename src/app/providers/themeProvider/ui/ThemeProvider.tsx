import React from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "../lib/ThemeContext";

interface ThemeProviderProps {
  initialTheme?: Themes
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = React.useState<Themes>(initialTheme || JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || JSON.stringify(Themes.LIGHT)) as Themes);

  const defaultValue = React.useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
