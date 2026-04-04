import { expect, test } from "bun:test"
import mm, { mmStr } from "../index.ts"

test("1in", () => {
  expect(mm("1in")).toBeCloseTo(25.4)
})
test("10mm", () => {
  expect(mm("10mm")).toBeCloseTo(10)
})
test("0.54mm", () => {
  expect(mm("0.54mm")).toBeCloseTo(0.54)
})
test("0.8mm", () => {
  expect(mm("0.54mm")).toBeCloseTo(0.54)
})
test("100mil", () => {
  expect(mm("100mil")).toBeCloseTo(2.54)
})

test("mmStr avoids scientific notation", () => {
  expect(mmStr(1e-7)).toBe("0.0000001mm")
})

test("mmStr formats converted units without scientific notation", () => {
  expect(mmStr("0.0000001in")).toBe("0.00000254mm")
})
