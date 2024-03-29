import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { AddCommentFormSchema } from "../types/addComentFormSchema";

const initialState: AddCommentFormSchema = {
  text: ""
};

export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
