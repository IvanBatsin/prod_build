import { ArticleType, type Article } from "../../types/article";
import { fetchArticleById } from "./fetchArticleById";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";

describe("fetch article by id:", () => {
  test("success server request", async () => {
    const data: Article = {
      blocks: [],
      createdAt: "12 of december",
      id: "12",
      img: "",
      subtitle: "test",
      title: "test title",
      type: [ArticleType.ECONOMICS],
      views: 12
    };
    const asyncThunk = new TestAsyncThunk(fetchArticleById);
    asyncThunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk("1");

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server response with error", async () => {
    const asyncThunk = new TestAsyncThunk(fetchArticleById);
    asyncThunk.api.get.mockReturnValue(Promise.resolve(undefined));
    const result = await asyncThunk.callThunk("1");

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
