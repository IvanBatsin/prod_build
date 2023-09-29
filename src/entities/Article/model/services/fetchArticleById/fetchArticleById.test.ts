import { ArticleType } from "../../consts/consts";
import { type Article } from "../../types/article";
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
      types: [ArticleType.ECONOMICS],
      views: 12,
      user: {
        id: "1",
        username: "MockUser",
        avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
      }
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
