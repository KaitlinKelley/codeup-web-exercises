(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * //Useful for pasting into HTML
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetStringBr = planetsArray.join("<br>");
    console.log(planetStringBr);

    var planetStringUl = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    console.log(planetStringUl);

})();

// BONUS CHALLENGE (when finished with the exercise)...
// Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
// Using multiple functions will be helpful.
//     input = 5552324343, output = 555-232-4343
// input = 5553434, output = 555-3434
// input = 18005552323, output = 1-800-555-2323
// Extra Challenge: account for invalid characters
// Extra Challenge: if the input is already formatted, output the unformatted version
// Extra Challenge: allow the parser to accept letters and convert them to the correct numbers