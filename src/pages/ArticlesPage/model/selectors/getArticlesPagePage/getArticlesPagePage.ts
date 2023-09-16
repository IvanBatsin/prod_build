import type { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPagePage = (state: StateSchema): number => state.articlesPage?.page || 1;
