/*  To get you accustomed to writing and calling functions which accept arguments (input values) and return results.
    To get you accustomed to breaking down a problem into the various parts of a FOR loop.
    You will use the return keyword for the output of your function. Unlike other katas we've done up until now, 
        most of these build on each other, which means that you will need to complete them in order.
    Note that anything I say below about functions also applies to methods.
    The answers to most of these katas will look similar. They will typically involve:
        - declaring a variable to keep track of a final result
        - writing a FOR loop to consistently modify the result
        - returning the result
    
*/


//  KATA 01:  Add
/*  Write a function named "add" which takes two arguments (as input variables) and returns their sum.
    You may use built-in operators in order to finish this kata.
    For example, calling add(2, 4) should return a result of 6.
*/

function add(x,y) {
    return x+y
}
console.log('KATA01  ' + add(1,2))
console.log('KATA01  ' + add(8,8))



//  KATA 02:  Multiply
/*  Write a function named "multiply" which takes two arguments (as input variables) and returns their product.
    You may not use built-in math operators or functions (such as the * multiplication operator). 
    Instead, you will use a FOR loop which calls your add function from the first kata.
    For example, calling multiply(6, 4) should return a result of 24, which could be expressed 
    by adding 6 to itself 4 times:   6 + 6 + 6 + 6 = 24
*/
/*  counter will go through 'x' 'y' number of times and add to get final result
    use kata1 to add together add(x,y)
*/

function multiply(x,y) { 
        let total = 0               
    for(let counter = 0; counter < y; counter += 1) {
        total = add(total,x)
    }
    return total
}
console.log('KATA02  ' + multiply(2,5))
console.log('KATA02  ' + multiply(4,8))



// KATA 03: Power/Expo
/* Write a function named "power" which takes two 
arguments ( x and n) and returns the the result of 
raising x to the nth power.
You may not use built-in math operators or functions
 (such as the * multiplication operator), or the ** operator 
 for power/exponentiation). Instead, you will re-use functions 
 you wrote in earlier katas to write this function.
For example, if we called power(2, 8), we should return 256 by 
multiplying 2 by itself 8 times:
2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
And to achieve the correct result for power(3, 4), we would want 
to multiply 3 by itself 4 times:
3 * 3 * 3 * 3 = 81
*/

function power(x,n) {
        let total = 1
    for(let counter = 0; counter < n; counter += 1) {
        total = multiply(total,x)
    }
    return total
}
console.log('KATA03  ' + power(3,3))
console.log('KATA03  ' + power(2,8))



// KATA 04: Factorial
/* Write a function named "factorial" which takes a single argument 
and returns the factorial of that value.
You may not use built-in math operators or functions (such as 
    the * multiplication operator). Instead, you will re-use functions 
    you wrote in earlier katas to write this function.
A factorial multiplies a given number by every number below it. For 
example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:
5 * 4 * 3 * 2 * 1 = 120
For example, calling factorial(4) should return a result of 24.
*/

function factorial(x) {
        let total = x
    for (let counter = 1; counter < x; counter += 1) {
        total = multiply(total,counter)                                                       
                                                           
    }
    return total                                                         
}
console.log('KATA04  ' + factorial(5))
console.log('KATA04  ' + factorial(4))



// BONUS - KATA05: Fibonacci
/* Write a function named "Fibonacci" which takes an 
argument n and returns the nth Fibonacci number.
You may not use built-in math operators or functions (such 
    as the * multiplication operator). Instead, you will use 
    functions you wrote in earlier katas to write this function.
For example, calling fibonacci(8) should return a result of 13. 
The fibonnaci sequence begins:
0  1  1  2  3  5  8  [13]  21
So, the number in brackets is the 8th Fibonacci number.
*/

function fibonacci(n) {
        let a = 0
        let b = 1
    for (let counter = 2; counter < n; counter += 1) {
        let c = a+b
        a = b
        b = c
    }
        return b
}
console.log('BONUS  ' + fibonacci(7))
console.log('BONUS  ' + fibonacci(5))