import type { EntityState } from "@reduxjs/toolkit";
import type { Article, ArticleView } from "@/entities/Article";
import type { ArticleSortType, ArticleType } from "@/entities/Article/model/consts/consts";
import type { SortOrderType } from "@/shared/types/commonTypes";

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string
  view: ArticleView
  page: number
  limit: number
  order: SortOrderType
  sort: ArticleSortType
  search: string
  hasMore: boolean
  currentType: ArticleType
  _inited?: boolean
};
