import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import { type Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";
import { ValidationProfileError } from "../../consts/consts";

export const updateProfileData = createAsyncThunk<Profile, any, ThunkConfig<ValidationProfileError[]>>(
  "profile/updateProfileData",
  async (_, thunkAPI) => {
    try {
      const formData = getProfileForm(thunkAPI.getState());
      const errors = validateProfileData(formData);
      if (errors.length) {
        return thunkAPI.rejectWithValue(errors);
      }
      const response = await thunkAPI.extra.api.put<Profile>(`/profile/${formData?.id || ""}`, formData);
      if (!response.data) {
        return thunkAPI.rejectWithValue([ValidationProfileError.SERVER_ERROR]);
      }
      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue([ValidationProfileError.SERVER_ERROR]);
    }
  }
);
