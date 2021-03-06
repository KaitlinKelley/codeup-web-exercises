(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Kaitlin",
        lastName: "Muse",
        sayHello: function(){
            return "Hello from " + this.firstName + " " + this.lastName + "!";
        }
    }

    console.log(person.lastName + ", " + person.firstName)
    console.log(person.sayHello());


    //OR ADD THE METHOD TO THE OBJECT THIS WAY===========
    //person.sayHello = function(){
    // return "Hello from " + this.firstName + " " + this.lastName + "!";
    //}
    //=====================================


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
//SEE ABOVE


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function twelvePercentDiscount(array){
        array.forEach(function(element){
            const discount = .12;
            if(element.amount < 200){
                console.log(element.name + ": You do not qualify for the discount. You will need to pay: $" + element.amount.toFixed(2));
            } else if(element.amount >= 200){
                var discountedAmt = (element.amount - (element.amount*.12)).toFixed(2);
                var discountMsg = element.name + ": You qualify for our discount! Your original total was: $" + element.amount.toFixed(2) + ". Your new total is: $" + discountedAmt;
                console.log(discountMsg);
            }
        })
    }

twelvePercentDiscount(shoppers);

    //INSTRUCTOR SOLUTION
    //
    //
    // shoppers.forEach(function(shopper){
    //     var initialAmount = shopper.amount;
    //     var discount = shopper.amount * .12;
    //     var finalAmount = initialAmount - discount;
    //
    //     //check for customers who spent > 200
    //
    //     if(initialAmount > 200){
    //         console.log(shopper.name + " spent " + initialAmount + ". They get a discount of " + discount + ". The total paid was: " + finalAmount);
    //     } else {
    //         console.log(shopper.name + " paid " + initialAmount);
    //     }
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
// var books = [
//          {
//              title: "Stranger in a Strange Land",
//              author: {
//                  firstName: "Robert",
//                  lastName: "Heinlein"
//              }
//          },
//         {
//             title: "Dune",
//             author: {
//                 firstName: "Frank",
//                 lastName: "Herbert"
//             }
//         },
//         {
//             title: "The Lord of the Rings",
//             author: {
//                 firstName: "J.R.R.",
//                 lastName: "Tolkien"
//             }
//         },
//         {
//             title: "Do Androids Dream of Electric Sheep?",
//             author: {
//                 firstName: "Philip K.",
//                 lastName: "Dick"
//             }
//         },
//         {
//             title: "The Mists of Avalon",
//             author: {
//                 firstName: "Marion Zimmer",
//                 lastName: "Bradley"
//             }
//         }
//         ]
//
//     books.forEach(function(book){
//         console.log("Book #" + (books.indexOf(book)+1));
//         console.log("Title: " + book.title);
//         console.log("Author: " + book.author.firstName + " " + book.author.lastName);
//         console.log("----------------");
//     });



    //INSTRUCTOR SOLUTION
    // books.forEach(function(book, i){
    //     var output = "";
    //     output += "Book # " + (i +1) + "\n";
    //     output += "Title: " + book.title + "\n";
    //     output += "Author: " + book.author.firstName + " " + book.author.lastName + "\n";
    //     output += "--------";
    //     console.log(output);
    // });


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    //see above

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(titleInput, lastNameInput, firstNameInput){
        return {
            title: titleInput,
            author: {
                lastName: lastNameInput,
                firstName: firstNameInput
            }
        }
    }

    // console.log(createBook("Stranger In a Strange Land", "Heinlein", "Robert"));

    var books = [createBook("Stranger In a Strange Land", "Heinlein", "Robert"),
                createBook("Dune", "Herbert", "Frank"),
                createBook("The Lord of the Rings", "Tolkien", "J.R.R."),
                createBook("Do Androids Dream of Electric Sheep?", "Dick", "Phillip K."),
                createBook("The Mists of Avalon", "Bradley", "Marion Zimmer")
                ];

    // console.log(books);


    function showBookInfo(bookInput){
            return "Book #" + (books.indexOf(bookInput)+1) + " | " +
                "Title: " + bookInput.title + " | " +
                "Author: " + bookInput.author.firstName + " " + bookInput.author.lastName;
    }
        // console.log(showBookInfo(books[1]));

    books.forEach(function(book){
        console.log(showBookInfo(book));

        books.forEach(showBookInfo);
    })




    // //====================INSTRUCTOR SOLUTION==========
    //
    // function createBook(title, first, last){
    //     return {
    //         title: title,
    //         author: {
    //             firstName: first,
    //             lastName: last
    //         }
    //     }
    //
    // }
    //
    // books.push(createBook("Cat's Cradle", "Kurt", "Vonnegut"));
    // //pushes an object into an array
    //
    // function showBookInfo(book, i){
    //     var output = "";
    //         output += "Book # " + (i +1) + "\n";
    //         output += "Title: " + book.title + "\n";
    //         output += "Author: " + book.author.firstName + " " + book.author.lastName + "\n";
    //         output += "--------";
    //         console.log(output);
    // }
    //
    // books.forEach(showBookInfo);
    // //THE ABOVE LINE IS WEIRD, FIGURE THIS OUT!!




})();