import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import type { Comment } from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
  "articleDetailsComments/fetchCommentsByArticleId",
  async (articleId, thunkAPI) => {
    if (!articleId) {
      return thunkAPI.rejectWithValue("Article id is missed");
    }

    try {
      const response = await thunkAPI.extra.api.get<Comment[]>("/comments", {
        params: {
          articleId,
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
