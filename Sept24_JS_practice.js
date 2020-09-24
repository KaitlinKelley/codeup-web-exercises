var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
// a = 3, b = 1, c = 3

var d = "hello";
var e = false;

d++;
e++;
//d++ = Nan, e++ = 0
//incrementing a boolean value returns 0??

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
//perplexed + 2 = Nan

var price = 2.7;
price.toFixed(2);
//price.toFixed(2) = 2.70

var price = "2.7";
price.toFixed(2);
//price.toFixed is not a function
//cannot used toFixed() on a string??

isNaN(0)
//false

isNaN(1)
//false

isNaN("")
//false
//????

isNaN("string")
//true

isNaN("0")
//false

isNaN("1")
//false

isNaN("3.145")
//false

isNaN(Number.MAX_VALUE)
//false

isNaN(Infinity)
//false
//Infinity is a floating point??

isNaN("true")
//true

isNaN(true)
//false
//a boolean can be converted to a number??

isNaN("false")
//true

isNaN(false)
//false
//a boolean can be converted to a number??

// to illustrate why the isNaN() function is needed:
NaN == NaN
//false
//NaN is not a string? No value cannot equal no value?

!true
//false

!false
//true

!!true
//true

!!false
//false

!!0
//false

!!-0
//false

!!1
//true

!!-1
//true

!!0.1
//true

!!"hello"
//true

!!""
//false

!!''
//false

!!"false"
//true

!!"0"
//true

//EXERCISE 2---------------

var sample = "Hello Codeup";
undefined
sample
"Hello Codeup"
sample.length
12
var sample = sample + " Students"
undefined
sample
"Hello Codeup Students"
sample.replace("Students", "Class")
"Hello Codeup Class"
sample.indexOf("c")
-1
//results in -1, "c" not present
undefined
sample.indexOf("C")
6
sample.substring(6, 12)
"Codeup"

//EXERCISE 3-----------------

Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

    You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var littleMermaid = 3
var brotherBear = 5
var hercules = 1
var totalDays = (littleMermaid + brotherBear + hercules)
var rentalPrice = 3
var totalPrice = (totalDays*rentalPrice)
return totalPrice
var cleanPrice = "$" + totalPrice.toFixed(2)
//could also use toFixed() to format price?

Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var googleRate = 400
var amazonRate = 380
var facebookRate = 350
var totalPayment = (googleRate*6 + amazonRate*4 + facebookRate*10)
return totalPayment
var cleanPayment = "$" + totalPayment.toFixed(2)

A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
    var classMax = x
var currentNumberOfStudents = y
var classOpen = (y<x)
var noConflicts
var enrolled
if (classOpen && noConflicts){
    enrolled
}
//also need a function that finds out whether or not the students has free time that coincides with the class time

A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
    var numberOfProducts
var customer
var offer
if((numberOfProducts > 2) && offer = valid){
    apply offer
}
else if(customer = premium){
    apply offer
}

//EXERCISE 4---------------------
var username = "codeup"
var password = "notastrongpassword"

Create a variable that holds a boolean value for each of the following conditions:

    the password must be at least 5 characters
the password must not include the username
the username must be no more than 20 characters
neither the username or password can start or end with whitespace

    var passwordCorrectLength = (password.length >= 5)
var passwordNoHasUsername =
var usernameCorrectLength = (username.length <= 20)
var noWhiteSpace = (username === username.trim() && password === password.trim())



if (password.includes(username)){
    return false
} else return passwordNoHasUsername

if(password.replace(username, 1) === password){
    return true
} else return false

-------OR--------

var passwordCorrectLength = Boolean(password.length >= 5)
var usernameCorrectLength = Boolean(username.length <= 20)
var noWhiteSpace = Boolean(username === username.trim() && password ===password.trim())
var passwordNoHasUsername =













