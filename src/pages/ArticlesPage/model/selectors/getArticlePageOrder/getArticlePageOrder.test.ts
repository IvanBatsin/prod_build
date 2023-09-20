import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getArticlePageOrder } from "./getArticlePageOrder";
import { ArticleView } from "entities/Article";
import { ArticleSortType, ArticleType } from "entities/Article/model/types/article";

describe("get article page state from store", () => {
  test("should return order value", () => {
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
        search: "",
        sort: ArticleSortType.CREATED_AT,
        limit: 9,
        currentType: ArticleType.SCIENCE
      }
    };
    expect(getArticlePageOrder(state as StateSchema)).toEqual("desc");
  });

  test("should return default order value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: undefined
    };
    expect(getArticlePageOrder(state as StateSchema)).toEqual("asc");
  });
});
