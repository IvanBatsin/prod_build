import type { StateSchema } from "app/providers/StoreProvider";

export const getCommentFormText = (state: StateSchema): string | undefined => state.addCommentForm?.text;
