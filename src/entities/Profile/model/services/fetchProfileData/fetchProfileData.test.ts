import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import type { Profile } from "../../types/profile";

describe("fetch profile data test:", () => {
  test("success server request", async () => {
    const data: Profile = { username: "123", firstName: "John", lastName: "Johns" };
    const asyncThunk = new TestAsyncThunk(fetchProfileData);
    asyncThunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await asyncThunk.callThunk("1");

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server response with error", async () => {
    const asyncThunk = new TestAsyncThunk(fetchProfileData);
    asyncThunk.api.get.mockReturnValue(Promise.resolve(undefined));
    const result = await asyncThunk.callThunk("1");

    expect(asyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
