import { type ReducersMapObject, combineReducers, type AnyAction, type Reducer } from "@reduxjs/toolkit";
import type { ReducerManagerType, StateSchema, StateSchemaKeys } from "./StateSchema";

export const createReducerManager = (initialReducers: ReducersMapObject<StateSchema>): ReducerManagerType => {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StateSchemaKeys[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKeys) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    }
  };
};
