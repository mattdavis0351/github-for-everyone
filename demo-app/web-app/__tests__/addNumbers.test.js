const addNumbers = require("../src/addNumbers");

describe("addNumbers", () => {
  test("should return the sum of two numbers", () => {
    expect(addNumbers(1, 2)).toEqual({ value: 3, msg: "success" });
  });

  test("msg should be invalid if parameters are not numbers", () => {
    expect(addNumbers("a", "b")).toEqual({ msg: "invalid" });
  });
});
