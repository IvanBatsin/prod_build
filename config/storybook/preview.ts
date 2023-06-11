import type { Preview } from "@storybook/react";
import { stylesDecorator } from "../../src/shared/config/storybook/styleDecorator";
import { themeDecorator } from "../../src/shared/config/storybook/themeDecorator";
import { translationDecorator } from "../../src/shared/config/storybook/translationDecorator";
import { Themes } from "../../src/app/providers/themeProvider/index";
import "../../src/app/styles/index.scss";
import i18next from "../../src/shared/config/i18n/i18nTest";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    stylesDecorator,
    themeDecorator(Themes.DARK),
    translationDecorator
  ]
};

export default preview;
