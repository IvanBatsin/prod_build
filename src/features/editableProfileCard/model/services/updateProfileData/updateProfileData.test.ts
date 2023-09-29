import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { type Profile } from "../../types/profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidationProfileError } from "../../consts/consts";

const data: Profile = {
  id: "1",
  firstName: "John",
  lastName: "Jons",
  age: 23,
  currency: Currency.RUB,
  country: Country.Belarus,
  city: "Moscow",
  username: "admin",
  avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm"
};

describe("update profile data test:", () => {
  test("success server request", async () => {
    const asyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data, isLoading: false, readonly: false }
    });
    asyncThunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk(null);

    expect(asyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server response with error", async () => {
    const asyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data, isLoading: false, readonly: false }
    });
    asyncThunk.api.put.mockReturnValue(Promise.resolve(undefined));
    const result = await asyncThunk.callThunk(null);

    expect(asyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
  });

  test("validation error", async () => {
    const asyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, firstName: "" }, isLoading: false, readonly: false }
    });
    asyncThunk.api.put.mockReturnValue(Promise.resolve(undefined));
    const result = await asyncThunk.callThunk(null);

    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual([ValidationProfileError.INCORRECT_PROFILE_DATA]);
  });
});
