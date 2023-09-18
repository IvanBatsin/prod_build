import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ScrollRestoreSchema, SetScrollRestorePayload } from "../types/scrollRestoreSchema";

const initialState: ScrollRestoreSchema = {
  scroll: {}
};

export const scrollRestoreSlice = createSlice({
  name: "scrollRestore",
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<SetScrollRestorePayload>) => {
      state.scroll[action.payload.path] = action.payload.position;
    }
  }
});

export const { actions: scrollRestoreActions } = scrollRestoreSlice;
export const { reducer: scrollRestoreReducer } = scrollRestoreSlice;
