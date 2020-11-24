// Objective
// In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

// Task
// Complete the getGrade(score) function in the editor. It has one parameter: an integer, score , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  grade according to the following rules:

// 1. 25 > score <= 30  grade = "A";
// 2. 20 > score <= 25 grade = "B";
// 3. 15 > score <= 20 grade = "C"; 
// 4. 10 > score <= 15 grade = "D";
// 5.  5 > score <= 10 grade = "E";
// 6.  0 > score <=  5 grade = "F"


// Input Format
// Stub code in the editor reads a single integer denoting  from stdin and passes it to the function.

// Output Format
// The function must return the value of grade (i.e., the letter grade) that Julia earned on the exam.

// Sample Input 0
// 11

// Sample Output 0
// D

// Explanation 0
// Because score = 11 , it satisfies the condition score > 10 && score <= 15 (which corresponds to D). Thus, we return D as our answer.


const getGrade = (score) => {
    let grade;
    // Write your code here
    if(score > 25 && score <= 30 ) grade = "A";
    else if(score > 20 && score <= 25 ) grade = "B";
    else if(score > 15 && score <= 20 ) grade = "C"; 
    else if(score > 10 && score <= 15 ) grade = "D" ;
    else if(score > 5 && score <= 10 ) grade = "E";
    else grade = "F"
    return grade;
}
