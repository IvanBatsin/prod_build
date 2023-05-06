import React from "react";

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark'
}

interface ThemeContextProps {
  theme: Themes,
  setTheme: (theme: Themes) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);
export const LOCAL_STORAGE_THEME_KEY = 'theme';
export const UseThemeContext = () => React.useContext(ThemeContext);