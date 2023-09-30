import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getArticlePageCurrentType } from "./getArticlePageCurrentType";
import { ArticleView } from "@/entities/Article";
import { ArticleSortType, ArticleType } from "@/entities/Article/model/consts/consts";

describe("get article page state from store", () => {
  test("should return current type value", () => {
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
        currentType: ArticleType.SCIENCE
      }
    };
    expect(getArticlePageCurrentType(state as StateSchema)).toEqual(ArticleType.SCIENCE);
  });

  test("should return default current type value", () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: undefined
    };
    expect(getArticlePageCurrentType(state as StateSchema)).toEqual(ArticleType.ALL);
  });
});
