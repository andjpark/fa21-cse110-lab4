1. Since the 'prices' input given has a length of 3, we know from the for loop that 'i' will be less than 3. However, js increments 'i' at the end
   of the body of the loop. Because of this, once the last loop has completed while 'i' = 2, 'i' will be incremented once more. And because 'i' is a var,
   it can be accessed anywhere in the function.

   3 is logged in the console.
2. Since 'discountedPrice' is constantly updated through each of the 3 iterations of the for loop, after the for loop, the value of 'discountedPrice' 
   will be its most recent value. This is calculated by multiplying 300 by 0.5.

   150 is logged in the console.
3. Since 'finalPrice' is constantly updated through each of the 3 iterations of the for loop, after the for loop, the value of 'finalPrice' 
   will be its most recent value. This is calculated by multiplying 'discountedPrice' (150) by 100, which is already rounded to the nearest integer,
   and then divded by 100.

   150 is logged in the console.
4. The function will return an array with values 50, 100, 150. Since our 'discountedPrice' value in this case is calculated by dividing each price by 2,
   and since our 'finalPrice' calculations keep our 'discountedPrice' the same, we push these values onto the 'discounted' array.

   [50, 100, 150]
5. The code produces an error. Because 'i' is defined as let, it is only accessible within the block scope of the for loop. We are thrown an error
   when trying to access 'i' outside of that scope.

   error
6. The code produces an error. Because 'discountedPrice' is defined as let, it is only accessible within the block scope of the for loop. We are thrown an error
   when trying to access 'discountedPrice' outside of that scope.

   error
7. Since 'finalPrice' is defined as let within the block scope of the function, we are able to access this variable even after the for loop. Similarly to question 3,
   'finalPrice' will hold the value 150.

   150 is logged in the console.
8. The function will return an array with values 50, 100, 150. Since our 'discountedPrice' value in this case is calculated by dividing each price by 2,
   and since our 'finalPrice' calculations keep our 'discountedPrice' the same, we push these values onto the 'discounted' array. The changing from var declarations to 
   let has no effect on our result. 

   [50, 100, 150]
9. The code produces an error. Because 'i' is defined as let, it is only accessible within the block scope of the for loop. We are thrown an error
   when trying to access 'i' outside of that scope.

   error
10. The length of the array inputted argument is printed. Since 'length' is declared as a const, its value cannot be changed.

    3 is logged in the console.
11. The function will return an array with values 50, 100, 150. Since our 'discountedPrice' value in this case is calculated by simply dividing each price by 2,
    we immediately push these values onto the 'discounted' array. 

    [50, 100, 150]

12. 
    A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]
13. 
    A) '32' - adding an integer to a string results in adding the string representation of the integer
    B) '1' - subtracting an integer results in subtracting the string representation of the integer
    C) 3 - the integer representation of null is 0
    D) '3null' - the string representation of null is 'null' which results in concatenation 
    E) 4 - the integer representation of true is 1
    F) 0 - both are converted to integers, integer representation of false is 0 and null is 0
    G) '3undefined' - the string representation of undefined is 'undefined' which results in concatenation
    H) NaN - since we are subtracting, undefined gets converted into an integer, which has a value of Nan. The resulting subtraction results in NaN
14. 
    A) true - the string '2' becomes a number, and the resulting expression is true
    B) false - since both are strings, the comparison is done in lexicographical order
    C) true - the string '2' becomes a number
    D) false - the '===' operator does the comparison without type conversion
    E) false - the value true is converted to the number 1
    F) true - the Boolean conversion of 2 is true
15. The == compares between two objects while performing implicit type conversion. On the other hand, the === operator compares two objects while implicitly
    NOT type converting. 
17. When calling the modifyArray function, we pass in an array with values 1,2,3 and a function doSomething. When we iterate through the for loop,
    we are getting the values in the original array and calling them back to the function doSomething that was passed, which multiplies each value by 2.
    These new multiplied values are pushed onto newArr and returned.

    [2, 4, 6]
19. 1
    4
    3
    2
    