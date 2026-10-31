export function tip(amount: number, percent: number): number {
	return Math.round(amount * percent) / 100;
}
