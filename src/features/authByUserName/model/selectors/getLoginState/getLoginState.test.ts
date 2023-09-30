import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe("get login state from store", () => {
  test("should return authData value - undefined", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: "test",
        password: "123",
        isLoading: false
      }
    };
    expect(getLoginState(state as StateSchema)).toEqual({ username: "test", password: "123", isLoading: false });
  });
});
