import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPagePage } from "./getArticlesPagePage";
import { ArticleView } from "entities/Article";

describe("get articles page state from store", () => {
  test("should return page value", () => {
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
    expect(getArticlesPagePage(state as StateSchema)).toEqual(1);
  });

  test("should return default page value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: undefined
    };
    expect(getArticlesPagePage(state as StateSchema)).toEqual(1);
  });
});
