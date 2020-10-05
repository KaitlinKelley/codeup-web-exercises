// "use strict";
//


//DONE
// 1. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
//
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49


//USING A WHILE LOOP AND A BREAK STATEMENT
// var numberToSkip = parseInt(prompt("Please enter an odd number between 1 and 50."));
// while((numberToSkip % 2 === 0) || (numberToSkip < 1) || (numberToSkip >= 50)){
//     var numberToSkip = parseInt(prompt("Please enter an odd number between 1 and 50."));
//     if ((numberToSkip % 2 !== 0) && (numberToSkip >= 1) || (numberToSkip <= 50)){
//         break;
//     }
// }

//USING A DO-WHILE LOOP AND A BREAK STATEMENT
// do{
//     var numberToSkip = Number(prompt("Please enter an odd number between 1 and 50"));
//     if(numberToSkip < 1 || numberToSkip > 50){
//         alert("Number is invalid, please try again.");
//     } else if (numberToSkip %2 === 0){
//         alert("That number is even, please try again.");
//     } else if (isNaN(numberToSkip)){
//         alert("That is not a number, please try again.");
//     } else {
//         alert("Number is valid! Thank you!");
//         break;
//     }
// }while(true);


//USING A DO-WHILE LOOP
// do {
//     var numberToSkip = parseInt(prompt("Please enter an odd number between 1 and 50."));
//
// } while((numberToSkip % 2 === 0) || (numberToSkip < 1) || (numberToSkip >= 50));
//
//
//
//

//FOR LOOP FOR CONSOLE LOGGING THE SECOND PART, USE WITH ALL ABOVE EXAMPLES
// for (var i = 0; i < 50; i++){
//     if (i %2 === 0){
//         continue;
//     } else if ( i === numberToSkip){
//         console.log("Yikes! Skipping number: " + i)
//         continue;
//     } else if (i % 2 !== 0){
//         console.log("Here is an odd number: " + i)
//         continue;
//
//     }
// }
