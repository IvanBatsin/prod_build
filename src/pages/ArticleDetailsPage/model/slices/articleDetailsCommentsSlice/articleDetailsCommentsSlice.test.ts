import type { Comment } from "entities/Comment";
import { fetchCommentsByArticleId } from "../../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import type { ArticleDetailsCommentsSchema } from "../../types/ArticleDetailsCommentsSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

describe("profile slice", () => {
  const intialState: ArticleDetailsCommentsSchema = {
    isLoading: false,
    entities: {},
    ids: [],
    error: ""
  };

  test("fetchCommentsByArticleId service pending", () => {
    expect(articleDetailsCommentsReducer(intialState, fetchCommentsByArticleId.pending)).toEqual({
      isLoading: true,
      error: undefined,
      entities: {},
      ids: []
    });
  });

  test("fetchCommentsByArticleId service fulfilled", () => {
    const data: Comment[] = [
      {
        id: "1",
        text: "test text",
        user: {
          id: "1",
          username: "username"
        }
      }
    ];

    expect(articleDetailsCommentsReducer(intialState, fetchCommentsByArticleId.fulfilled(data, "", ""))).toEqual({
      isLoading: false,
      entities: {
        1: {
          id: "1",
          text: "test text",
          user: {
            id: "1",
            username: "username"
          }
        }
      },
      ids: ["1"],
      error: ""
    });
  });

  test("fetchCommentsByArticleId service rejected", () => {
    expect(articleDetailsCommentsReducer(intialState, fetchCommentsByArticleId.rejected(null, "", ""))).toEqual({
      isLoading: false,
      error: undefined,
      entities: {},
      ids: []
    });
  });
});
