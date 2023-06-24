import type { User, UserSchema } from "../types/user";
import { userActions, userReducer } from "./userSlice";

describe("user slice", () => {
  test("should set user", () => {
    const state: UserSchema = {
      authData: undefined
    };

    const payload: User = {
      username: "test",
      id: "11"
    };
    expect(userReducer(state, userActions.setAuthUser(payload))).toEqual({
      authData: { ...payload }
    });
  });
});
