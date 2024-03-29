import { type ReducersMapObject, configureStore, type AnyAction, type ThunkMiddleware, type MiddlewareArray, type CombinedState, type Reducer } from "@reduxjs/toolkit";
import type { StateSchema } from "./StateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManagers";
import { type ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { axiosApi } from "@/shared/api/api";
import { type AxiosInstance } from "axios";
import { scrollRestoreReducer } from "@/features/ScrollRestore";
import { rtkApi } from "@/shared/api/rtkQueryApi";

export const createStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>): ToolkitStore<StateSchema, AnyAction, MiddlewareArray<[ThunkMiddleware<StateSchema, AnyAction, { api: AxiosInstance }>]>> => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollRestore: scrollRestoreReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: axiosApi
        }
      }
    }).concat(rtkApi.middleware)
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager;
  return store as any;
};

export type AppDispatch = ReturnType<typeof createStore>["dispatch"];
