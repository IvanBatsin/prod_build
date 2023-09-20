import { type PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { ArticleView, type Article } from "entities/Article";
import type { ArticlesPageSchema } from "../types/ArticlesPageSchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";
import { VIEW_TYPE_KEY } from "shared/const/localStorage";
import { ArticleSortType, ArticleType } from "entities/Article/model/types/article";
import type { SortOrderType } from "shared/types/commonTypes";

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
    entities: {},
    page: 1,
    hasMore: true,
    _inited: false,
    order: "asc",
    search: "",
    sort: ArticleSortType.CREATED_AT,
    limit: 9,
    currentType: ArticleType.ALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      window.localStorage.setItem(VIEW_TYPE_KEY, JSON.stringify(action.payload));
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrderType>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortType>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCurrentType: (state, action: PayloadAction<ArticleType>) => {
      state.currentType = action.payload;
    },
    initState: state => {
      const view = JSON.parse(window.localStorage.getItem(VIEW_TYPE_KEY) as ArticleView) || ArticleView.SMALL;
      state.view = view;
      state._inited = true;
      state.limit = state.view === ArticleView.SMALL ? 9 : 4;
    }
  },
  extraReducers: (build) => {
    build
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
        if (action.meta.arg.replace) {
          articlesPageAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;
        if (action.meta.arg.replace) {
          articlesPageAdapter.setAll(state, action.payload);
        } else {
          articlesPageAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
