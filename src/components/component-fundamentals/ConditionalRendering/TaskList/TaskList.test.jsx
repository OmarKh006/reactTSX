import { expect, test } from "vitest";

function sum(a, b) {
  return a + b;
}

test("test sum functionality", () => {
  expect(sum(1, 2)).toBe(3);
});
