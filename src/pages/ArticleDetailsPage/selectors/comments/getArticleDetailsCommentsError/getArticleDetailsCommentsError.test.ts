import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsCommentsError } from "./getArticleDetailsCommentsError";

describe("get article details comments state from store", () => {
  test("should return error value", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: "Error test",
        entities: {},
        ids: []
      }
    };
    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual("Error test");
  });

  test("should return default error value", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: undefined
    };
    expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(undefined);
  });
});
