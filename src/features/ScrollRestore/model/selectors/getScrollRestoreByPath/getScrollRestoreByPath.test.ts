import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getScrollRestoreByPath } from "./getScrollRestoreByPath";

describe("getScrollRestoreByPath test:", () => {
  test("should return position by path", () => {
    const state: DeepPartial<StateSchema> = {
      scrollRestore: {
        scroll: {
          test: 100
        }
      }
    };
    expect(getScrollRestoreByPath(state as StateSchema, "test")).toEqual(100);
  });
});
