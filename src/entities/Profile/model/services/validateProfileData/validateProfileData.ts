import { ValidationProfileError } from "../../consts/consts";
import { type Profile } from "../../types/profile";

export const validateProfileData = (profile: Profile | undefined): ValidationProfileError[] => {
  if (!profile) {
    return [ValidationProfileError.NONE_DATA];
  }

  const errors: ValidationProfileError[] = [];

  (!profile.firstName || !profile.lastName) && errors.push(ValidationProfileError.INCORRECT_PROFILE_DATA);

  !profile.country && errors.push(ValidationProfileError.INCORRECT_COUNTRY);

  (!profile.age || !Number.isInteger(profile.age)) && errors.push(ValidationProfileError.INCORRECT_AGE);

  return errors;
};
