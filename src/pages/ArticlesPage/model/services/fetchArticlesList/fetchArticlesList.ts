import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import { type Article } from "entities/Article";

export const fetchArticlesList = createAsyncThunk<Article[], any, ThunkConfig<string>>(
  "articlesPage/fetchArticlesList",
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
        params: {
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
