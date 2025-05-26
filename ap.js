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
// ans 
// var enterPin = +prompt('Enter your 4 digit PIN');

// var PIN = 8767;
// var balance = 800;
// if(enterPin === PIN){var withdraw = prompt('How much he want to withdraw')
//     if(withdraw < balance || withdraw === balance){var newBalance = balance - withdraw;
//         console.log(newBalance)
//     }
//     else{console.log('Insufficient Balance')}
// }
// else{console.log('Invalid Pin')}
// *********************************************************************************************
// quest no 14
// Question 4: Leap Year Checker
// Write a program to input a year and check if it's a leap year using nested if:

// A year is a leap year if:

// It is divisible by 4

// ans 
// var enter_year = +prompt('Eter year');
// var leap = enter_year % 4;
// if(leap === 0){console.log(enter_year + ' is a leap year')}
// else{console.log(enter_year + ' is not a leap year')};
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ques no 15
// Question 5: Age and Nationality Checker
// Take a user's age and nationality as input.
// If age is 18 or above:
// If nationality is "Pakistani":
// Print "Eligible to vote"
// Else:
// Print "Not eligible due to nationality"
// Else:
// Print "Not eligible due to age"

// ans 
// var age = prompt('Enter your age');
// var nationality = prompt('Enter your nationality');
// if(age >= 18){if(nationality === 'Pakistani'){console.log('You are eligible for vote')}
// else{console.log('Not eligible due to not have pakistani nationality')}}
// else{console.log('Not eligible due to less age')}
// """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// ques no 16 
// Question 2: Number Classification
// Write a program that takes an integer and checks:

// If it's positive, check if it's even or odd

// If it's negative, print "Negative number"

// If it's zero, print "Zero"

// Use nested if inside the main check for positive.
// ans 
// var integer = +prompt('Enter an integer');
// if(integer > 0){var even = integer % 2;
//     if (even === 0){console.log('Integer is even')}
//     else{console.log('integer is odd')}
// }
// else if (integer < 0 ){console.log(integer)}
// else if (integer === 0){console.log(integer)}
// else{console.log('Invalid entry')}
// -------------------------------------------------------------------------------------
// question no 17 
// Question 3: Password Checker
// Ask the user to enter a username and password.

// If username is "admin", then check if the password is "1234".

// If both are correct, print "Login successful".

// If the password is wrong, print "Incorrect password".

// If the username is wrong, print "Unknown user".
// ans 
// var user_name = prompt('Enter user name in ');
// if(user_name === 'aziz'){var password = +prompt('Enter your password')
//     if (password === 876){console.log('Login Successful')}
//     else{console.log('password is wrong')}
// }
// else{console.log('unknown user')}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// quest no 17 
// Question 5: Largest of Three Numbers
// Write a program that takes three numbers and prints the largest among them 
// using nested if statements only (no Math.max() or similar).
// ans 
// var firstNumber = prompt('enter first number');
// var secondNumber = prompt('enter second number');
// var thirdNumber = prompt('enter third number');
// if (firstNumber > secondNumber && firstNumber > thirdNumber){console.log('first number is greater than')}
// else if (secondNumber > firstNumber && secondNumber >thirdNumber ){console.log('Second number is greatert than')}
// else{console.log('Third number is greater than all')}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// quest no 18 
// You are given an array of numbers. Reverse the array without using loops or the reverse() method.
// let numbers = [10, 20, 30, 40, 50];
// var array = [10,20,30,40,50];
// array.reverse();
// console.log(array);
// """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// ques no 19
// 🔹 Question:
// You are given the following array of colors:

// let colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];
// Your task is to use only the splice() method to transform this array into the following:

