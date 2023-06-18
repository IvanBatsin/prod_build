import React from "react";
import { Provider } from "react-redux";
import { createStore } from "../config/store";
import type { StateSchema } from "../config/StateSchema";

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: StateSchema
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ initialState, children }) => {
  const store = createStore(initialState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
