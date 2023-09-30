import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import { getScrollRestore } from "./getScrollRestore";

describe("getScrollRestore test:", () => {
  test("should return scrollRestore", () => {
    const state: DeepPartial<StateSchema> = {
      scrollRestore: {
        scroll: {}
      }
    };
    expect(getScrollRestore(state as StateSchema)).toEqual({ scroll: {} });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getScrollRestore(state as StateSchema)).toEqual(undefined);
  });
});
