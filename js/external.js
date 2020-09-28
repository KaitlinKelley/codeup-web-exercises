"use strict";

console.log("Hello from external JavaScript.");

alert("Welcome to my website!");

// var userColor = prompt("What is your favorite color?");
//
// var alertMessage = "Great! " + userColor + " is my favorite color, too!";
//
// alert(alertMessage);





// var littleMermaidDays = Number(prompt("How many days will you rent The Little Mermaid?"));
// var brotherBearDays = Number(prompt("How many days will you rent Brother Bear?"));
// var herculesDays = Number(prompt("How many days will you rent Hercules?"));
//
// var rentalPrice = Number(prompt("What is the rental price per day?"));
//
// var totalDays = (littleMermaidDays + brotherBearDays + herculesDays);
// var totalPrice = (totalDays*rentalPrice);
//
// var alertMessageMovies = "You will pay $" + totalPrice.toFixed(2) + " for all of those rentals.";
//
// alert(alertMessageMovies);






// var googleRate = Number(prompt("What is your daily rate of pay at Google?"));
// var amazonRate = Number(prompt("What is your daily rate of pay at Amazon?"));
// var facebookRate = Number(prompt("What is your daily rate of pay at Facebook?"));
// var googleDays = Number(prompt("How many days did you work at Google this week?"));
// var amazonDays = Number(prompt("How many days did you work at Amazon this week?"));
// var facebookDays = Number(prompt("How many days did you work at Facebook this week?"));
//
// var googleTotalPay = (googleRate*googleDays);
// var amazonTotalPay = (amazonRate*amazonDays);
// var facebookTotalPay = (facebookRate*facebookDays);
//
// var overallPay = (googleTotalPay + amazonTotalPay + facebookTotalPay);
//
// var alertMessagePay = "Congrats! You will get paid $" + overallPay.toFixed(2) + " this week.";
//
// alert(alertMessagePay);




// This was my solution.
// var isOpen = confirm("Is this class still open?");
// if (!isOpen){
//     alert("I'm sorry, this class is full.");
// } else {
//
//     var haveConflicts = confirm("Do you have any schedule conflicts with this class?");
//
//     if(isOpen && !haveConflicts){
//         alert("Congrats! You may enroll.");
//     } else {
//         alert("You may not enroll. Sad day.");
// }}

// // This is Vivian's solution.
//     //if class is not full (true) ==> we can enroll
// var classIsNotFull = confirm("Does class still have space?"); //result is boolean
//
//     //if class schedule does not conflict ==> we can enroll, have space in our schedule
// var classScheduleDoesNotConflict = confirm("Schedules do not conflict?"); //result is boolean
//
//     // true && true ==> can enroll
//     // true && false ==> cannot enroll bc schedule conflict
//     //false && true ==> cannot enroll bc class full
//     //false && false ==> cannot enroll, class is full and schedule conflict
// var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;
//
// var alertMessageEnrollment = "Student enrolled: " + studentEnrolled;
//
// alert(alertMessageEnrollment);




// This is my solution.
// var isPremium = confirm("Are you a premium member?");
// if (isPremium){
//     alert("Congrats! You will receive a product offer.");
// } else {
//     var numberItems = Number(prompt("How many items did you buy?"));
//     if(numberItems <= 2){
//         alert("Sorry, your product offer does not apply. You must buy more than 2 items.");
//     } else {
//         var offerValid = confirm("Is your product offer still valid?");
//
//         if ((numberItems > 2) && offerValid){
//         alert("Congrats! You may use your product offer.");
// }       else {
//          alert("Sorry, your product offer does not apply. Your offer may have expired.");
// }}}



//This is Vivian's solution.
//Offer has to be valid, no matter what.
//If they are a premium member, the number of items does not matter.
//If they are NOT a premium member, they must buy MORE than 2 items ==> have to use OR (||)

var numberOfItems = Number(prompt("How many items for checkout?")); //result is number
var offerIsValid = confirm("Is the offer valid?"); //result is boolean
var isPremiumMember = confirm("Are you a premium member?"); //result is boolean

//true && (true || false)
//true && (false || true)
//false && (doesn't matter what this is)
var productOfferApply = offerIsValid && (isPremiumMember || (numberOfItems > 2)); //result is boolean

alert("Product discount applied?: " + productOfferApply);
