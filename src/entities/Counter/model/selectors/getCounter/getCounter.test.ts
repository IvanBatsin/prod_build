import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "./getCounter";

describe("get counter", () => {
  test("should return counter state", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 0 }
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 0 });
  });
});
