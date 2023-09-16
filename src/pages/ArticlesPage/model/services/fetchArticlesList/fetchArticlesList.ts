import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import { type Article } from "entities/Article";
import { getArticlesPageLimit } from "../../selectors/getArticlesPageLimit/getArticlesPageLimit";

interface fetchArticlesListPayload {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListPayload, ThunkConfig<string>>(
  "articlesPage/fetchArticlesList",
  async (payload, thunkAPI) => {
    try {
      const { getState } = thunkAPI;
      const limit = getArticlesPageLimit(getState());
      const { page } = payload;
      const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
        params: {
          page,
          _limit: limit,
          _page: page,
          _expand: "user"
        }
      });

      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
