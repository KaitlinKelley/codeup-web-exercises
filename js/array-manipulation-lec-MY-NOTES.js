"use strict";
// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb"
// ];

// TODO: given the above array how do we log each element to the console?

/**
 * ===== Concepts to cover:
 *
 * Methods to add/remove elements...
 * .push()
 * .pop()
 * .shift()
 * .unshift()
 *
 * Methods to search an array...
 * .indexOf()
 * .lastIndexOf()
 *
 * Method to return a copied segment of an array...
 * .slice()
 *
 * Method to reverse the order of the array...
 * .reverse()
 *
 *
 * Method to sort the array...
 * .sort()
 *
 * Methods to convert a string to an array and vice versa...
 * .split()
 * .join()
 *
 */

// TODO: throughout the lecture this morning, note which of the above methods mutate (change) an array and which ones do not.

// ============================= Adding and Removing Elements

/*
    // The following array methods change the original array value!
    someArray.shift()   = removes first element
    someArray.unshift() = adds new first element
    someArray.pop()     = removes last element
    someArray.push()    = adds new last element
 */

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb"
// ];

// add element to beginning

// pies.unshift('blueberry'); // returns the new total number of items in the array
// console.log(pies);

// add element to end

// pies.push('chocolate'); // again returns the new total number of items in the array

// remove element from the front of an array

// pies.shift(); // returns the item that it is removing

// remove an element from the end of an array

// pies.pop(); // returns the item that it is removing

// //TODO: remove the last element and add to beginning
//
// var poppedElement = pies.pop();
// pies.unshift(poppedElement);
// console.log(pies);


// ============================= Searching

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb",
//     "key lime"
// ];

// find index of first matching result in array

// pies.indexOf('key lime'); //2

// returns -1 if no matching result

// pies.indexOf('chocolate'); //-1


// find the index of the last occurrence of a matching element in the array

// pies.lastIndexOf("key lime"); //5


// ============================= Slicing

// RETURNS A COPIED SEGMENT OF THE ORIGINAL

/* SYNTAX
   someArray.slice(startingIndex, startingOfIndexNotIncluded);
   // one argument only will return a copy from the starting index to the end of the array
 */
//if only one argument passed, argument will be taken as starting index

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "huckleberry",
//     "rhubarb",
//     "key lime"
// ];

// TODO GROUP: find various combinations of output

// TODO EXERCISE: create a function that takes in an array of pies baked and return the 3 most recently baked pies

// function lastThreePies(array){
//     return array.slice(array.length - 3);
// }
//
// console.log(lastThreePies(pies)); // output is ["huckleberry", "rhubarb", "key lime"]
//




// ============================= Reversing

// var pies = [
//     "apple",
//     "cherry",
//     "key lime",
//     "rhubarb",
//     "huckleberry",
//     "key lime"
// ];
//
// pies.reverse();


// ============================= Sorting

// sort an array in alphabetical order

// pies.sort();
// mutates the original array and returns a copy

// sort in chronological order

// var numbers = [1, 2, 11, 3, 4];
// numbers.sort();
// console.log(numbers); // wat?
//converts numbers into strings, then sorts those!!

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


// ============================= Split / Join

// splitting string into and array

// var names = "Bob Sally Mary";
//
// var namesArr = names.split(" ");
//
// var namesString = namesArr.join("");
//
// console.log(namesString);

// splitting on an empty string

// var everyCharacter = bondsString.split("");

// joining array into a string

// var bondsArray = ["Connery", "Lazenby", "Moore", "Dalton", "Brosnan", "Craig"];
// var bondsString = bondsArray.join("_");


// TODO DEMONSTRATION: Create a function that will take in a formatted string of numbers
//  and return an array of phone numbers without any symbols. Log the output of the returned array.

/* EXAMPLE...
    var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
    cleanPhoneNumbers(phoneNumbers);
    the above code should output the following...
       2105552020
       2305552020
       5125553030
*/

// var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
//
// function cleanPhoneNumbers(phoneNums) {
//     var output = [];
//     //split input on newline character into an array of numbers
//     var phoneNumsArray = phoneNumbers.split("\n");
//     //create an output array of numbers with dashes removed
//     phoneNumsArray.forEach(function(phoneNum)){
//         var phoneNumArr = phoneNum.split("-");
//         // combine into single string without dashes
//         var phoneNumWithoutDashes = phoneNumArr.join("");
//         console.log(phoneNumWithoutDashes);
//         output.push(phoneNumWithoutDashes);
//     }
//     //return output;
//     return output;
//
// }
//
// var cleanNumsArr = cleanPhoneNumbers(phoneNumbers);
//
// for (var i = 0; i < cleanNumsArr.length; i += 1) {
//     console.log(cleanNumsArr[i]);
// }

//HERE IS MY ATTEMPT

/* EXAMPLE...
    var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
    cleanPhoneNumbers(phoneNumbers);
    the above code should output the following...
       2105552020
       2305552020
       5125553030
*/

// var phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';
//
// function cleanPhoneNumbers(stringOfNums){
//     var outputArray = [];
//     var numsArray = stringOfNums.split("\n");
//     //numsArray looks like ["210-555-2020", "230-555-2020", "512-555-3030"] with quotes? without quotes??
//     numsArray.forEach(function(phoneNum){
//         var newNumsArray = phoneNum.split("-");
//         //first iteration will give [210, 555, 2020]
//         var numsStringWithoutDashes = newNumsArray.join("");
//         //first iteration will give "2105552020"
//         console.log(numsStringWithoutDashes);
//         outputArray.push(numsStringWithoutDashes);
//         //add each clean phone number to the outputArray
//     })
//     return outputArray;
// }
//
// cleanPhoneNumbers(phoneNumbers);













// ============================= (EXTRA INFO) Splicing Elements

/*
    someArray.splice(param1, param2, param3...);
    param1 = which index to start from
    param2 = how many elements to remove
    param3 = from this parameter and onward, arguments passed in will be added as new elements at the end of the array
 */

//
// // create new test array
//     var bonds = ["Craig", "Brosnan", "Dalton", "Moore", "Connery"];
//
//
// // removing elements splice
//     var missingBonds = bonds.splice(bonds.indexOf("Moore"), 2);
//     console.log(bonds);
//     console.log(missingBonds);
//
//
// // adding elements with splice
//     bonds.splice(1, 0, "Lazenby");
//     console.log(bonds);
//
//
// // replace elements
//     bonds.splice(bonds.indexOf("Craig"), 1, "Elba");
//     console.log(bonds);