import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import { articlesPageActions } from "../../slices/articlesPageSlice";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { getArticlesPageInited } from "../../selectors/getArticlesPageInited/getArticlesPageInited";

export const initArticlesPage = createAsyncThunk<any, any, ThunkConfig<string>>(
  "articlesPage/initArticlesPage",
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const _inited = getArticlesPageInited(getState());

    if (!_inited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ page: 1 }) as any);
    }
  }
);
