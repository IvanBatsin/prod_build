import type { Decorator } from "@storybook/react";
import { Suspense } from "react";
import i18next from "../i18n/i18nTest";
import { I18nextProvider } from "react-i18next";

export const translationDecorator: Decorator = (Story) => {
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18next}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
