import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("Get login error test:", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        error: "Error message",
        isLoading: false,
        password: "",
        username: ""
      }
    };
    expect(getLoginError(state as StateSchema)).toEqual("Error message");
  });

  test("work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual("");
  });
});
