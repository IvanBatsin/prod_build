import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "@/app/providers/StoreProvider";
import { type Article } from "@/entities/Article";

export const fetchRecommededArticles = createAsyncThunk<Article[], any, ThunkConfig<string>>(
  "articleDetailsPage/fetchRecommededArticles",
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Article[]>("/articles", {
        params: {
          _limit: 4
        }
      });

      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
