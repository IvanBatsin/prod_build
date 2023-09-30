import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("get profile error state from store", () => {
  test("should return profile error", () => {
    const error = "Test error";
    const state: DeepPartial<StateSchema> = {
      profile: { isLoading: false, readonly: false, error }
    };
    expect(getProfileError(state as StateSchema)).toEqual(error);
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {
      profile: undefined
    };

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
