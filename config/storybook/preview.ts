import type { Preview } from "@storybook/react";
import { stylesDecorator } from "../../src/shared/config/storybook/styleDecorator";
import { translationDecorator } from "../../src/shared/config/storybook/translationDecorator";
import "../../src/app/styles/index.scss";

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
    translationDecorator
  ]
};

export default preview;
