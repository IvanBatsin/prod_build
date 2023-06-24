import { LOCAL_STORAGE_THEME_KEY, Themes, UseThemeContext } from "./ThemeContext";

interface UseThemeResult {
  theme: Themes
  toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = UseThemeContext();

  const toggleTheme = (): void => {
    const currentTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, JSON.stringify(currentTheme));
    console.log("current theme - ", currentTheme);
    document.body.className = currentTheme;
    console.log(document.body);
    setTheme(currentTheme);
  };

  return {
    theme, toggleTheme
  };
};
