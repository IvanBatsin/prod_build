import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticlePageSort } from "./getArticlePageSort";
import { ArticleView } from "entities/Article";
import { ArticleSortType, ArticleType } from "entities/Article/model/consts/consts";

describe("get article page state from store", () => {
  test("should return title value", () => {
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
        sort: ArticleSortType.TITLE,
        limit: 9,
        currentType: ArticleType.SCIENCE
      }
    };
    expect(getArticlePageSort(state as StateSchema)).toEqual(ArticleSortType.TITLE);
  });

  test("should return default title value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: undefined
    };
    expect(getArticlePageSort(state as StateSchema)).toEqual(ArticleSortType.CREATED_AT);
  });
});
