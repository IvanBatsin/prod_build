import type { ScrollRestoreSchema } from "../types/scrollRestoreSchema";
import { scrollRestoreActions, scrollRestoreReducer } from "./scrollRestoreSlice";

describe("scroll restore slice", () => {
  test("should set scroll position", () => {
    const state: ScrollRestoreSchema = {
      scroll: {}
    };

    expect(scrollRestoreReducer(state, scrollRestoreActions.setScrollPosition({ path: "test", position: 100 }))).toEqual({
      ...state,
      scroll: {
        test: 100
      }
    });
  });
});
