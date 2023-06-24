import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "entities/User";
import { userActions } from "entities/User/model/slice/userSlice";
import { LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernamePayload {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernamePayload, { rejectValue: string }>(
  "login/loginByUsername",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post<User>("http://localhost:8000/login", payload);
      if (!response.data) {
        throw new Error("Server error");
      }
      thunkAPI.dispatch(userActions.setAuthUser(response.data));
      window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
