import { TestAsyncThunk } from "@/shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { initArticlesPage } from "./initArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { ArticleView } from "@/entities/Article";
import { ArticleSortType, ArticleType } from "@/entities/Article/model/consts/consts";

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
        limit: 5,
        order: "asc",
        search: "",
        sort: ArticleSortType.CREATED_AT,
        currentType: ArticleType.ALL
      }
    });

    await asyncThunk.callThunk({ searchParams: undefined });

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
        limit: 5,
        order: "asc",
        search: "",
        sort: ArticleSortType.CREATED_AT,
        currentType: ArticleType.ALL
      }
    });

    await asyncThunk.callThunk({ searchParams: undefined });

    expect(asyncThunk.dispatch).toBeCalledTimes(4);
  });
});
