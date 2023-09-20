import type { StateSchema } from "app/providers/StoreProvider";
import type { SortOrderType } from "shared/types/commonTypes";

export const getArticlePageOrder = (state: StateSchema): SortOrderType => state.articlesPage?.order ?? "asc";
