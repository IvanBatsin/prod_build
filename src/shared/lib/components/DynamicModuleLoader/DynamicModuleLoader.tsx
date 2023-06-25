import type { Reducer } from "@reduxjs/toolkit";
import type { ReduxStoreWithManager } from "app/providers/StoreProvider";
import type { StateSchemaKeys } from "app/providers/StoreProvider/config/StateSchema";
import React from "react";
import { useStore } from "react-redux";

export type ReducersList = {
  [key in StateSchemaKeys]?: Reducer
}

type RedicerListEntry = [StateSchemaKeys, Reducer];

interface DynamicModuleLoaderProps {
  removeAfterUnmount?: boolean
  reducers: ReducersList
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
  const { removeAfterUnmount = true, children, reducers } = props;
  const store = useStore() as ReduxStoreWithManager;

  React.useEffect(() => {
    Object.entries(reducers).forEach(([key, value]: RedicerListEntry) => {
      store.reducerManager.add(key, value);
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key]: RedicerListEntry) => {
          store.reducerManager.remove(key);
        });
      }
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
};
