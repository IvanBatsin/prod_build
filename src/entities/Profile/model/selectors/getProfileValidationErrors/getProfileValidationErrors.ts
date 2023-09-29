import type { StateSchema } from "app/providers/StoreProvider";
import type { ValidationProfileError } from "../../consts/consts";

export const getProfileValidationErrors = (state: StateSchema): ValidationProfileError[] | undefined => state.profile?.validateErrors;
