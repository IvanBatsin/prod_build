import { describe, expect, test } from "@jest/globals";
import { getQueryParams } from "./setQueryParams";

describe("shared/lib/getQueryParams", () => {
  test("should work with one parameter", () => {
    const params = {
      test: "test"
    };
    expect(getQueryParams(params)).toBe("?test=test");
  });

  test("should work with two parameters", () => {
    const params = {
      test: "test",
      rest: "rest"
    };
    expect(getQueryParams(params)).toBe("?test=test&rest=rest");
  });

  test("should ignore undefined parameter", () => {
    const params = {
      test: "test",
      rest: undefined
    };
    expect(getQueryParams(params)).toBe("?test=test");
  });
});
