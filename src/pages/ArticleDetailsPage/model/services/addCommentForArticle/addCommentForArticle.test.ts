import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { addCommentForArticle } from "./addCommentForArticle";
import type { Comment } from "entities/Comment";
import { ArticleType } from "entities/Article/model/consts/consts";

describe("add comment for article by article id:", () => {
  test("success server request", async () => {
    const data: Comment = {
      id: "1",
      text: "Test comment",
      user: {
        id: "1",
        username: "test username"
      }
    };
    const asyncThunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: "1",
          username: "username"
        }
      },
      articleDetails: {
        data: {
          blocks: [],
          createdAt: "12.34.2002",
          id: "1",
          img: "",
          subtitle: "subtitle",
          title: "title",
          types: [ArticleType.ECONOMICS],
          user: {
            id: "1",
            username: "username"
          },
          views: 122
        },
        isLoading: false
      }
    });
    asyncThunk.api.post.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk("Test comment");

    expect(asyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server response with error", async () => {
    const asyncThunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: {
          id: "1",
          username: "username"
        }
      },
      articleDetails: {
        data: {
          blocks: [],
          createdAt: "12.34.2002",
          id: "1",
          img: "",
          subtitle: "subtitle",
          title: "title",
          types: [ArticleType.ECONOMICS],
          user: {
            id: "1",
            username: "username"
          },
          views: 122
        },
        isLoading: false
      }
    });
    asyncThunk.api.post.mockReturnValue(Promise.resolve(undefined));
    const result = await asyncThunk.callThunk("1");

    expect(asyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
