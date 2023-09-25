import type { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import type { AxiosInstance } from "axios";
import type { ArticleDetailsSchema } from "entities/Article";
import type { CounterSchema } from "entities/Counter";
import type { UserSchema } from "entities/User";
import type { ScrollRestoreSchema } from "features/ScrollRestore";
import type { AddCommentFormSchema } from "features/addCommentForm";
import type { LoginSchema } from "features/authByUserName";
import { type ProfileSchema } from "features/editableProfileCard/model/types/profile";
import type { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";
import type { ArticlesPageSchema } from "pages/ArticlesPage";
import type { rtkApi } from "shared/api/rtkQueryApi";

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  scrollRestore: ScrollRestoreSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  login?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsPage?: ArticleDetailsPageSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
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

export interface ThunkExtraArgs {
  api: AxiosInstance
};

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArgs
  state: StateSchema
};
