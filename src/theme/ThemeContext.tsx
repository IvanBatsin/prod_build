import React from "react";

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark'
}

interface ThemeContextProps {
  theme: Themes,
  setTheme: (theme: Themes) => void
}

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);
export const LOCAL_STORAGE_THEME_KEY = 'theme';
const defaultTheme = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY)) as Themes || Themes.LIGHT;

export const ThemeProvider: React.FC = ({children}) => {
  const [theme, setTheme] = React.useState<Themes>(defaultTheme);

  const defaultValue = React.useMemo(() => {
    return { theme, setTheme }
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const UseThemeContext = () => React.useContext(ThemeContext);