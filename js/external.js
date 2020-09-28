"use strict";

console.log("Hello from external JavaScript.");

// var userColor = prompt("What is your favorite color?");
//
// alert("Great! " + userColor + " is my favorite color, too!");
//
// var littleMermaidDays = Number(prompt("How many days did you rent The Little Mermaid for?"));
// var brotherBearDays = Number(prompt("How many days did you rent Brother Bear for?"));
// var herculesDays = Number(prompt("How many days did you rent Hercules for?"));
//
// var rentalPrice = Number(prompt("What is the rental price (in dollars) per day?"));
//
// var totalDays = (littleMermaidDays + brotherBearDays + herculesDays);
// var totalPrice = (totalDays*rentalPrice);

//alert("You will pay $ " + totalPrice + "for all of those rentals.");

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
// alert("Congrats! You will get paid $" + overallPay + " this week.")

// var isOpen = confirm("Is this class still open?");
// var haveConflicts = confirm("Do you have any schedule conflicts with this class?");
//
// if(isOpen && !haveConflicts){
//     alert("Congrats! You may enroll.");
// } else {
//     alert("You may not enroll. Sad day.");
// }

var isPremium = confirm("Are you a premium member?");
if (isPremium){
    alert("Congrats! You will receive a product offer.");
} else {
    var numberItems = Number(prompt("How many items did you buy?"));
    var offerValid = confirm("Is your product offer still valid?");

        if ((numberItems > 2) && offerValid){
        alert("Congrats! You may use your product offer.");
}       else {
         alert("Sorry, your product offer does not apply.");
}}
