import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("Get login isLoading test:", () => {
  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
        password: "",
        username: "",
        error: ""
      }
    };

    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
