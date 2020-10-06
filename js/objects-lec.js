"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
 *              INTRO TO OBJECTS
 ******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

//EXAMPLE
// var rubberDuck = {
//     color: "yellow",
//     //key = color, value = "yellow"
//     role: "emotional support",
//     name: "cody"
// };
// console.log(rubberDuck);

/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 *
 */

//New Object Instance=======
// var myPhone = new Object();

//Object Literal Notation=======
//curly braces!
//useful if you already know some key:value pairs that you're going to store in it
// var myPhone = {
//     model: "gold",
//     color: "iPhone 8Plus",
//     storage:"128gb",
//     ring: function(){
//         console.log("Ringgg!");
//     },
//     picture: function(){
//         console.log("Taking a picture.");
//     }
// };
//
// console.log(myPhone.color); //"gold"
// myPhone.ring();
// myPhone.picture();


/**
 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */
//USING CONSTRUCTOR
// var myMac = new Object();
// //Use dot notation to assign new properties or to access existing values
// myMac.color = "silver";
// myMac.model = "Macbook Air";
// myMac.ram = "8gb";
// myMac.sleep = function(){
//     console.log("Computer goes to sleep");
// }
//
// console.log(myMac);
// myMac.sleep();

    //OR====================

//USING OBJECT LITERAL NOTATION

// var myMac = {
//     color: "silver",
//     model: "Macbook Air",
//     ram: "8gb",
//     sleep: function(){
//         console.log("Computer goes to sleep");
//     }
// }
//
// console.log(myMac);
// myMac.sleep();


/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */
var myPhone = new Object();
myPhone.model = "8 plus";
myPhone.color = "rose gold";
myPhone.storage = "32gb";
myPhone.name = {
    firstName: "Kaitlin",
    lastName: "Muse",
};
myPhone.call = function(){
    console.log("Dialing...")
};
myPhone.currentUser = function(){
    console.log("Current user: " + this.name.firstName + " " + this.name.lastName);
    //use keyword "this" to reference the object you are currently in
};



console.log(myPhone);
console.log(myPhone.name);
console.log(myPhone.name.firstName);
myPhone.call();
myPhone.currentUser();

/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

var myMac = new Object();
myMac.model = "Macbook Air";
myMac.size = "13in";
myMac.year = "2017";
myMac.folders = ["Classic Theatre", "Codeup", "Music"];
myMac.login = {
    username: "CaitlinCelley",
    fakePassword: "blaaa59875_blaa",
    email: "voijr@foie.gov"
};
myMac.powerOn = function(){
    console.log("Powering on.")
};
myMac.currentUser = function(){
    console.log("Current user and email: " + this.login.username + ", " + this.login.email);
};



console.log(myMac);
console.log(myMac.folders);
console.log(myMac.folders[0]);
console.log(myMac.login.fakePassword);
myMac.powerOn();
myMac.currentUser();

myMac.folders.forEach(function(folder){
    console.log(folder);
});

/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */
//SEE ABOVE


/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */
//SEE ABOVE

/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */
//SEE ABOVE
/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */
//SEE ABOVE


/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */
//SEE ABOVE


/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */
//SEE ABOVE


/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */
//SEE ABOVE



/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */

var chooseYourFighter = [
    {
        name: {
            firstName: "Spongebob",
            lastName: "Squarepants"
        },
        catchphrase: function(){
            return "I'm ready!";
        },
        abilities: ["Karate", "Bubble Blowing", "Jellyfishing"]
    },
    {
        name: {
            firstName: "Patrick",
            lastName: "Star"
        },
        catchphrase: function(){
            return "No, this is Patrick.";
        },
        abilities: ["Hiding", "Secret photo", "Wumbo"]
    },
    {
        name: {
            firstName: "Eugene",
            lastName: "Krabs"
        },
        catchphrase: function(){
            return "MOOONEYYY!";
        },
        abilities: ["Take money", "Hide money", "Tiny violin"]
    },
    {
        name: {
            firstName: "Squidward",
            lastName: "Tentacles"
        },
        catchphrase: function(){
            return "nasal sound";
        },
        abilities: ["Bad music", "Nag", "SQUILLIAM"]
    }

    ];

chooseYourFighter.forEach(function(fighter){
    console.log(fighter.name.firstName + ": " + fighter.catchphrase());
    console.log("Their abilities: ");

    fighter.abilities.forEach(function(ability){
        console.log(ability);
    });
    console.log("-------------");


});