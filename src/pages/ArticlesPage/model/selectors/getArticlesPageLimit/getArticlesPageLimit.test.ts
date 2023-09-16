import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageLimit } from "./getArticlesPageLimit";
import { ArticleView } from "entities/Article";

describe("get articles page state from store", () => {
  test("should return limit value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: "Error test",
        entities: {},
        ids: [],
        view: ArticleView.BIG,
        hasMore: true,
        page: 1
      }
    };
    expect(getArticlesPageLimit(state as StateSchema)).toEqual(undefined);
  });

  test("should return default limit value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: undefined
    };
    expect(getArticlesPageLimit(state as StateSchema)).toEqual(undefined);
  });
});
