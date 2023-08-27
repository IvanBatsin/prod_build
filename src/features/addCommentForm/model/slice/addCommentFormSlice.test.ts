import type { AddCommentFormSchema } from "../types/addComentFormSchema";
import { addCommentFormReducer, addCommentFormActions } from "./addCommentFormSlice";

describe("addCommentForm slice", () => {
  test("should set text", () => {
    const state: AddCommentFormSchema = {
      error: "",
      text: "test text"
    };

    expect(addCommentFormReducer(state, addCommentFormActions.setText("test"))).toEqual({
      ...state,
      text: "test"
    });
  });
});
