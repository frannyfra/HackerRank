// Objective

// In this challenge, we practice using arrow functions. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, nums. It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

// Input Format

// The first line contains an integer, n, denoting the size of nums .
// The second line contains  space-separated integers describing the respective elements of nums .

// Output Format
// Return the modified array where every even element is doubled and every odd element is tripled.

// Sample Input 0
// 5
// 1 2 3 4 5

// Sample Output 0
// 3 4 9 8 15

// Explanation 0
// Given numns = [1,2,3,4,5], we modify each element so that all even elements are multiplied by 2 and all odd elements are multipled by 3. In other words, [1,2,3,4,5] => [ 1*3 , 2*2 , 3*3 , 4*2, 5*3] => [3,4,9,8,15]. We then return the modified array as our answer.


/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = (numbers) => {
    return numbers.map(number => {
    if(number % 2 === 0) return number * 2;
    else return number * 3;
  });
}