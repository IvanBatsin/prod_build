import type { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsError = (state: StateSchema): string | undefined => state.articleDetails?.error;
