import type { StateSchema } from "@/app/providers/StoreProvider";

export const getArticlesPageInited = (state: StateSchema): boolean | undefined => state.articlesPage?._inited;
