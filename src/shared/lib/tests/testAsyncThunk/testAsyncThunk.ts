import type { AsyncThunkAction, DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "@/app/providers/StoreProvider";
import type { AxiosStatic } from "axios";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

export class TestAsyncThunk<ReturnType, Args, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: (args: Args) => AsyncThunkAction<ReturnType, Args, { rejectValue: RejectedValue }>;
  api: jest.Mocked<AxiosStatic>;

  constructor (actionCreator: (args: Args) => AsyncThunkAction<ReturnType, Args, { rejectValue: RejectedValue }>, state?: DeepPartial<StateSchema>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.api = mockedAxios;
  }

  async callThunk (args: Args): Promise<any> {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getState, { api: this.api });
    return result;
  }
};
