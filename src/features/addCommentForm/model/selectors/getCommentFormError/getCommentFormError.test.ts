import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getCommentFormError } from "./getCommentFormError";

describe("getCommentFormError test:", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: "Error message",
        text: "test text"
      }
    };
    expect(getCommentFormError(state as StateSchema)).toEqual("Error message");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCommentFormError(state as StateSchema)).toEqual(undefined);
  });
});
