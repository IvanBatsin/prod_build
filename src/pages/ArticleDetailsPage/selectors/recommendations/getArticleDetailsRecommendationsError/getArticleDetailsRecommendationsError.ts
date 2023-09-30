import type { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsRecommendationsError = (state: StateSchema): string | undefined => state.articleDetailsPage?.recommendations?.error;
