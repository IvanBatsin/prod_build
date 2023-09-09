import { type PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import type { Comment } from "entities/Comment";
import type { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const articleCommentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
});

export const getArticleComment = articleCommentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || articleCommentsAdapter.getInitialState()
);

const articleDetailsCommentSlice = createSlice({
  name: "articleDetailsCommentSlice",
  initialState: articleCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    error: "",
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchCommentsByArticleId.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        articleCommentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentSlice;
