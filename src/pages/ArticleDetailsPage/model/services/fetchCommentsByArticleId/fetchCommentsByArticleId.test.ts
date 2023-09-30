import { TestAsyncThunk } from "@/shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";
import type { Comment } from "@/entities/Comment";

describe("fetch comments by article id:", () => {
  test("success server request", async () => {
    const data: Comment[] = [
      {
        id: "1",
        text: "Test comment",
        user: {
          id: "1",
          username: "test username"
        }
      }
    ];
    const asyncThunk = new TestAsyncThunk(fetchCommentsByArticleId);
    asyncThunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk("1");

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server response with error", async () => {
    const asyncThunk = new TestAsyncThunk(fetchCommentsByArticleId);
    asyncThunk.api.get.mockReturnValue(Promise.resolve(undefined));
    const result = await asyncThunk.callThunk("1");

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
