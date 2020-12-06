// Objective
// In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.

// Task
// Given a date string, dateString, in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.

// Input Format
// Locked stub code in the editor reads the following input from stdin:
// The first line contains an integer, d, denoting the number of dates to check.
// Each line i  of the d subsequent lines contains a date in MM/DD/YYYY format; each date denotes some dateString that is passed to the function.


// Output Format
// The function must return a string denoting the day of the week corresponding to the date denoted by dateString.

// Sample Input 0
// 2
// 10/11/2009
// 11/10/2010

// Sample Output 0
// Sunday
// Wednesday

// Explanation 0
// The function is called for the following d=2 dates:
// The date 10/11/2009 was a Sunday, so we return Sunday.
// The date 11/10/2010 was a Wednesday, so we return Wednesday.

// Solution accepted by HackeRank

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const getDayName = (date) =>  daysOfTheWeek[new Date(date).getDay()];

//I believe the follow solution ( even if it does not pass the tests) is a better implementation.
//The first solution, use the method new Date(), passing a date string as an argument, but this practice is not reccomended:
//plese follow this link to learn more: https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/

//Below there is a function that converts the date string into single arguments and pass them onto the new Date() method, which is the reccomended practice;
//note: the second solution would not pass the tests in HackeRank

