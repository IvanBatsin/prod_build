import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsCommentsIsLoading } from "./getArticleDetailsCommentsIsLoading";

describe("get article details comments state from store", () => {
  test("should return isLoading value", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: "Error test",
        entities: {},
        ids: [],
        isLoading: true
      }
    };
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should return default isLoading value", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: undefined
    };
    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
