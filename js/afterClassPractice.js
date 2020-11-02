"use strict";

function floydTriangle(){
    var rowCount = 1;
    for(var i = 1; i<=4; i++){
        var output = "";
        for(var j = 1; j<=i; j++){
            output += rowCount + " ";
            rowCount++;
        }
        console.log(output)
    }
}

floydTriangle();


// function isValidNesting(input){
//     var straightCount = 0;
//     var curlyCount = 0;
//     var parenCount = 0;
//     var inputAsArray = input.split("");
//     inputAsArray.forEach(function(item){
//         if(item === "["){
//             straightCount += 1;
//         } else if (item === "]"){
//             straightCount -= 1;
//         } else if (item === "("){
//
//         }
//
//
//
//         else if (item === "(" || item === ")"){
//             parenCount += 1;
//         } else if (item === "{" || item === "}"){
//             curlyCount += 1;
//         }
//
//     })
// }

function isValidNestingBrance(stringToCheck){
    var straightCount = 0;
    var curlyCount = 0;
    var parenCount = 0;

    for(var i = 0; i <stringToCheck.length; i++){
        var currentChar = stringToCheck.charAt(i);
        switch(currentChar){
            case "(":
                parenCount++
                break;
            case ")":
                parenCount--
                break;
            case "{":
                curlyCount++
                break;
            case "}":
                curlyCount--
                break;
            case "[":
                straightCount++
                break;
            case "]":
                straightCount--
                break;
        }
    }
    return straightCount + curlyCount + parenCount === 0;
}

console.log(isValidNestingBrance("Bl[aaa]ahBl{aaa}hBl(aaa)h"));