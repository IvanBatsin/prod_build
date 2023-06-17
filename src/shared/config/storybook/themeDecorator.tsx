import type { Decorator } from "@storybook/react";
import { ThemeProvider, type Themes } from "app/providers/themeProvider";
import "app/styles/index.scss";

// eslint-disable-next-line react/display-name
export const themeDecorator = (theme: Themes): Decorator => (Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story/>
      </div>
    </ThemeProvider>
  );
};
