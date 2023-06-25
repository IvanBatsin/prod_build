import React from "react";
import { Provider } from "react-redux";
import { createStore } from "../config/store";
import type { StateSchema } from "../config/StateSchema";
import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: StateSchema
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ initialState, asyncReducers, children }) => {
  const store = createStore(initialState, asyncReducers as ReducersMapObject<StateSchema>);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
