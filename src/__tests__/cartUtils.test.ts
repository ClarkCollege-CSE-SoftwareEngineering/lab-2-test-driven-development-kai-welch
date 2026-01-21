import { describe , it, expect } from "vitest";
import { 
	applyDiscount, 
	calculateTax,
	calculateTotal,
	CartItem,
} from "../cartUtils";

describe("applyDiscount", () => {
	it("applies a percentage discount to a price", () => {
		expect(applyDiscount(100, 10)).toBe(90);
	});

	it("returns the original price when discount is 0%", () => {
		expect(applyDiscount(50, 0)).toBe(50);
	});

	it("returns 0 when discount is 100%", () => {
		expect(applyDiscount(75, 100)).toBe(0);
	});

	it("handles decimal prices correctly", () => {
		expect(applyDiscount(19.99, 10)).toBeCloseTo(17.99, 2);
	});

	it("throws an error for negative prices", () => {
		expect(() => applyDiscount(-10, 10)).toThrow("Price cannot be negative");
	});

	it("throws an error for negaitve discount percentages", () => {
		expect(() => applyDiscount(100, -5)).toThrow("Discount cannot be negative");
	});

	it("throws an error for discount greater than 100%", () => {
		expect(() => applyDiscount(100, 150)).to.Throw("Discount cannot exceed 100%");
	});
});

describe("calculateTax", () => {
	it("calculates tax on a price", () => {
		expect(calculateTax(100, 8.5)).toBeCloseTo(8.5, 2);
	});

	it("returns 0 tax when rate is 0%", () => {
		expect(calculateTax(50, 0)).toBe(0);
	});

	it("handles decimal prices correctly", () => {
		expect(calculateTax(19.99, 10)).toBeCloseTo(2.0, 2);
	});

	it("returns 0 tax when item is tax-exempt", () => {
		expect(calculateTax(100, 8.5, true)).toBe(0);
	});

	it("throws an error for negative prices", () => {
		expect(() => calculateTax(-10, 8.5)).toThrow("Price cannot be negative");
	});

	it("throws an error for negative tax rates", () => {
		expect(() => calculateTax(100, -5)).toThrow("Tax rate cannot be negative");
	});
});

describe("calculateTotal", () => {
	// TODO: Add at least 6 test cases
	// Consider: single item, multiple items, discounts. tax-exempt items,
	// empty cart, mixed tax-exempt and taxable items

	// Sample test data
	const Item1: CartItem = {
		price: 100,
		quantity: 1,
		isTaxExempt: false
	};

	const Item2: CartItem = {
		price: 60,
		quantity: 2,
		isTaxExempt: false
	};

	const Item3: CartItem = {
		price: 100,
		quantity: 3,
		isTaxExempt: true
	};

	const Item4: CartItem = {
		price: 100,
		quantity: 0,
		isTaxExempt: true
	};

	const Item5: CartItem = {
		price: 5.992,
		quantity: 1,
		isTaxExempt: false
	};

	it("calculates totals for a single item", () => {
		expect(calculateTotal([Item1], 20, 8).total).toBe(86.4);
	});

	it("calculates totals for multiple items", () => {
		expect(calculateTotal([Item1, Item2], 15, 5).total).toBe(196.35);
	});

	it("applies discount before calculating tax", () => {
		expect(calculateTotal([Item1], 20, 0).discount).toBe(20);
	});

	it("excludes tax-exempt items from tax calculation", () => {
		expect(calculateTotal([Item3], 10, 15).tax).toBe(0);
	});

	// TODO: Add at least 2 more test cases
	it("calculates totals for taxable and tax-exempt items", () => {
		expect(calculateTotal([Item2, Item3], 20, 8).total).toBe(343.68);
	});

	it("handles item amount 0", () => {
		expect(calculateTotal([Item4], 10, 8).total).toBe(0);
	});

	it("calculates total tax correctly", () => {
		expect(calculateTotal([Item2], 0, 10).tax).toBe(12)
	});

	it("rounds all four values to 2 decimal places", () => {
		const result = calculateTotal([Item5], 2, 8)

		expect(result.subtotal).toBeCloseTo(5.99, 2);
		expect(result.discount).toBeCloseTo(0.12, 2);
		expect(result.tax).toBeCloseTo(0.47, 2);
		expect(result.total).toBeCloseTo(6.34, 2)
	});
});