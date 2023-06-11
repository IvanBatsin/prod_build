import type { Decorator } from "@storybook/react";
import type { Themes } from "app/providers/themeProvider";
import "app/styles/index.scss";

// eslint-disable-next-line react/display-name
export const themeDecorator = (theme: Themes): Decorator => (Story) => {
  return (
    <div className={`app ${theme}`}>
      <Story/>
    </div>
  );
};
