import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { getArticlesPageInited } from "../../selectors/getArticlesPageInited/getArticlesPageInited";
import type { SortOrderType } from "shared/types/commonTypes";
import type { ArticleSortType, ArticleType } from "entities/Article/model/consts/consts";

interface InitArticlesPagePayload {
  searchParams: URLSearchParams | undefined
}

export const initArticlesPage = createAsyncThunk<any, InitArticlesPagePayload, ThunkConfig<string>>(
  "articlesPage/initArticlesPage",
  async (payload, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const _inited = getArticlesPageInited(getState());
    const { searchParams } = payload;

    if (!_inited) {
      const order = searchParams?.get("order");
      const sort = searchParams?.get("sort");
      const search = searchParams?.get("search");
      const currentType = searchParams?.get("type");

      order && dispatch(articlesPageActions.setOrder(order as SortOrderType));
      sort && dispatch(articlesPageActions.setSort(sort as ArticleSortType));
      search && dispatch(articlesPageActions.setSearch(search));
      currentType && dispatch(articlesPageActions.setCurrentType(currentType as ArticleType));

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ page: 1 }) as any);
    }
  }
);
