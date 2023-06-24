import type { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("login slice", () => {
  test("should set username", () => {
    const state: LoginSchema = {
      username: "",
      isLoading: false,
      password: ""
    };

    expect(loginReducer(state, loginActions.setUsername("test"))).toEqual({
      ...state,
      username: "test"
    });
  });

  test("should set password", () => {
    const state: LoginSchema = {
      username: "",
      isLoading: false,
      password: ""
    };

    expect(loginReducer(state, loginActions.setPassword("test"))).toEqual({
      ...state,
      password: "test"
    });
  });
});
