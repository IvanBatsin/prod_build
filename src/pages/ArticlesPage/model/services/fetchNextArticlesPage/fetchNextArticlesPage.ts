import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "@/app/providers/StoreProvider";
import { getArticlesPagePage } from "../../selectors/getArticlesPagePage/getArticlesPagePage";
import { getArticlesPageHasMore } from "../../selectors/getArticlesPageHasMore/getArticlesPageHasMore";
import { getArticlesPageIsLoading } from "../../selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<any, any, ThunkConfig<string>>(
  "articlesPage/fetchNextArticlesPage",
  async (_, thunkAPI) => {
    try {
      const { getState, dispatch } = thunkAPI;
      const hasMore = getArticlesPageHasMore(getState());
      const isLoading = getArticlesPageIsLoading(getState());

      if (hasMore && !isLoading) {
        const page = getArticlesPagePage(getState());
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList({ page: page + 1 }) as any);
      }
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
