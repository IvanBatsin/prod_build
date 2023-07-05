import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import type { Profile } from "../../types/profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { getProfileData } from "./getProfileData";

describe("get profile state from store", () => {
  test("should return profile data", () => {
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

    const state: DeepPartial<StateSchema> = {
      profile: { data, isLoading: false, readonly: false }
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("should return undefined", () => {
    const state: DeepPartial<StateSchema> = {
      profile: undefined
    };

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
