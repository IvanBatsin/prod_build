import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import type { Decorator } from "@storybook/react";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/authByUserName/model/slice/loginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer
};

// eslint-disable-next-line react/display-name
export const storeDecorator = (initialState: DeepPartial<StateSchema>): Decorator => (Story) => {
  return (
    <StoreProvider initialState={initialState as StateSchema} asyncReducers={defaultAsyncReducers}>
      <Story/>
    </StoreProvider>
  );
};
