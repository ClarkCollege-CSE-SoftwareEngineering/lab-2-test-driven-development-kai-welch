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
- `calculateTotal`: takse items in cart, dicount percentage, tax rate as inputs, and returns subtotal, discounted 
# 4. Reflection section
- How did TDD change the way you approached implementing `calculateTotal`?
- Which of Fowler's test double types (dummy, stub. fake, spy, mock) did you need for this lab? Why or why not?
- What's one thing that wolud have been different if you worte the implementation first?