import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getArticleDetailsRecommendationsIsLoading } from "./getArticleDetailsRecommendationsIsLoading";

describe("get article details recommended articles state from store", () => {
  test("should return isLoading value", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          error: "Error test",
          entities: {},
          ids: []
        },
        recommendations: {
          entities: {},
          ids: [],
          error: "error",
          isLoading: true
        }
      }
    };
    expect(getArticleDetailsRecommendationsIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should return default error value", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: undefined
    };
    expect(getArticleDetailsRecommendationsIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
