import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18n from "shared/config/i18n/i18nTest";

export interface RenderWithRouterOptions {
  route: string
}

export function componentRender (component: ReactNode, options: RenderWithRouterOptions): any {
  return render(
    <MemoryRouter initialEntries={[options.route]}>
      <I18nextProvider i18n={i18n}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  );
}
