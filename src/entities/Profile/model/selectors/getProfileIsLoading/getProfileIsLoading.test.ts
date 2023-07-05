import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe("get profile loading from store", () => {
  test("should return profile loading", () => {
    const state: DeepPartial<StateSchema> = {
      profile: { isLoading: true, readonly: false }
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {
      profile: undefined
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
