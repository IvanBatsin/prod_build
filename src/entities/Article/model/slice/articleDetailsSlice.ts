import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import type { Article } from "../types/article";

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const articleSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchArticleById.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: articleAction } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
