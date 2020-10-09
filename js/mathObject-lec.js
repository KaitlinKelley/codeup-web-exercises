"use strict";

//Math.random()==============================================
// var mathComputations = new Math();   //Don't do this!!!
var randomNum = Math.random();   //will generate random numbers between 0 and 1, non-inclusive
var biggerRandomNum = Math.random()*10  //will generate random numbers between 0 and 10, non-inclusive
var evenBiggerRandomNum = Math.random()*100  //will generate random numbers between 0 and 100, non-inclusive
var anotherRanNum = Math.random()*2
console.log(randomNum);
console.log(biggerRandomNum);
console.log(evenBiggerRandomNum);

//want a number between 2000 and 3000
var randSelect = Math.random() * 2000 + 2000
//min is 0 + 2000 = 2000
//max would be 2000 + 1000 = 3000
//numberWithinARange = (Math.random() * (MAX - MIN)) + MIN

//EXERCISE
//Write a function to find a random whole number within a range of 2 numbers (min and max)
//Min and max should be passed into the function as parameters

function findRandom(min, max){
    return Math.round((Math.random() * (max - min)) + min);
}

console.log("A random number between 10 and 20: " + findRandom(10,20));


//Math.round()============================
//Will round to nearest integer
console.log(Math.round(anotherRanNum));

//Math.floor()===========================
//Will always round down!
var index = Math.floor(biggerRandomNum);
console.log(index);

//Math.ceil()=============================
//Will always round up!
// .00000001 ==> 1,
// 3.000000001 ==> 4
var anotherIndex = Math.ceil(evenBiggerRandomNum);
console.log(anotherIndex);

//create a new situation where we'll be adding a constant to our random number
//say we wanted a random number between 74 and 186, including 186
var numBetween = Math.ceil(Math.random()*74) + 112;
// we could do the exact same thing by flipping the numbers and get a more exact result
//the example below is better!!!
//will not include 74
var otherNumBetween = Math.ceil(Math.random() * 112) + 74;
console.log(numBetween);
console.log(otherNumBetween);

//BEST ONE
//Will generate a number between 74 and 186, and will include both bounds
var anotherNumBetween = Math.floor(Math.random()*113) + 74;



//Math.pow()===========================================
//This is used to raise one number to the power of another number
console.log(Math.pow(4, 2));   //==> 4^2 = 16
console.log(Math.pow(8, 3)); //8^3 = 512

//What is another way to find 8^x power?? (hint: use a loop)
var base = 8;
var exponent = 6;
var result = base;
for(var i = 1; i<exponent; i++){
    //8, 8*8, 8*8*8, 8*8*8*8
    result = result * base;  //when i=0, result = 8*base(8)
                                //when i=1, result = 64*base(8)
                                //when i=2, result = 512*base(8)
}

console.log(base + " to the " + exponent + " power = " + result);



//Math.sqrt()============================================
console.log("the square root of 16 = " + Math.sqrt(16.));

//====================Constants==========================================================

//Math.PI================
//Pi is used to calculate circle stuff
//Circumference = 2*pi*r = pi*d
//Area = pi*r^2
//alt/option + p = π
//alt/option + shift + 8 = °
//Let's find the circumference and area of a circle with a diameter of 5
var circumference = Math.PI*5;
var area = Math.PI*Math.pow(2.5, 2);

console.log("The circumference is: " + circumference.toFixed(3));
console.log("The area is: " + area.toFixed(3));




//Math.E================
//Euler's constant
//approx 2.718

console.log(Math.E);

//if we want to write scientific notation
//4.58 * e^9
console.log(4.58*(Math.pow(Math.E, 9)));
//4.58 * 10^9
console.log(4.58*(Math.pow(10,9)));








