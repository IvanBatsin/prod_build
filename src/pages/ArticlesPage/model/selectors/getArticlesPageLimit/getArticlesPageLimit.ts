import type { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageLimit = (state: StateSchema): number | undefined => state.articlesPage?.limit;
