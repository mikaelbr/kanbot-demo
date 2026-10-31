export function tip(amount: number, percent: number): number {
	return Math.round(amount * percent) / 100;
}

export function splitBill(total: number, people: number): number {
	return Math.ceil(Math.round(total * 100) / people) / 100;
}
