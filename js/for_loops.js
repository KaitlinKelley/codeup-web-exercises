"use strict";
//DONE
// 1. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


// function showMultiplicationTable(num){
//     for (var i = 1; i <= 10; i++){
//             var result = (i*num);
//         console.log(num + " x " + i + " = " + result);
//     }
// }
//
//DON'T FORGET TO CALL THE FUNCTION. DUH.
// showMultiplicationTable(7);


//DONE
// 2. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

// //This expression will generate a random number between 20 and 200
// Math.floor(Math.random() * 200) + 20;
//
// for (var i = 1; i <= 10; i++){
//     var randomNum = Math.floor(Math.random() * 180) + 20;    //20 is the starting point, between 2 and 200 are 180 possibilities
//     if (randomNum % 2 === 0){
//         console.log(randomNum + " is an even number.")
//     } else if (randomNum % 2 !== 0){
//         console.log(randomNum + " is an odd number.")
//     }
//
// }


//
//
//DONE
// 3. Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for (var i = 1; i <= 9; i++){
//     console.log((i.toString()).repeat(i));
// }

//USING A NESTED LOOP, CAREFUL IT NEEDS FIXING

// for(var outerLoop = 1; outerLoop <= 9; outerLoop++){
//     var output = "";
//
//     for(var innerLoop = 1; innerLoop <= outerLoop; innerLoop++){
//         output += output;
//     }
//     console.log(output);
// }



//DONE
// 4. Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5


// for (var i = 100; i >= 5; i-=5){
//     console.log(i);
// }