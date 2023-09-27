import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { ValidationProfileError } from "../../types/profile";
import { getProfileValidationErrors } from "./getProfileValidationErrors";

describe("get profile validation errors from store", () => {
  test("should return profile validation errors", () => {
    const validateErrors: ValidationProfileError[] = [ValidationProfileError.SERVER_ERROR];
    const state: DeepPartial<StateSchema> = {
      profile: { validateErrors, isLoading: false, readonly: false }
    };
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {
      profile: undefined
    };

    expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
  });
});
