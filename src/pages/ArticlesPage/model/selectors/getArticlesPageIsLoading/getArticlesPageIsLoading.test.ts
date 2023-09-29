import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticlesPageIsLoading } from "./getArticlesPageIsLoading";
import { ArticleView } from "entities/Article";
import { ArticleSortType, ArticleType } from "entities/Article/model/consts/consts";

describe("get article page state from store", () => {
  test("should return isLoading value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: "Error test",
        entities: {},
        ids: [],
        view: ArticleView.BIG,
        isLoading: true,
        hasMore: true,
        page: 1,
        order: "asc",
        search: "",
        sort: ArticleSortType.CREATED_AT,
        limit: 9,
        currentType: ArticleType.ALL
      }
    };
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should return default error value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: undefined
    };
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
