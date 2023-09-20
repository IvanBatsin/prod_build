import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import { type Article } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/getArticlesPageLimit/getArticlesPageLimit";
import { getArticlePageSearch } from "../../selectors/getArticlePageSearch/getArticlePageSearch";
import { getArticlePageSort } from "../../selectors/getArticlePageSort/getArticlePageSort";
import { getArticlePageOrder } from "../../selectors/getArticlePageOrder/getArticlePageOrder";
import { getArticlesPagePage } from "../../selectors/getArticlesPagePage/getArticlesPagePage";
import { setQueryParams } from "shared/lib/url/setQueryParams/setQueryParams";
import { getArticlePageCurrentType } from "../../selectors/getArticlePageCurrentType/getArticlePageCurrentType";
import { ArticleType } from "entities/Article/model/types/article";

interface fetchArticlesListPayload {
  page?: number
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListPayload, ThunkConfig<string>>(
  "articlesPage/fetchArticlesList",
  async (payload, thunkAPI) => {
    try {
      const { getState } = thunkAPI;
      const limit = getArticlesPageLimit(getState());
      const search = getArticlePageSearch(getState());
      const sort = getArticlePageSort(getState());
      const order = getArticlePageOrder(getState());
      const currentType = getArticlePageCurrentType(getState());
      const { page } = payload || getArticlesPagePage(getState());

      const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
        params: {
          page,
          _limit: limit,
          _page: page,
          _expand: "user",
          _sort: sort,
          _order: order,
          q: search,
          type: currentType === ArticleType.ALL ? undefined : currentType
        }
      });

      setQueryParams({ search, sort, order, type: currentType });

      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
