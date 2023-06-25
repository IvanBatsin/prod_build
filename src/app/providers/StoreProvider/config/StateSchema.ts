import type { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import type { CounterSchema } from "entities/Counter";
import type { UserSchema } from "entities/User";
import type { LoginSchema } from "features/authByUserName";

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  login?: LoginSchema
};

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManagerType {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKeys, reducer: Reducer) => void
  remove: (key: StateSchemaKeys) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManagerType
};
