import { LOCAL_STORAGE_THEME_KEY, Themes, UseThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void
  theme: Themes
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = UseThemeContext();

  const toggleTheme = (): void => {
    const currentTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(currentTheme));
    setTheme(currentTheme);
  };

  return {
    theme, toggleTheme
  };
};
