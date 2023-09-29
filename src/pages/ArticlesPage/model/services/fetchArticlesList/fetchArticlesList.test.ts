import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { fetchArticlesList } from "./fetchArticlesList";
import { ArticleView, type Article } from "entities/Article";
import { ArticleSortType, ArticleType } from "entities/Article/model/consts/consts";

describe("fetch articles list:", () => {
  test("success server request", async () => {
    const data: Article[] = [
      {
        blocks: [],
        id: "1",
        title: "Javascript news",
        subtitle: "Что нового в JS за 2022 год?",
        img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
        views: 1022,
        createdAt: "26.02.2022",
        user: {
          id: "1",
          username: "username"
        },
        types: [ArticleType.IT]
      }
    ];
    const asyncThunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: {
        entities: {},
        ids: [],
        hasMore: true,
        page: 1,
        view: ArticleView.BIG,
        order: "asc",
        search: "",
        sort: ArticleSortType.CREATED_AT,
        limit: 9,
        currentType: ArticleType.ALL
      }
    });
    asyncThunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk({ page: 1 });

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server response with error", async () => {
    const asyncThunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: {
        entities: {},
        ids: [],
        hasMore: true,
        page: 1,
        view: ArticleView.BIG,
        order: "asc",
        search: "",
        sort: ArticleSortType.CREATED_AT,
        limit: 9,
        currentType: ArticleType.ALL
      }
    });
    asyncThunk.api.get.mockReturnValue(Promise.resolve(undefined));
    const result = await asyncThunk.callThunk({ page: 1 });

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
