import { describe, expect, test } from "@jest/globals";
import { classNames } from "./classNames";

describe("shared/lib/classNames", () => {
  test("base class", () => {
    expect(classNames("some class")).toBe("some class");
  });

  test("base class, object", () => {
    const result = "base class objClass";
    expect(classNames("base class", { objClass: true, negativeClass: false })).toBe(result);
  });

  test("base class, object, array", () => {
    const result = "base class additionalClass objClass";
    expect(classNames("base class", { objClass: true, negativeClass: false }, ["additionalClass"])).toBe(result);
  });

  test("array with undefined", () => {
    const result = "base class objClass";
    expect(classNames("base class", { objClass: true, negativeClass: false }, [undefined])).toBe(result);
  });

  test("object with undefined and empty string", () => {
    const result = "base class";
    expect(classNames("base class", { objClass: undefined, secondClass: "" }, [undefined])).toBe(result);
  });
});
