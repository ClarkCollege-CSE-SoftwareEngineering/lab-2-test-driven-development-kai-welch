***CSE325 / Lab 2 / Jan 20 2026 / Kai Welch***
***
# 1. Project description
The purpose of this lab is to exprole TDD (test-driven development) through making a shopping cart price calculator. I will imprement test codes first, the make program that passes all test cases.

# 2. How to run tests
- To run the test, use command `npm test`
- To see the coverage report, use command `npm run test:coverage`

# 3. Functions implemented
- `applyDiscount`: takes price and discount parcentage as inputs, and return the price after the disount is applied with 2 decimal places. It handles errors such as negative price/disocunt number and discount exceed 100%.
- `calculateTax`: takes price, tax rate and boolean for tax exemption as inputs, and returns the amount of tax with 2 decimal places. It handles errors such as negative price/tax number. It also checks if the item is tax exemption, and returns 0 if it is. 
- `calculateTotal`: takse items in cart, dicount percentage, tax rate as inputs, and returns subtotal, discount, tax, and total value. In the function, first it loops through items and calculate subtotal, and during the loop, it also calculate total tax for taxable items. Then it calculate discount, apply the same discount to the tax. Finally, it finds total amount from subtotal, discount and tax. 

# 4. Reflection section
### Question from step 2.1
- Why do we intentionally write a failing test first? How does this relate to what Fowler describes as "state verification"?
### Question from step 2.4
- In the mockist vs. classicist debate from Fowler's article, which approach are we using here? Why don't we need any test doubles for this function?
### Question from step 3.3
- Notice that we changed the implementation (added rounding), but our tests still pass because we used `toBeCloseTo`. This is what Kent C. Dodds means by "not testing implementation details." What would a test that does test implementation details look like?

- How did TDD change the way you approached implementing `calculateTotal`?
- Which of Fowler's test double types (dummy, stub. fake, spy, mock) did you need for this lab? Why or why not?
- What's one thing that wolud have been different if you worte the implementation first?