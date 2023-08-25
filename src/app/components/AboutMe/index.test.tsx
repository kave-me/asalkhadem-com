import { classNames } from "./classNames";
import { it, expect, describe } from "@jest/globals";

describe("classNames", () => {
  it("should return an empty string when no arguments are passed", () => {
    expect(classNames()).toBe("");
  });

  it("should return a single class name when only one argument is passed", () => {
    expect(classNames("foo")).toBe("foo");
  });

  it("should concatenate multiple class names with a space separator", () => {
    expect(classNames("foo", "bar", "baz")).toBe("foo bar baz");
  });

  it("should filter out falsy values (undefined, null, false, 0, empty string)", () => {
    expect(classNames("foo", null, undefined, false, 0, "", "bar")).toBe(
      "foo bar"
    );
  });
});
