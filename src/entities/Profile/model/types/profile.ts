import type { Country } from "entities/Country";
import type { Currency } from "entities/Currency";

export enum ValidationProfileError {
  INCORRECT_PROFILE_DATA = "incorrectProfileData",
  INCORRECT_COUNTRY = "incorrectCountry",
  INCORRECT_AGE = "incorrectAge",
  NONE_DATA = "noneData",
  SERVER_ERROR = "serverError"
}

export interface Profile {
  firstName?: string
  lastName?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
};

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidationProfileError[]
};
