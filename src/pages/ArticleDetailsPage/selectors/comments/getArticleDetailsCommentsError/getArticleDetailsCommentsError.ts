import type { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsCommentsError = (state: StateSchema): string | undefined => state.articleDetailsPage?.comments?.error;
