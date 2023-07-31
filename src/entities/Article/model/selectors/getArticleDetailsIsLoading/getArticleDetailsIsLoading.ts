import type { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsIsLoading = (state: StateSchema): boolean | undefined => state.articleDetails?.isLoading;
