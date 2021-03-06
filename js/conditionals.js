(function() {

    "use strict";

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined below, if the color passed is not
     * one of the ones defined below, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    // function analyzeColor(colorInput){
    //     if (colorInput === "blue"){
    //         return "Blue is the color of the sky";
    //     } else if (colorInput === "red"){
    //         return "Strawberries are red";
    //     } else if (colorInput === "cyan"){
    //         return "I don't know anything about cyan";
    //     } else if (colorInput === "orange"){
    //         return "Orange are...orange."
    //     } else if (colorInput === "yellow"){
    //         return "Daisies are yellow";
    //     } else if (colorInput === "green"){
    //         return "Shamrocks are green";
    //     } else if (colorInput === "indigo"){
    //         return "I don't know much about indigo";
    //     } else if (colorInput === "violet"){
    //         return "Plums are violet";
    //     } else {
    //         return "Sorry,thats all the colors I know"
    //     }
    // }
    //
    // console.log(analyzeColor("blue"));
    // console.log(analyzeColor("red"));
    // console.log(analyzeColor("cyan"));
    // console.log(analyzeColor("yellow"));
    // console.log(analyzeColor("vermillion"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     var randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message every time you refresh the page
     */

    // console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    // var userColor = (prompt("Please type in a color.")).toLowerCase();
    // function analyzeColor(colorInput){
    //     switch(colorInput){
    //         case ("red"):
    //             return "Strawberries are red."
    //             break;
    //         case ("orange"):
    //             return "Oranges are orange."
    //             break;
    //         case ("yellow"):
    //             return "Daisies are yellow."
    //             break;
    //         case ("green"):
    //             return "Shamrocks are green."
    //             break;
    //         case ("blue"):
    //             return "The sky is blue."
    //             break;
    //         case ("indigo"):
    //             return "What even is indigo??"
    //             break;
    //         case ("violet"):
    //             return "Plums are violet."
    //             break;
    //         default:
    //             return "....I don't know anything about that color."
    //             break;
    //     }
    // }
    //
    // alert(analyzeColor(userColor));


    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    //See above!

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */


    // function calculateTotal(luckyNum, totalAmount){
    //     if(luckyNum === 0){
    //         return (totalAmount - (0*totalAmount)).toFixed(2);
    //     } else if(luckyNum === 1){
    //         return (totalAmount - (.10*totalAmount)).toFixed(2);
    //     } else if(luckyNumb === 2){
    //         return (totalAmount - (.25*totalAmount)).toFixed(2);
    //     } else if(luckyNum === 3){
    //         return (totalAmount - (.35*totalAmount)).toFixed(2);
    //     } else if(luckyNum === 4){
    //         return (totalAmount - (.5*totalAmount)).toFixed(2);
    //     } else if(luckyNum === 5){
    //         return (totalAmount - (1*totalAmount)).toFixed(2);
    //     }
    // }
    //
    // console.log(calculateTotal(1, 100));//expect 90.00
    // console.log(calculateTotal(2, 20));//expect 15.00
    // console.log(calculateTotal(5, 500));//expect 0.00
    // //can also do just one return statement at the end, and reassign the variable with each if/else statement, assuming you assigned a discountedTotal variable at the beginning.????


    // //Stuff rewritted as a switch statement
    // function calculateTotal(luckyNum, totalAmount){
    //     var discountedPrice;
    //     switch (lucklyNum){
    //         case 0:
    //             discountedPrice = totalAmount;
    //             break;
    //         case 1:
    //             discountedPrice = totalAmount - (totalAmount * .10);
    //             break;
    //         case 2:
    //             discountedPrice = totalAmount - (totalAmount * .25);
    //             break;
    //         case 3:
    //             discountedPrice = totalAmount - (totalAmount * .35);
    //             break;
    //         case 4:
    //             discountedPrice = totalAmount - (totalAmount * .50);
    //             break;
    //         case 5:
    //             discountedPrice = totalAmount - (totalAmount * 1);
    //             break;
    //         default:
    //             discountedPrice = 0;
    //             break;
    //     }
    //
    //     return discountedPrice;
    // }
    //
    //     console.log(calculateTotal(3, 300));

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalAmount = (Number(prompt("What is your total bill?"))).toFixed(2);
//
//     function calculateTotal(num, dollarAmount){
//         if(luckyNumber === 0){
//             return (totalAmount - (0*totalAmount)).toFixed(2);
//         } else if(luckyNumber === 1){
//             return (totalAmount - (.10*totalAmount)).toFixed(2);
//         } else if(luckyNumber === 2){
//             return (totalAmount - (.25*totalAmount)).toFixed(2);
//         } else if(luckyNumber === 3){
//             return (totalAmount - (.35*totalAmount)).toFixed(2);
//         } else if(luckyNumber === 4){
//             return (totalAmount - (.5*totalAmount)).toFixed(2);
//         } else if(luckyNumber === 5){
//             return (totalAmount - (1*totalAmount)).toFixed(2);
//         }
//     }
//
//     var brandNewTotal = calculateTotal(luckyNumber, totalAmount);
//     alert("Your lucky number was: " + luckyNumber);
//     alert("Your price before the discount was: $" + totalAmount);
//     alert("Your new price is: $" + brandNewTotal);

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * if what the user enters is not a number, use an alert to tell them that, and
     * do *not* display any of the above information.
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    //     // First Attempt Here, OH MY GOD IT WORKS HOLY BLEEP

    var wantToEnterNumber = confirm("Would you like to enter a number?");

    if (wantToEnterNumber) {
        var userInput = Number(prompt("Please enter a number."));
        if (isNaN(userInput)){
            alert("That is not a valid number.");
        } else {
            isOdd(userInput);
            plus100(userInput);
            negOrPos(userInput);
        }
    } else {
        alert("Aw, you're no fun.");
    }




    function isOdd(num){
        if (userInput % 2 === 0){
            alert(userInput + " is an even number.");
        } else if (userInput % 2 !== 0){
            alert(userInput + " is an odd number.");
        } else {
            console.log("Something weird happened with isOdd")
        }
    }


    function plus100(num){
        alert(userInput + " + 100 is: " + (userInput + 100));
    }


    function negOrPos(num){
        if (userInput > 0){
            alert(userInput + " is a positive number.");
        } else if (userInput < 0){
            alert(userInput + " is a negative number.");
        } else if (userInput === 0){
            alert(userInput + " is neither positive nor negative.");
        } else {
            console.log("Something weird happened with negOrPos");
        }
    }




        //Second Attempt Here, DOES NOT WORK

    // var wantToEnterNumber = confirm("Do you want to enter a number?");
    //
    //
    // if(wantToEnterNumber){
    //     var userInput = parseInt(prompt("Please enter a number."));
    // } else {
    //     alert("Okay, then. Be that way.");
    // }
    //
    // if ((userInput === undefined)  || (userInput === NaN)){
    //     alert("That is not a valid number. Please refresh the page and start again.");
    // } else {
    //     isOdd(userInput);
    //     plus100(userInput);
    //     negOrPos(userInput);
    // }
    //
    //
    // //Here be functions.
    // function isOdd(num){
    //     if (userInput % 2 === 0){
    //         alert(userInput + " is an even number.");
    //     } else if (userInput % 2 !== 0){
    //         alert(userInput + " is an odd number.");
    //     } else {
    //         console.log("Something weird happened with isOdd")
    //     }
    // }
    //
    // function plus100(num){
    //     alert(userInput + " + 100 is: " + (userInput + 100));
    // }
    //
    //
    // function negOrPos(num){
    //     if (userInput > 0){
    //         alert(userInput + " is a positive number.");
    //     } else if (userInput < 0){
    //         alert(userInput + " is a negative number.");
    //     } else if (userInput === 0){
    //         alert(userInput + " is neither positive nor negative.");
    //     } else {
    //         console.log("Something weird happened with negOrPos");
    //     }
    // }

        //Third Attempt Here, DOES NOT WORK

    // var wantsToEnterNumber = confirm("Would you like to enter a number?");
    // var userInput = parseInt(prompt("Please enter a number."));
    //
    // if (!wantsToEnterNumber){
    //     alert("Fine, be that way.");
    // } else {
    //     if (userInput === NaN){
    //         alert("That is not a valid number. Please refresh the page and try again.");
    //     } else if (userInput%2 === 0){
    //         alert("That is an even number.");
    //     } else if (userInput%2 !== 0){
    //         alert("That is an odd number.");
    //     } else if (userInput > 0){
    //         alert("That is a positive number.");
    //     } else if (userInput < 0){
    //         alert("That is a negative number.");
    //     } else if (userInput === 0){
    //         alert("Zero is zero.");
    //     } else {
    //         alert(userInput + 100);
    //     }
    // }
    //
    //

//     //UNFINISHED ATTEMPT HERE
//     var wantsToEnterNumber = confirm("Would you like to enter a number?");
// function numberGame(){
//     var inputNumber = Number(prompt("Please enter a number."));
//
//     var inputIsNumber = !isNan(inputNumber);
//
//     if(inputIsNumber){
//         var inputNumber;
//
//         var isEven = inputNumber % 2 === 0;
//         var evenMessage = (isEven) ? "That is an even number." : "That is an odd number.";
//         alert(evenMessage);
//
//         alert("Your number added to 100 is: " + (inputNumber + 100));
//
//         var negPosMessage = (inputNumber > 0) ? "That is a positive number." : "That is a negative number, or zero.";
//         alert(negPosMessage);
//     } else {
//         alert("That is not a number. Please refresh the page and try again.");
//     }
//
//
//
//
// }

// INSTRUCTOR SOLUTION (this works!)
//     var userConfirm = confirm("Would you like to enter a number?");
//
//     if(userConfirm){
//         //true path, they want to enter a number
//
//         var userNumInput = prompt("Please enter a number.");
//
//         console.log("user entered the following; " + userNumInput);
//
//         //checking to see if the user input is a number; isNaN == true if the value is not a number (like a string) so !isNaN ==> tell us if value is a number
//         var isNumber = !isNaN(userNumInput);
//
//         if(isNumber){
//             //true/happy path ==> user did input a number
//
//             //parse the input after confirmed that it is a number so we are working with correct data type
//             var userNumber = parseFloat(userNumInput);
//
//             //check to see if the number is even
//             var isEven = userNumber % 2 === 0;
//             console.log("The user's number is even: " + isEven);
//
//             //User ternary statement to determine the message, if even, use even message, if odd, use odd message
//             var evenMessage = (isEven) ? "Your number is even!" : "Your number is odd!";
//             alert(evenMessage);
//
//             //add and alert 100 to user number
//             alert(userNumber + 100);
//
//
//             //Use ternary statement to determine positive or negative
//             var posNegMessage = (userNumber >= 0) ? "Your number is positive" : "Your number is negative";
//             alert( posNegMessage);
//
//         } else {
//             // sad path ==> not a number
//             alert("Hey, that's not a number!");
//         }
//
//
//     }







})();