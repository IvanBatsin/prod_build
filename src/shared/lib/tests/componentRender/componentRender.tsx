import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18n from "shared/config/i18n/i18nTest";

export interface RenderWithRouterOptions {
  route: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender (component: ReactNode, options: RenderWithRouterOptions): any {
  return render(
    <StoreProvider asyncReducers={options.asyncReducers} initialState={options.initialState as StateSchema}>
      <MemoryRouter initialEntries={[options.route]}>
        <I18nextProvider i18n={i18n}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
