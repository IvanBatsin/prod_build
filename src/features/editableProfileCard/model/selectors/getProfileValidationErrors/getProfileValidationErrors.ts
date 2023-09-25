import type { StateSchema } from "app/providers/StoreProvider";
import type { ValidationProfileError } from "../../types/profile";

export const getProfileValidationErrors = (state: StateSchema): ValidationProfileError[] | undefined => state.profile?.validateErrors;
