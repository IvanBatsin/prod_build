import type { AsyncThunkAction } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";

export class TestAsyncThunk<ReturnType, Args, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: (args: Args) => AsyncThunkAction<ReturnType, Args, { rejectValue: RejectedValue }>;

  constructor (actionCreator: (args: Args) => AsyncThunkAction<ReturnType, Args, { rejectValue: RejectedValue }>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk (args: Args): Promise<any> {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getState, undefined);
    return result;
  }
};
