"use strict";

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

function wait(numOfMillPassedIn){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if (numOfMillPassedIn){
                resolve(numOfMillPassedIn);
            } else {
                reject(numOfMillPassedIn);
            }
        }, numOfMillPassedIn);
    })
}

wait(1000).then((data) => console.log(`You'll see this after ${data/1000} second(s).`));

wait(3000).then((data) => console.log(`You'll see this after ${data/1000} second(s).`));

wait(10000).then((data) => console.log(`You'll see this after ${data/1000} second(s).`));

