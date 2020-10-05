"use strict";


//DONE
// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var i = 0
//
// while (i <= 16){
//     console.log(2**i);
//     i++;
// }




// Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

// Get total cones
// Get cones bought by one customer
// Print log message accordingly
// Subtract values to get new total
// Get cones bought by next customer
// Print log message accordingly
// Subtract values to get new total


//THE VERSION BELOW IS THE ONE I AM CURRENTLY WORKING ON, USE THIS ONE!!!!!!!!!!!
//I THINK IT WORKS???

// var totalCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     console.log("There is a total of: " + totalCones + " cones.")
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     if (conesBought < totalCones){
//         console.log(conesBought + " cones sold.");
//         totalCones -= conesBought;
//     } else if (conesBought > totalCones){
//         console.log("I cannot sell you " + conesBought + ", I only have " + totalCones + " left.");
//         totalCones -= conesBought;
//     } else if (conesBought === totalCones){
//         console.log("Yay, I sold the last " + conesBought + "! I can go home now.")
//         break;
//
//     }
//
//
// } while (totalCones > 0);

//INSTRUCTOR SOLUTION

// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do{
//     var conesPurchased = Math.floor(Math.random() * 5) + 1;
//     if(conesPurchased > allCones){
//         var outOfStock = "I can't sell you " + conesPurchased + " , I only have " + allCones
//         console.log(outOfStock);
//     } else {
//         allCones -= conesPurchased;
//         var soldCones = conesPurchased + " cones sold..." + allCones + " cones to go.";
//         console.log(soldCones);
//     }
// }while (allCones > 0);


// // This is how you get a random number between 50 and 100
// var totalCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// var conesBought = Math.floor(Math.random() * 5) + 1;

// var totalCones = Math.floor(Math.random() * 50) + 100;
//
// do {
//     var conesToBuy = Math.floor(Math.random() * 5) + 1;
//     console.log(totalCones - conesToBuy);
//
// } while (totalCones > 0);

// do {
//     var conesToBuy = Math.floor(Math.random() * 5) + 1;
//     var conesLeft = totalCones - conesToBuy
//     if(conesToBuy < totalCones){
//         console.log(conesToBuy + " cones sold.");
//     } else if(conesToBuy > totalCones){
//         console.log("I cannot sell you" + conesBought + "I only have" + totalCones);
//     } else if(totalCones === 0){
//         console.log("Yay, I sold them all!");
//     }
//
// } while (totalCones > 0)




// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones