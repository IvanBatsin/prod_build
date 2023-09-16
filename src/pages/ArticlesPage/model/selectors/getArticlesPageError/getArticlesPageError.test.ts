import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageError } from "./getArticlesPageError";
import { ArticleView } from "entities/Article";

describe("get article page state from store", () => {
  test("should return error value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: "Error test",
        entities: {},
        ids: [],
        view: ArticleView.BIG,
        isLoading: true,
        hasMore: true,
        page: 1
      }
    };
    expect(getArticlesPageError(state as StateSchema)).toEqual("Error test");
  });

  test("should return default error value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: undefined
    };
    expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
  });
});
