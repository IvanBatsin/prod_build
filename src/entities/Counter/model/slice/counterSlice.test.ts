import { counterAction, counterReducer } from "./counterSlice";
import type { CounterSchema } from "../types/counterSchema";

describe("counter slice", () => {
  test("should increment counter value", () => {
    const state: CounterSchema = {
      value: 10
    };
    expect(counterReducer(state, counterAction.increment)).toEqual({ value: 11 });
  });

  test("should decrement counter value", () => {
    const state: CounterSchema = {
      value: 10
    };
    expect(counterReducer(state, counterAction.decrement)).toEqual({ value: 9 });
  });

  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterAction.decrement)).toEqual({ value: -1 });
  });
});
