import type { StateSchema } from "app/providers/StoreProvider";
import { ArticleType } from "entities/Article/model/types/article";

export const getArticlePageCurrentType = (state: StateSchema): ArticleType => state.articlesPage?.currentType ?? ArticleType.ALL;
