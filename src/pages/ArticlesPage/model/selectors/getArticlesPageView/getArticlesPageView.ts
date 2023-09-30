import type { StateSchema } from "@/app/providers/StoreProvider";
import type { ArticleView } from "@/entities/Article";

export const getArticlesPageView = (state: StateSchema): ArticleView | undefined => state.articlesPage?.view;
