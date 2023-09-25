import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined
};

export const editableProfileCardSlice = createSlice({
  name: "editableProfileCard",
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = { ...state.form, ...action.payload };
    },
    cancelEditProfile: (state) => {
      state.validateErrors = undefined;
      state.form = state.data;
      state.readonly = true;
    }
  },
  extraReducers: (build) => {
    build
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateProfileData.pending, (state, action) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
        state.validateErrors = undefined;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  }
});

export const { actions: editableProfileCardActions } = editableProfileCardSlice;
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;
