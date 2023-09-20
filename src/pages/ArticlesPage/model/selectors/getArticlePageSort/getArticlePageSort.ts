import type { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortType } from "entities/Article/model/types/article";

export const getArticlePageSort = (state: StateSchema): ArticleSortType => state.articlesPage?.sort ?? ArticleSortType.CREATED_AT;
