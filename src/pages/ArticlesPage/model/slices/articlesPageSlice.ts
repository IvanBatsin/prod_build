import { type PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { ArticleView, type Article } from "entities/Article";
import type { ArticlesPageSchema } from "../types/ArticlesPageSchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { VIEW_TYPE_KEY } from "shared/const/localStorage";

const articlesPageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesPageAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
    error: "",
    isLoading: false,
    view: ArticleView.SMALL,
    ids: [],
    entities: {}
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      window.localStorage.setItem(VIEW_TYPE_KEY, JSON.stringify(action.payload));
    },
    initState: state => {
      state.view = window.localStorage.getItem(VIEW_TYPE_KEY) as ArticleView || ArticleView.SMALL;
    }
  },
  extraReducers: (build) => {
    build
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesPageAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
