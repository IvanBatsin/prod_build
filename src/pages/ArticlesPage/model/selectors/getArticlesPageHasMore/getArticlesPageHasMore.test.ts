import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageHasMore } from "./getArticlesPageHasMore";
import { ArticleView } from "entities/Article";

describe("get articles page state from store", () => {
  test("should return hasMore value", () => {
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
    expect(getArticlesPageHasMore(state as StateSchema)).toEqual(true);
  });

  test("should return default hasMore value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: undefined
    };
    expect(getArticlesPageHasMore(state as StateSchema)).toEqual(undefined);
  });
});
