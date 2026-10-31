import { expect, test } from "bun:test";
import { splitBill, tip } from "./tip.ts";

test("tip", () => {
	expect(tip(100, 15)).toBe(15);
});

test("splitBill divides evenly", () => {
	expect(splitBill(690, 4)).toBe(172.5);
});

test("splitBill rounds up to the cent", () => {
	expect(splitBill(100, 3)).toBe(33.34);
});

test("splitBill with one person returns the total", () => {
	expect(splitBill(100.1, 1)).toBe(100.1);
});

test("splitBill does not over-round noisy totals", () => {
	expect(splitBill(0.1 + tip(0.1, 200), 1)).toBe(0.3);
	expect(splitBill(100.1, 2)).toBe(50.05);
});
