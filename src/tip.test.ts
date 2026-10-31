import { expect, test } from "bun:test";
import { tip } from "./tip.ts";

test("tip", () => {
	expect(tip(100, 15)).toBe(15);
});
