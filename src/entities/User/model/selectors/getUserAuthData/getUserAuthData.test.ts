import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getUserAuthData } from "./getUserAuthData";
import type { User } from "../../types/user";

describe("get user state from store", () => {
  test("should return authData value - undefined", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: undefined
      }
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });

  test("should return authData value from non-empty state", () => {
    const authDataState: User = {
      username: "Test user",
      id: "11"
    };

    const state: DeepPartial<StateSchema> = {
      user: {
        authData: authDataState
      }
    };
    expect(getUserAuthData(state as StateSchema)).toEqual(authDataState);
  });
});
