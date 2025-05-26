// js-assignment-15 
// // 88888888888888888888888888888888888888888888888888888888888888888888888888888888
// ques 1 
// Given the array:
// ["Red", "Green", "Blue"]
// Add "Yellow" and "Purple" between "Green" and "Blue".
// ans 
// var color = ["Red", "Green", "Blue"];
// color.splice(2,0,"yellow","Purple");
// console.log(color);
// var lent = color.length
// console.log(lent);
// *********************************************************************************************
// ques no 2 
// Given:
// [10, 20, 30, 40, 50]
// Remove the number 30 from the array.
// ans 
// var num = [10,20,30,40,50];
// var rem = num.splice(2,1);
// console.log(num);
// console.log(rem);
// **********************************************************************************
// ques no 3
// Given:
// [1, 2, 3, 4, 5]
// Replace 3 and 4 with 99 and 100.
// ans 
// var num = [1,2,3,4,5];
// var firstNumber = num[0];
// var secondNumber = num[1];
// var thirdNumber = num[2];
// var fourthNumber = num[3];
// var fifthNumber = num[4];
// thirdNumber = 99;
// fourthNumber = 100;
// var newArray = [fifthNumber,secondNumber,thirdNumber,fourthNumber,fifthNumber,];
// console.log(newArray);
// *************************************************************************************
// ques no 4
// Given this array:
// ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// Remove all days except "Mon" and "Fri".
// ans 
// var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// var firs = days.splice(1,3);
// console.log(days);
// var sec = days.splice(2);
// console.log(days);
// console.log(sec);
// console.log(firs)
// *********************************************************************************
// ques no 5 
// Start with an empty array [].
// Add "Apple", "Banana", and "Mango" at the beginning of the array.
// ans 
// var array = [];
// var n     = array.splice(0,0,'Apple','Banana','Mango');
// console.log(array);
// ******************************************************************************
// ques no 6 
// Given the array:
// ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// Get only the weekdays (Monday to Friday) in a new array.
// ans 
// var days =  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var get  = days.slice(1,6);
// console.log(get);
// ******************************************************************************
// quest no 7
// From this array:
// [1, 2, 3, 4, 5]
// Make a copy of the entire array.
// var array = [1,2,3,4,5];
// var newCopy = array.splice(0);
// console.log(newCopy);
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ques no 8 
// Given:
// [10, 20, 30, 40, 50]
// Extract the last two numbers into a new array.
// var array = [10, 20, 30, 40, 50];
// var newArray = array.slice(3);
// console.log(newArray);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ques no 9 
// From the array:
// ["HTML", "CSS", "JavaScript", "React"]
// Create a new array that excludes only the first element.
// ans 
// var array = ["HTML", "CSS", "JavaScript", "React"];
// array.splice(1,3);
// console.log(array);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ques no 10
// From:
// ["A", "B", "C", "D", "E", "F"]
// Create a new array that contains only "C", "D", and "E".
//  var alphabets = ["A", "B", "C", "D", "E", "F"];
//  var newArray = alphabets.slice(2,5);
//  console.log(newArray)
// """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// ques no 11
// Question 1: Grading System
// Write a JavaScript program that takes a student's 
// percentage as input (using prompt) and displays the
//  grade using alert:

// >= 90: Grade A+

// >= 80: Grade A

// >= 70: Grade B

// >= 60: Grade C

// < 60: Fail

// Use nested if-else statements.
// var enterPercentage = prompt('Enter your percentage like 20,50,90 etc');
// if(enterPercentage >= 90){console.log('You got A+ Grade')}
// else if (enterPercentage >= 80){console.log('You got A Grade')}
// else if(enterPercentage >= 70){console.log('You got B Grade')}
// else if(enterPercentage >= 60){console.log('You got C Grade')}
// else if (enterPercentage < 60 ){console.log('You are failed')
// }
// else{console.log('Invalid entery')}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// quest no 12
// Question 2: Even, Odd, and Special Check
// Ask the user to enter a number.

// If the number is even:

// Check if it is divisible by 4

// If yes, show: “Even and divisible by 4”

// Else: “Even but not divisible by 4”

// If the number is odd:

// Check if it is greater than 100

// If yes, show: “Odd and greater than 100”

// Else: “Odd and not greater than 100”
// ans 
// var num = +prompt('Enter a number');
// var checkEven = num % 2;
// // first check even or odd 
// if (checkEven === 0 ){var divis = num % 4;
//     if(divis === 0){console.log('Even and divisible by 4')}
//     else{console.log('Even but not divisible by 4')}
    
// }

// else{if( num > 100){console.log('Odd and greater than 100')}
// else{console.log('Odd and not greater than 100')}}
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// quest no 13
// Question 3: Simple ATM
// Create a program that asks for a 4-digit PIN and current balance using prompt.

// If the entered PIN is correct (e.g., 1234):

// Ask the user how much they want to withdraw

// If the amount is less than or equal to the balance:

// Show the new balance

// Else:

// Show “Insufficient balance”

// Else:

// Show “Incorrect PIN”