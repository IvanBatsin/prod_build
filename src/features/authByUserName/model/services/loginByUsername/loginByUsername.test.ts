import { loginByUsername } from "./loginByUsername";
import { userActions } from "@/entities/User";
import { TestAsyncThunk } from "@/shared/lib/tests/testAsyncThunk/testAsyncThunk";

describe("login by username test:", () => {
  test("success server request", async () => {
    const userResult = { username: "123", id: "123" };
    const asyncThunk = new TestAsyncThunk(loginByUsername);
    asyncThunk.api.post.mockReturnValue(Promise.resolve({ data: userResult }));
    const result = await asyncThunk.callThunk({ username: "123", password: "123" });

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthUser(userResult));
    expect(asyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
  });

  test("server response with error", async () => {
    const asyncThunk = new TestAsyncThunk(loginByUsername);
    asyncThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await asyncThunk.callThunk({ username: "123", password: "123" });

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(asyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
