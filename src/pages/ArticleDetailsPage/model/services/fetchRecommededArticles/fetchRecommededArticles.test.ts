import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { fetchRecommededArticles } from "./fetchRecommededArticles";
import type { Article } from "entities/Article";
import { ArticleType } from "entities/Article/model/types/article";

describe("fetch recommeded articles:", () => {
  test("success server request", async () => {
    const data: Article[] = [
      {
        blocks: [],
        createdAt: "12.34.2002",
        id: "1",
        img: "",
        subtitle: "subtitle",
        title: "title",
        type: [ArticleType.ECONOMICS],
        user: {
          id: "1",
          username: "username"
        },
        views: 122
      }
    ];
    const asyncThunk = new TestAsyncThunk(fetchRecommededArticles);
    asyncThunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk(null);

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server response with error", async () => {
    const asyncThunk = new TestAsyncThunk(fetchRecommededArticles);
    asyncThunk.api.get.mockReturnValue(Promise.resolve(undefined));
    const result = await asyncThunk.callThunk("1");

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
