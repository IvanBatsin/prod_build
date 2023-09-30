import { type PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import type { ArticleDetailsRecommendationsSchema } from "../../types/ArticleDetailsRecommendationsSchema";
import type { Article } from "@/entities/Article";
import { fetchRecommededArticles } from "../../services/fetchRecommededArticles/fetchRecommededArticles";

const articleRecommendationsAdapter = createEntityAdapter<Article>({
  selectId: (comment) => comment.id
});

export const getRecommendations = articleRecommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || articleRecommendationsAdapter.getInitialState()
);

const articleDetailsRecommendationsSlice = createSlice({
  name: "articleDetailsRecommendationsSlice",
  initialState: articleRecommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    error: "",
    isLoading: false,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchRecommededArticles.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchRecommededArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articleRecommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchRecommededArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
