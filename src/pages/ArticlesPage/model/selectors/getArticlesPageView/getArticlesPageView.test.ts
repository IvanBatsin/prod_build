import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageView } from "./getArticlesPageView";
import { ArticleView } from "entities/Article";
import { ArticleSortType, ArticleType } from "entities/Article/model/types/article";

describe("get article page state from store", () => {
  test("should return view value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: "Error test",
        entities: {},
        ids: [],
        view: ArticleView.BIG,
        hasMore: true,
        page: 1,
        order: "asc",
        search: "",
        sort: ArticleSortType.CREATED_AT,
        limit: 9,
        currentType: ArticleType.ALL
      }
    };
    expect(getArticlesPageView(state as StateSchema)).toEqual(ArticleView.BIG);
  });

  test("should return default view value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: undefined
    };
    expect(getArticlesPageView(state as StateSchema)).toEqual(undefined);
  });
});
