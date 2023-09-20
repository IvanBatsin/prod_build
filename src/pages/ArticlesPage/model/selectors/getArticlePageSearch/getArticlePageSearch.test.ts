import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticlePageSearch } from "./getArticlePageSearch";
import { ArticleView } from "entities/Article";
import { ArticleSortType, ArticleType } from "entities/Article/model/types/article";

describe("get article page state from store", () => {
  test("should return search value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: "Error test",
        entities: {},
        ids: [],
        view: ArticleView.BIG,
        isLoading: true,
        hasMore: true,
        page: 1,
        order: "desc",
        search: "test string",
        sort: ArticleSortType.CREATED_AT,
        limit: 9,
        currentType: ArticleType.SCIENCE
      }
    };
    expect(getArticlePageSearch(state as StateSchema)).toEqual("test string");
  });

  test("should return default search value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: undefined
    };
    expect(getArticlePageSearch(state as StateSchema)).toEqual("");
  });
});
