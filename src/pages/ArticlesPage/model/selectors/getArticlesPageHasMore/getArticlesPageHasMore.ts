import type { StateSchema } from "app/providers/StoreProvider";

export const getArticlesPageHasMore = (state: StateSchema): boolean | undefined => state.articlesPage?.hasMore;
