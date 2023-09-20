import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { ArticleSortType, ArticleType, ArticleView } from "entities/Article/model/types/article";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

jest.mock("../fetchArticlesList/fetchArticlesList");

describe("fetch next articles:", () => {
  test("success server request", async () => {
    const asyncThunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        entities: {},
        hasMore: true,
        ids: [],
        view: ArticleView.BIG,
        isLoading: false,
        limit: 5,
        order: "asc",
        search: "",
        sort: ArticleSortType.CREATED_AT,
        currentType: ArticleType.ALL
      }
    });

    await asyncThunk.callThunk(null);

    expect(asyncThunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });

  test("success server request with no more articles", async () => {
    const asyncThunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        entities: {},
        hasMore: false,
        ids: [],
        view: ArticleView.BIG,
        isLoading: false,
        limit: 5,
        order: "asc",
        search: "",
        sort: ArticleSortType.CREATED_AT,
        currentType: ArticleType.ALL
      }
    });

    await asyncThunk.callThunk(null);

    expect(asyncThunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
