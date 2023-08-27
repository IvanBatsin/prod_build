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
  // extraReducers: (build) => {
  //   build
  //     .addCase(loginByUsername.pending, (state, action) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // }
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
