"use strict";

console.log("Warmups");
console.log("Hello, Foster!");
console.log("Hello, Nimoy!");
console.log("Hello, Stanzi!");
console.log("Hello, Jon Snow!");
console.log("Hello, Frodo!");

function sayHello(name){
    console.log("Hello, " + name);
}

sayHello("Kaitlin");
//calling the function


// function charMatchCase(string){
//     if (string === string.toLowerCase()){
//         return true;
//     } else if (string === string.toUpperCase()){
//         return true;
//     } else {
//         return false;
//     }
// }

//OR------

function charMatchCase(string){
    return (string === string.toLowerCase() || string === string.toUpperCase());
}

console.log (charMatchCase("hello world"));
console.log (charMatchCase("HELLO WORLD"));
console.log (charMatchCase("heLLo WoRld"));


function makeArray(string){
    return string.split(" ");
}

console.log(makeArray("Trick or Treat"));


