import React from "react";
import { Themes, useTheme } from "@/app/providers/themeProvider";
import { classNames } from "@/shared/lib/classNames/classNames";
import LightThemeIcon from "../assets/icons/theme-light.svg";
import DarkThemeIcon from "../assets/icons/theme-dark.svg";
import { Button } from "@/shared/ui/Button/Button";
import { type CommonComponentProps } from "@/shared/types/commonTypes";

export const ThemeSwitcher: React.FC<CommonComponentProps> = React.memo(function ThemeSwitcher ({ additionalClass }: CommonComponentProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button additionalClass={classNames("", {}, [additionalClass])} onClick={toggleTheme}>
      {theme === Themes.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/>}
    </Button>
  );
});
