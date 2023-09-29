import { ValidationProfileError } from "../consts/consts";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { type Profile, type ProfileSchema } from "../types/profile";
import { editableProfileCardActions, editableProfileCardReducer } from "./editableProfileCardSlice";

describe("EditableProfileCard slice", () => {
  test("should set read only", () => {
    const state: ProfileSchema = {
      isLoading: false,
      readonly: false
    };

    expect(editableProfileCardReducer(state, editableProfileCardActions.setReadOnly(true))).toEqual({
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

    expect(editableProfileCardReducer(state, editableProfileCardActions.updateProfile({ lastName: "Test" }))).toEqual({
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

    expect(editableProfileCardReducer(state, editableProfileCardActions.cancelEditProfile())).toEqual({
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

    expect(editableProfileCardReducer(state, updateProfileData.pending)).toEqual({
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

    expect(editableProfileCardReducer(state, updateProfileData.fulfilled(data, "", ""))).toEqual({
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

    expect(editableProfileCardReducer(state, updateProfileData.rejected(null, "", null, [ValidationProfileError.SERVER_ERROR]))).toEqual({
      isLoading: false,
      readonly: false,
      validateErrors: [ValidationProfileError.SERVER_ERROR]
    });
  });
});
