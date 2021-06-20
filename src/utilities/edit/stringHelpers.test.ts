import { expect } from "@jest/globals";
import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers";

test("Validate uppercase", () => {
    expect(makeUppercase("sTriNg")).toBe("STRING");
});

test("Validate spaces", () => {
    expect(replaceSpaces("s t r i n g")).toBe("s-t-r-i-n-g");
});

test("Validate string length", () => {
    expect(limitLength(6, "12345678910123")).toBe("123456");
});