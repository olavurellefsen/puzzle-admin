import { capitalizeFirstLetter } from "./Utils";

describe("capitalizeFirstLetter", () => {
  test("first letter is capitalized", () => {
    expect(capitalizeFirstLetter("test")).toEqual("Test");
  });
  test("already capitalized", () => {
    expect(capitalizeFirstLetter("Test")).toEqual("Test");
  });
  test("undefined", () => {
    expect(capitalizeFirstLetter()).toEqual("");
  });
  test("wrong input type", () => {
    expect(capitalizeFirstLetter(false)).toEqual("");
  });
  test("empty string", () => {
    expect(capitalizeFirstLetter("")).toEqual("");
  });
});
