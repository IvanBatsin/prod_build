import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsError } from "./getArticleDetailsError";

describe("get article details error from store", () => {
  test("should return article details error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data: undefined, isLoading: false, error: "test error" }
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual("test error");
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: undefined
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
