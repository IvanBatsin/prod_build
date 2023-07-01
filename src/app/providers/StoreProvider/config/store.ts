import { type ReducersMapObject, configureStore, type AnyAction, type ThunkMiddleware } from "@reduxjs/toolkit";
import type { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManagers";
import { type ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

export const createStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>): ToolkitStore<StateSchema, AnyAction, [ThunkMiddleware<StateSchema, AnyAction>]> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS__DEV,
    preloadedState: initialState
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
