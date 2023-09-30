import { ArticleView } from "@/entities/Article";
import type { ArticlesPageSchema } from "../types/ArticlesPageSchema";
import { articlesPageReducer, articlesPageActions } from "./articlesPageSlice";
import { ArticleSortType, ArticleType } from "@/entities/Article/model/consts/consts";

describe("ArticlesPage slice", () => {
  const state: ArticlesPageSchema = {
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
  };

  test("should set current type", () => {
    expect(articlesPageReducer(state, articlesPageActions.setCurrentType(ArticleType.ECONOMICS))).toEqual({
      ...state,
      currentType: ArticleType.ECONOMICS
    });
  });

  test("should set order", () => {
    expect(articlesPageReducer(state, articlesPageActions.setOrder("desc"))).toEqual({
      ...state,
      order: "desc"
    });
  });

  test("should set page", () => {
    expect(articlesPageReducer(state, articlesPageActions.setPage(2))).toEqual({
      ...state,
      page: 2
    });
  });

  test("should set search", () => {
    expect(articlesPageReducer(state, articlesPageActions.setSearch("test"))).toEqual({
      ...state,
      search: "test"
    });
  });

  test("should set sort", () => {
    expect(articlesPageReducer(state, articlesPageActions.setSort(ArticleSortType.VIEWS))).toEqual({
      ...state,
      sort: ArticleSortType.VIEWS
    });
  });

  test("should set view", () => {
    expect(articlesPageReducer(state, articlesPageActions.setView(ArticleView.SMALL))).toEqual({
      ...state,
      view: ArticleView.SMALL
    });
  });
});
