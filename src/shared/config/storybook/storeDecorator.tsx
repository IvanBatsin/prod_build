import type { DeepPartial } from "@reduxjs/toolkit";
import type { Decorator } from "@storybook/react";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "entities/Profile";
import { addCommentFormReducer } from "features/addCommentForm/model/slice/addCommentFormSlice";
import { loginReducer } from "features/authByUserName/model/slice/loginSlice";
import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import type { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer
};

// eslint-disable-next-line react/display-name
export const storeDecorator = (initialState: DeepPartial<StateSchema>): Decorator => (Story) => {
  return (
    <StoreProvider initialState={initialState as StateSchema} asyncReducers={defaultAsyncReducers}>
      <Story/>
    </StoreProvider>
  );
};
