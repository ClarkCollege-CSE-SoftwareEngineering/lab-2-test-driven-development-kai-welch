export function applyDiscount(price: number, discountPercent: number): number {
	if (price < 0 ) {
		throw new Error("Price cannot be negative");
	}

	if(discountPercent < 0) {
		throw new Error("Discount cannot be negative");
	}

	if (discountPercent > 100) {
		throw new Error("Discount cannot exceed 100%");
	}

	const discountMultiplier =  1 - discountPercent / 100;
	return Math.round(price * discountMultiplier * 100) / 100;
}

export function calculateTax(
	price: number,
	taxRate: number,
	isTaxExempt: boolean = false
): number {
	if (price < 0) {
		throw new Error("Price cannot be negative");
	}

	if (taxRate < 0) {
		throw new Error("Tax rate cannot be negative");
	}

	if (isTaxExempt) {
		return 0;
	}

	const tax = price * (taxRate / 100);
	return Math.round(tax * 100) / 100;
}

export interface CartItem {
	price: number;
	quantity: number;
	isTaxExempt?: boolean;
}

export interface CartTotals {
	subtotal: number;
	discount: number;
	tax: number;
	total: number;
}

export function calculateTotal(
	items: CartItem[],
	discountPercent: number = 0,
	taxRate: number = 0
): CartTotals {
	// TODO: Implement this function using TDD
	// Remember: write each test first, see it fail, then make it pass
	//throw new Error("Not implemented");

	let subtotal = 0;
	let tax = 0;

	for (let i = 0; i < items.length; i++) {
		const itemsPrice = items[i].price * items[i].quantity;
		subtotal = subtotal + itemsPrice;
		tax = tax + calculateTax(itemsPrice, taxRate, items[i].isTaxExempt);
	}

	subtotal = Math.round(subtotal * 100) / 100;
	const discount = applyDiscount(subtotal, discountPercent);
	tax = applyDiscount(tax, discountPercent);
	const total = discount + tax;

	return {
		subtotal: subtotal,
		discount: discount,
		tax: tax,
		total: total
	}
}