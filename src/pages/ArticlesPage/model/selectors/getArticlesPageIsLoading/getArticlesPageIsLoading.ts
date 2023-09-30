import type { StateSchema } from "@/app/providers/StoreProvider";

export const getArticlesPageIsLoading = (state: StateSchema): boolean | undefined => state.articlesPage?.isLoading;
