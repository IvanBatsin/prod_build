import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import type { Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<Profile, any, ThunkConfig<string>>(
  "profile/updateProfileData",
  async (_, thunkAPI) => {
    try {
      const formData = getProfileForm(thunkAPI.getState());
      const response = await thunkAPI.extra.api.put<Profile>("/profile", formData);
      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
