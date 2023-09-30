import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getArticleDetailsRecommendationsError } from "./getArticleDetailsRecommendationsError";

describe("get article details recommended articles state from store", () => {
  test("should return error value", () => {
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
          error: "error"
        }
      }
    };
    expect(getArticleDetailsRecommendationsError(state as StateSchema)).toEqual("error");
  });

  test("should return default error value", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: undefined
    };
    expect(getArticleDetailsRecommendationsError(state as StateSchema)).toEqual(undefined);
  });
});
