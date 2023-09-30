import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getArticleDetailsCommentsError } from "./getArticleDetailsCommentsError";

describe("get article details comments state from store", () => {
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
          ids: []
        }
      }
    };
    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual("Error test");
  });

  test("should return default error value", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: undefined
    };
    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(undefined);
  });
});
