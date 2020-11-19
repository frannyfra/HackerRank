// Objective

// In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.

// Task

// Complete the function in the editor. It has one parameter: an array, a , of objects. Each object in the array has two integer properties denoted by x and y . The function must return a count of all such objects o in array a that satisfy o.x == o.y .

// Input Format

// The first line contains an integer denoting n .
// Each of the n subsequent lines contains two space-separated integers describing the values of x and y.

// Output Format

// Return a count of the total number of objects o such that o.x == o.y . Locked stub code in the editor prints the returned value to STDOUT.

// Sample Input 0
// 5
// 1 1
// 2 3
// 3 3
// 3 4
// 4 5


// Sample Output 0
// 2

// Explanation 0
// There are n =5 objects in the objects array:
// objects0 = {x:1,y:1}
// objects1 = {x:2,y:3}
// objects2 = {x:3,y:3}
// objects4 = {x:3,y:4}
// objects5 = {x:4,y:5}

// Because we have two objects o that satisfy o.x == o.y (i.e., objects2 and objects0 ), we return 2 as our answer.

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
const getCount = (arr) => {
    let counter = 0;
    arr.forEach(singleObj => {
        if (singleObj.x === singleObj.y) counter++;
        else null;
    })
    return counter;
}
