import type { StateSchema } from "@/app/providers/StoreProvider";

export const getArticlePageSearch = (state: StateSchema): string => state.articlesPage?.search ?? "";
