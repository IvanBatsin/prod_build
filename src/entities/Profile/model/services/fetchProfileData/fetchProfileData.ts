import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import type { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, any, ThunkConfig<string>>(
  "profile/fetchProfileData",
  async (_, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>("/profile");
      if (!response) {
        return thunkAPI.rejectWithValue("Server error");
      }
      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
