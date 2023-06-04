import type { Decorator } from "@storybook/react";
import { Themes } from "app/providers/themeProvider";
import "app/styles/index.scss";

export const themeDecorator = (theme: Themes): Decorator => (Story) => {
  return (
    <div className={`app ${theme}`}>
      <Story/>
    </div>
  )
}