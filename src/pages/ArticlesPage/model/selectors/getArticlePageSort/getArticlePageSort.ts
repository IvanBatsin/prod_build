import type { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortType } from "entities/Article/model/consts/consts";

export const getArticlePageSort = (state: StateSchema): ArticleSortType => state.articlesPage?.sort ?? ArticleSortType.CREATED_AT;
