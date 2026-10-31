import { splitBill, tip } from "./tip.ts";

const rest: string[] = [];
let people: string | undefined;
let hasPeople = false;
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
	const a = args[i];
	if (a === "--people") {
		hasPeople = true;
		people = args[++i];
	} else if (a.startsWith("--people=")) {
		hasPeople = true;
		people = a.slice("--people=".length);
	} else {
		rest.push(a);
	}
}

if (hasPeople && !(people !== undefined && /^\d+$/.test(people) && Number(people) >= 1)) {
	process.stderr.write("Number of people must be a whole number of 1 or more\n");
	process.exit(1);
}

const [amount, percent = 15] = rest.map(Number);
const t = tip(amount, percent);
const total = amount + t;
console.log(`Tip: ${t.toFixed(2)}  Total: ${total.toFixed(2)}`);
if (hasPeople) {
	console.log(`Each: ${splitBill(total, Number(people)).toFixed(2)}`);
}
