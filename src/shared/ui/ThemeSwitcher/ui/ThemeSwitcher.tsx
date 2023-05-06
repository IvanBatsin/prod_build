import React from "react";
import styles from './ThemeSwitcher.module.scss';
import { Themes, useTheme } from "app/providers/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import LightThemeIcon from '../../../assets/icons/theme-light.svg';
import DarkThemeIcon from '../../../assets/icons/theme-dark.svg';
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  additionalClass?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({additionalClass}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button additionalClass={classNames(styles.btn, {}, [additionalClass])} onClick={toggleTheme}>
      {theme === Themes.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/>}
    </Button>
  )
}