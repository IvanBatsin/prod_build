import { LOCAL_STORAGE_THEME_KEY, Themes, UseThemeContext } from "./ThemeContext";

interface UseThemeResult {
  theme: Themes
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = UseThemeContext();

  const toggleTheme = (): void => {
    let currentTheme: Themes;
    switch (theme) {
      case Themes.DARK: {
        currentTheme = Themes.LIGHT;
        break;
      }
      case Themes.LIGHT: {
        currentTheme = Themes.ORANGE;
        break;
      }
      case Themes.ORANGE: {
        currentTheme = Themes.DARK;
        break;
      }
    }
    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(currentTheme));
    document.body.className = currentTheme;
    setTheme(currentTheme);
  };

  return {
    theme, toggleTheme
  };
};
