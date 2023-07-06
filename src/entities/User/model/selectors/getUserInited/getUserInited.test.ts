import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getUserInited } from "./getUserInited";

describe("get user inited field from store", () => {
  test("should return inited value", () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: undefined,
        inited: true
      }
    };
    expect(getUserInited(state as StateSchema)).toEqual(true);
  });

  test("should return initial value from store", () => {
    const state: DeepPartial<StateSchema> = {
      user: {}
    };
    expect(getUserInited(state as StateSchema)).toEqual(undefined);
  });
});
