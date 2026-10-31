import { expect, test } from "bun:test";

function run(...args: string[]) {
	const p = Bun.spawnSync(["bun", "src/cli.ts", ...args]);
	return {
		out: p.stdout.toString(),
		err: p.stderr.toString(),
		code: p.exitCode,
	};
}

const ERR = "Number of people must be a whole number of 1 or more\n";

test("splits with default tip", () => {
	expect(run("600", "--people", "4")).toEqual({
		out: "Tip: 90.00  Total: 690.00\nEach: 172.50\n",
		err: "",
		code: 0,
	});
});

test("splits with explicit tip, flag anywhere, = form", () => {
	for (const args of [
		["600", "10", "--people", "4"],
		["600", "10", "--people=4"],
		["--people", "4", "600", "10"],
		["--people=4", "600", "10"],
	]) {
		expect(run(...args).out).toBe("Tip: 60.00  Total: 660.00\nEach: 165.00\n");
	}
});

test("rounds the share up to the cent", () => {
	expect(run("100", "0", "--people", "3").out).toContain("Each: 33.34\n");
});

test("exact division is not over-rounded", () => {
	expect(run("100.10", "0", "--people", "1").out).toContain("Each: 100.10\n");
});

test("output is unchanged without --people", () => {
	expect(run("100", "15").out).toBe("Tip: 15.00  Total: 115.00\n");
	expect(run("100").out).toBe("Tip: 15.00  Total: 115.00\n");
});

test("rejects invalid people", () => {
	const cases = [
		["--people", "0"],
		["--people", "-2"],
		["--people=-2"],
		["--people", "2.5"],
		["--people", "4.0"],
		["--people", "abc"],
		["--people="],
		["--people"],
	];
	for (const c of cases) {
		expect(run("100", ...c)).toEqual({ out: "", err: ERR, code: 1 });
	}
});
