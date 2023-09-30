import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "@/app/providers/StoreProvider";
import type { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  "article/fetchArticleById",
  async (articleId, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: "user"
        }
      });
      if (!response) {
        return thunkAPI.rejectWithValue("Server error");
      }
      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
