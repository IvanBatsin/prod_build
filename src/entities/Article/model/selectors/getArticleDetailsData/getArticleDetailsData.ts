import type { StateSchema } from "@/app/providers/StoreProvider";
import type { Article } from "../../types/article";

export const getArticleDetailsData = (state: StateSchema): Article | undefined => state.articleDetails?.data;
