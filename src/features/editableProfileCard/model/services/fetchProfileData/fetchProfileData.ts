import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "@/app/providers/StoreProvider";
import type { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  "profile/fetchProfileData",
  async (profileId, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>(`/profile/${profileId}`);
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
