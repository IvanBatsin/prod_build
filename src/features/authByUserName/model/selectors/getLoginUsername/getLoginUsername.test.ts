import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("Get login username test:", () => {
  test("should return password", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: "userName",
        isLoading: false,
        password: ""
      }
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("userName");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
