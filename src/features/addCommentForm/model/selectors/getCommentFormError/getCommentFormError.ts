import type { StateSchema } from "@/app/providers/StoreProvider";

export const getCommentFormError = (state: StateSchema): string | undefined => state.addCommentForm?.error;
