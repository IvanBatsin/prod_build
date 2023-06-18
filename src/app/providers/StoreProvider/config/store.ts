import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import type { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export const createStore = (initialState?: StateSchema): any => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS__DEV,
    preloadedState: initialState
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
