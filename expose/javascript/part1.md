1. 20
2. 20
3. 20
4. The code returns an error at line 13 because 'result' is only defined in the block scope of the if statement, while we are trying to 
   access it from the block scope of the else statement.
5. The code returns an error at line 9 because 'result' is assigned as a const, meaning it's value cannot be changed in line 7. 
   Trying to do so results in the error given. 
6. Although this line is never reached due to the error thrown at line 7, this line would also result in an error message for 
   the same reason as in question 5. 
