import type { DeepPartial } from "@reduxjs/toolkit";
import { getCounterValue } from "./getCounterValue";
import type { StateSchema } from "@/app/providers/StoreProvider";

describe("get value from counter state", () => {
  test("should return counter state value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 12 }
    };
    expect(getCounterValue(state as StateSchema)).toEqual(12);
  });
});
