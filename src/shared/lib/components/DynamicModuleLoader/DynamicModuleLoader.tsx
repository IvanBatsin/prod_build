import type { Reducer } from "@reduxjs/toolkit";
import type { ReduxStoreWithManager } from "app/providers/StoreProvider";
import type { StateSchemaKeys } from "app/providers/StoreProvider/config/StateSchema";
import React from "react";
import { useStore } from "react-redux";

export type ReducersList = {
  [key in StateSchemaKeys]?: Reducer
}

interface DynamicModuleLoaderProps {
  children: React.ReactNode
  removeAfterUnmount?: boolean
  reducers: ReducersList
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
  const { removeAfterUnmount = true, children, reducers } = props;
  const store = useStore() as ReduxStoreWithManager;

  React.useEffect(() => {
    const reducersMap = store.reducerManager.getReducerMap();
    Object.entries(reducers).forEach(([key, value]) => {
      if (!reducersMap[key as StateSchemaKeys]) {
        store.reducerManager.add(key as StateSchemaKeys, value);
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key]) => {
          store.reducerManager.remove(key as StateSchemaKeys);
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
