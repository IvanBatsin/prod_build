import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getCommentFormText } from "./getCommentFormText";

describe("GetCommentFormText test:", () => {
  test("should return text", () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: "Error message",
        text: "test text"
      }
    };
    expect(getCommentFormText(state as StateSchema)).toEqual("test text");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getCommentFormText(state as StateSchema)).toEqual(undefined);
  });
});
