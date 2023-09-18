import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { initArticlesPage } from "./initArticlesPage";
import { ArticleView } from "entities/Article/model/types/article";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("init articles page:", () => {
  test("success server request", async () => {
    const asyncThunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        entities: {},
        hasMore: true,
        ids: [],
        view: ArticleView.BIG,
        isLoading: false,
        limit: 5
      }
    });

    await asyncThunk.callThunk(null);

    expect(asyncThunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
  });

  test("success server request with no more articles", async () => {
    const asyncThunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        entities: {},
        hasMore: false,
        ids: [],
        view: ArticleView.BIG,
        isLoading: false,
        limit: 5
      }
    });

    await asyncThunk.callThunk(null);

    expect(asyncThunk.dispatch).toBeCalledTimes(4);
  });
});
