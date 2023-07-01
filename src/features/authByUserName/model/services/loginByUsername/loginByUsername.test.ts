import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/testAsyncThunk";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("login by username test:", () => {
  test("success server request", async () => {
    const userResult = { username: "123", id: "123" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userResult }));
    const asyncThunk = new TestAsyncThunk(loginByUsername);
    const result = await asyncThunk.callThunk({ username: "123", password: "123" });

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(userResult));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
  });

  test("server response with error", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const asyncThunk = new TestAsyncThunk(loginByUsername);
    const result = await asyncThunk.callThunk({ username: "123", password: "123" });

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
