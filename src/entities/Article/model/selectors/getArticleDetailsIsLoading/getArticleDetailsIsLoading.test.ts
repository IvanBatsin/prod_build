import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getArticleDetailsIsLoading } from "./getArticleDetailsIsLoading";

describe("get article details isLoading from store", () => {
  test("should return article details isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data: undefined, isLoading: true, error: "test error" }
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: undefined
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
