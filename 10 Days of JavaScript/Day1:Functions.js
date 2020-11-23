// Objective

// Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

// Task
// Implement a function named factorial that has one parameter: an integer,n . It must return the value of n! (i.e., n factorial).

// Input Format
// Locked stub code in the editor reads a single integer, n , from stdin and passes it to a function named factorial.

// Output Format
// The function must return the value of n! .

// Sample Input 0
// 4

// Sample Output 0
// 24

// Explanation 0
// We return the value of 4! = 4 x 3 x 2 x 1 = 24.


//solution with for loop:

const resolveFactorial =  n => {
    for ( let i = n-1; i >= 1; i--){
        n = n * i;
    }
    return n;
}

//explanation :
//number of iteration            n            i = n - 1         i--(next)       n * i              n
//1st iteration                  5            i = 5 - 1 (4)     3               5 * 4 = 20         20
//2nd it                         4            i = 4 - 1 (3)     2               20 * 3 = 60        60
//3rd it                         3            i = 3 - 1 (2)     1               60 * 2 = 120       120
//4th it                         2            i = 2 - 1 (1)     0               120 * 1 = 120      120
//5th                            1            i = 1 - 1 (0)     --> we do not procedee as the condition states i needs to be big or equal to one;

//solution with while loop:
const factorial = (n) => {
    let result = n;

    while( n > 1) {
        n--;
        result = result * n;
    }
}

//number of iterations:        n           result            n             result
//1st iteration                5             5(n)            5-1 (n--)        5 * 4 = 20;
//2nd iteration                4             20              4-1              20 * 3 = 60;
//3rd iteration                3             60              3-1              60 * 2 = 120;
//4th iteration                2             120             2-1              120 * 1 = 120;
//5th iteration                1             120             1-1 = 0 -> there is no foth iteration because the loop will run till n is bigger than 1; in the last case n = 0, so it does not meet the condition.

//solution with recursion :

const factorialize = num => {
if (num < 0) return -1;
else if (num == 0) return 1;
else  return num * factorialize(num-1);
}


//explanation:
//First Part of the recursion method
//         You need to remember that you won’t have just one call, you’ll have several nested calls
        
//         Each call: num === "?"        	         num * factorialize(num - 1)
//         1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
//         2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
//         3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
//         4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
//         5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0) --> will return 1
        
//         Second part of the recursion method
//         The method hits the if condition, it returns 1 which num will multiply itself with
//         The function will exit with the total value
        
//         5th call will return (5 * (5 - 1))     // num = 5 * 4 = 20
//         4th call will return (20 * (4 - 1))    // num = 20 * 3 = 60
//         3rd call will return (60 * (3 - 1))    // num = 60 * 2 = 120
//         2nd call will return (120 * (2 - 1))   // num = 120 * 1 = 120
//         1st call will return (120)             // num = 120
        
//         If we sum up all the calls in one line, we have
//         (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120

