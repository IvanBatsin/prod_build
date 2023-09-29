import { ArticleType } from "entities/Article/model/consts/consts";
import { fetchRecommededArticles } from "../../services/fetchRecommededArticles/fetchRecommededArticles";
import type { ArticleDetailsRecommendationsSchema } from "../../types/ArticleDetailsRecommendationsSchema";
import { articleDetailsRecommendationsReducer } from "./articleDetailsRecommendationsSlice";
import type { Article } from "entities/Article";

describe("article details recommendation slice", () => {
  const intialState: ArticleDetailsRecommendationsSchema = {
    isLoading: false,
    entities: {},
    ids: [],
    error: ""
  };

  test("fetchRecommededArticles service pending", () => {
    expect(articleDetailsRecommendationsReducer(intialState, fetchRecommededArticles.pending)).toEqual({
      isLoading: true,
      error: undefined,
      entities: {},
      ids: []
    });
  });

  test("fetchRecommededArticles service fulfilled", () => {
    const data: Article[] = [
      {
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
      }
    ];

    expect(articleDetailsRecommendationsReducer(intialState, fetchRecommededArticles.fulfilled(data, "", ""))).toEqual({
      isLoading: false,
      entities: {
        1: {
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
        }
      },
      ids: ["1"],
      error: ""
    });
  });

  test("fetchRecommededArticles service rejected", () => {
    expect(articleDetailsRecommendationsReducer(intialState, fetchRecommededArticles.rejected(null, "", ""))).toEqual({
      isLoading: false,
      error: undefined,
      entities: {},
      ids: []
    });
  });
});
