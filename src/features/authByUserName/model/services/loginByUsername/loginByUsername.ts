import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import type { User } from "entities/User";
import { userActions } from "entities/User/model/slice/userSlice";
import { LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface LoginByUsernamePayload {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernamePayload, ThunkConfig<string>>(
  "login/loginByUsername",
  async (payload, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.post<User>("/login", payload);
      if (!response.data) {
        throw new Error("Server error");
      }
      thunkAPI.dispatch(userActions.setAuthUser(response.data));
      window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