// ["green", "blue", "black", "purple", "pink"]
// ans 
// let colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];
// colors.splice(0,1);
// console.log(colors);
// colors.splice(2,1);
// console.log(colors);
// var ind = colors.indexOf("orange");
// console.log(ind);
// colors.splice(3,1);
// console.log(colors);
// colors.splice(2,0,"black");
// console.log(colors);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ques no 20
// You are given this array:
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// Your task:
// Using only the splice() method, rearrange the array to this:
// ["banana", "cherry", "fig", "apple"]
// ans 
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// fruits.splice(0,1);
// fruits.pop();
// fruits.pop();
// fruits.splice(2,0,"fig","apple");
// console.log(fruits);
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ques no 21
// You are given this array of numbers:
// let nums = [100, 200, 300, 400, 500, 600];
// Your task:
// Using only splice(), transform it into:
// [100, 250, 300, 350, 600]
// ✅ Requirements:
// Replace 200 with 250
// Insert 350 after 300
// Remove 400 and 500
// ans 
// let nums = [100, 200, 300, 400, 500, 600];
// // nums[1] = 250;
// nums.splice(1,1,250)
// console.log(nums);
// nums.splice(3,0,350);
// console.log(nums);
// var ind = nums.indexOf(400);
// console.log(ind);
// nums.splice(4,2);
// console.log(nums);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ques no 22
// 🔹 Challenging Array Problem: Custom Rearrangement
// You are given an array of mixed items:
// let items = ["pen", "pencil", "eraser", "scale", "marker", "sharpener"];
// Your task is to transform this array into the following:
// ["marker", "scale", "pen", "pencil"]
// var items = ["pen", "pencil", "eraser", "scale", "marker", "sharpener"];
// items.pop();
// items.splice(2,1);
// console.log(items);
// items.reverse();
// console.log(items);
// items.pop();
// console.log(items);
// items.splice(2,0,"pen");
// console.log(items);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ques no 23
// 🔸 Problem 1: Rebuild the Array
// let tech = ["mouse", "keyboard", "monitor", "CPU", "printer", "webcam"];
// Transform it into:
// ["monitor", "keyboard", "CPU", "tablet"]
// let tech = ["mouse", "keyboard", "monitor", "CPU", "printer", "webcam"];
// tech.splice(4,2);
// tech.splice(0,1);
// console.log(tech);
// tech.splice(0,0,"monitor");
// console.log(tech);
// tech.splice(2,1);
// console.log(tech);
// tech.push("tablet");
// console.log(tech);
// **********************************************************************************
// ques no 24
// 🔸 Problem 3: Trim and Replace
// let clothes = ["shirt", "pants", "jacket", "tie", "hat", "belt"];
// Make it:
// ["shirt", "pants", "hoodie", "cap"]
// ✅ Rules:
// Replace "jacket" with "hoodie"
// Remove "tie", "hat", and "belt"
// Insert "cap" at the end
// ans 
// let clothes = ["shirt", "pants", "jacket", "tie", "hat", "belt"];
// clothes[2] = "hoodie";
// clothes.splice(3);
// clothes.push("cap");
// console.log(clothes);
// ********************************************************************************
// ques 25
// 🔹 Problem: Grading System with Conditions
// You are building a grading system. You have a student's marks in three subjects:

// let math = 85;
// let science = 92;
// let english = 78;
// ✅ Your task:
// Write a program using nested if statements only to:

// Calculate the average marks.

// Then, based on the average:

// If average ≥ 90 → grade = "A+"

// Else if average ≥ 80 → grade = "A"

// Else if average ≥ 70 → grade = "B"

// Else if average ≥ 60 → grade = "C"

// Else → grade = "Fail"

// Additionally:

// 📌 Restrictions:

// ❌ No loops allowed.

// ❌ No array methods.

// ✅ Use only if, else, nested if, math, and variables.

// ans 
// let math = 85;
//  let science = 92;
//  let english = 78;
//  var math = +prompt('enter math obtained marks');
//  var science = +prompt('enter science obtained marks');
//  var english = +prompt('enter english obtained marks');
//  var average = (math + science + english) / 3;
//  if (average >= 90){console.log('Grade A+')}
//  else if (average >= 80){console.log('Grade A')}
//  else if (average >= 70){console.log('Grade B')}
//  else if (average >= 60){console.log('Grade C')}
//  else{console.log('Fail')}