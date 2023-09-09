import type { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageError = (state: StateSchema): string | undefined => state.articlesPage?.error;
