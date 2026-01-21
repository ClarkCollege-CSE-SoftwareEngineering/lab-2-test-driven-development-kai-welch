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
- How did TDD change the way you approached implementing `calculateTotal`?
    TDD changed the way I creates the algorithm of `calculateTotal` function. Since I decided outcome of each input I will test, it helped me thinking more objectively about the process of calculating the price in the cart. Without TDD, I would have made the function based on how I would calculate the price of the cart. However, the function I made using TDD look more counter intuitive, and it looks more efficient that what I would've write without TDD.
- Which of Fowler's test double types (dummy, stub. fake, spy, mock) did you need for this lab? Why or why not?
    I didn't recognize any type while I made `calculateTotal`. However, in `applyDiscount` and `calculateTax`, there are tests that throw errors in specific conditions, and that are mocks. I didn't need most of other types because this program is simple enought and didn't need any test doubles. 
- What's one thing that wolud have been different if you worte the implementation first?
   If I wrote the implementation first, writing the test cases might be less aculate because I already have an expectation of how my code should work, and there is a chance that I write tests that should let my program pass unitntentionally.  