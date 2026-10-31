import { tip } from "./tip.ts";

const [amount, percent = "15"] = process.argv.slice(2).map(Number);
const t = tip(amount, percent);
console.log(`Tip: ${t.toFixed(2)}  Total: ${(amount + t).toFixed(2)}`);
