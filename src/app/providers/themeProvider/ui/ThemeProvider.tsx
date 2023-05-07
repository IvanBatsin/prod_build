import React from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "../lib/ThemeContext";

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Themes>(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) as Themes || Themes.LIGHT);

  const defaultValue = React.useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
