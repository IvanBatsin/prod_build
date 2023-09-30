import { validateProfileData } from "./validateProfileData";
import { type Profile } from "../../types/profile";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { ValidationProfileError } from "../../consts/consts";

const data: Profile = {
  firstName: "John",
  lastName: "Jons",
  age: 23,
  currency: Currency.RUB,
  country: Country.Belarus,
  city: "Moscow",
  username: "admin",
  avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
};

describe("validate profile data: ", () => {
  test("all fields are correct ", () => {
    expect(validateProfileData(data)).toEqual([]);
  });

  test("firstName and lastName are empty ", () => {
    expect(validateProfileData({ ...data, firstName: undefined, lastName: "" })).toEqual([ValidationProfileError.INCORRECT_PROFILE_DATA]);
  });

  test("age is empty ", () => {
    expect(validateProfileData({ ...data, age: undefined })).toEqual([ValidationProfileError.INCORRECT_AGE]);
  });

  test("country is empty ", () => {
    expect(validateProfileData({ ...data, country: undefined })).toEqual([ValidationProfileError.INCORRECT_COUNTRY]);
  });
});
