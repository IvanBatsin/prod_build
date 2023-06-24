import type { DeepPartial } from "@reduxjs/toolkit";
import type { Decorator } from "@storybook/react";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";

// eslint-disable-next-line react/display-name
export const storeDecorator = (initialState: DeepPartial<StateSchema>): Decorator => (Story) => {
  return (
    <StoreProvider initialState={initialState as StateSchema}>
      <Story/>
    </StoreProvider>
  );
};
