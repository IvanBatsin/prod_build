import type { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsRecommendationsIsLoading = (state: StateSchema): boolean | undefined => state.articleDetailsPage?.recommendations?.isLoading;
