import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { User, UserSchema } from "../types/user";
import { LOCALSTORAGE_KEY } from "shared/const/localStorage";

const initialState: UserSchema = {
  authData: undefined
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthUser: (state) => {
      const data = window.localStorage.getItem(LOCALSTORAGE_KEY);
      if (data) {
        state.authData = JSON.parse(data);
      }
    },
    userLogout: (state) => {
      state.authData = undefined;
      window.localStorage.removeItem(LOCALSTORAGE_KEY);
    }
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
