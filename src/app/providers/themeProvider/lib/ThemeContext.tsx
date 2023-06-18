import React from "react";

export enum Themes {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme"
}

interface ThemeContextProps {
  theme: Themes
  setTheme: (theme: Themes) => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);
export const LOCAL_STORAGE_THEME_KEY = "theme";
export const UseThemeContext = (): ThemeContextProps => React.useContext(ThemeContext);
