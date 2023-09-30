import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileReadOnly } from "./getProfileReadOnly";

describe("get profile readOnly from store", () => {
  test("should return profile readOnly", () => {
    const state: DeepPartial<StateSchema> = {
      profile: { isLoading: false, readonly: true }
    };
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {
      profile: undefined
    };

    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
  });
});
