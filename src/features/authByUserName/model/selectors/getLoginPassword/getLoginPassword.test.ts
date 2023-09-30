import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("Get login password test:", () => {
  test("should return password", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: "testPassowrd",
        isLoading: false,
        username: ""
      }
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("testPassowrd");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
