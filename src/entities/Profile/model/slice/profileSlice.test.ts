import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ValidationProfileError, type Profile, type ProfileSchema } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

describe("profile slice", () => {
  test("should set read only", () => {
    const state: ProfileSchema = {
      isLoading: false,
      readonly: false
    };

    expect(profileReducer(state, profileActions.setReadOnly(true))).toEqual({
      isLoading: false,
      readonly: true
    });
  });

  test("should update profile", () => {
    const state: ProfileSchema = {
      isLoading: false,
      readonly: false,
      form: {
        firstName: "test"
      }
    };

    expect(profileReducer(state, profileActions.updateProfile({ lastName: "Test" }))).toEqual({
      isLoading: false,
      readonly: false,
      form: {
        firstName: "test",
        lastName: "Test"
      }
    });
  });

  test("should cancel editing", () => {
    const state: ProfileSchema = {
      isLoading: false,
      readonly: false,
      form: {
        firstName: "test"
      },
      data: {
        lastName: "last"
      }
    };

    expect(profileReducer(state, profileActions.cancelEditProfile())).toEqual({
      isLoading: false,
      readonly: true,
      form: {
        lastName: "last"
      },
      data: {
        lastName: "last"
      },
      validateErrors: undefined
    });
  });

  test("updateProfileData service pending", () => {
    const state: ProfileSchema = {
      isLoading: false,
      readonly: false,
      validateErrors: []
    };

    expect(profileReducer(state, updateProfileData.pending)).toEqual({
      isLoading: true,
      readonly: false,
      validateErrors: undefined
    });
  });

  test("updateProfileData service fulfilled", () => {
    const data: Profile = {
      firstName: "test",
      lastName: "test"
    };

    const state: ProfileSchema = {
      isLoading: false,
      readonly: false,
      validateErrors: [],
      data
    };

    expect(profileReducer(state, updateProfileData.fulfilled(data, "", ""))).toEqual({
      isLoading: false,
      data,
      form: data,
      readonly: true,
      validateErrors: undefined
    });
  });

  test("updateProfileData service rejected", () => {
    const state: ProfileSchema = {
      isLoading: true,
      readonly: false,
      validateErrors: []
    };

    expect(profileReducer(state, updateProfileData.rejected(null, "", null, [ValidationProfileError.SERVER_ERROR]))).toEqual({
      isLoading: false,
      readonly: false,
      validateErrors: [ValidationProfileError.SERVER_ERROR]
    });
  });
});
