const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//     1. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let langUsers = users.filter(function(user){
    return user.languages.length >= 3;
})

console.log(langUsers);


//     2. Use .map to create an array of strings where each element is a user's email address

let emails = users.map(function(user){
    return user.email;
})

console.log(emails);


// 3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let yearsOfExp = users.reduce(function(currentSum, currentUser){
    return currentSum + currentUser.yearsOfExperience;
}, 0);

let average = yearsOfExp/users.length;

console.log(average);
console.log(yearsOfExp);

//     4. Use .reduce to get the longest email from the list of users.

let longestEmail = emails.reduce(function(currentLongestEmail, currentUserEmail){
    if(currentUserEmail.length > currentLongestEmail.length){
        currentLongestEmail = currentUserEmail;
    }
    return currentLongestEmail;
});

console.log(longestEmail);


    // 5. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let nameList = users.reduce(function(currentString, currentUser){
    return currentString + currentUser.name + ", ";
}, "Your instructors are: ")

console.log(nameList);


// 6. Use .reduce to get the unique list of languages from the list of users.


// let listOfLanguages = users.reduce(function(currentList, currentUser){
//     return currentList + currentUser.languages;
// }, "")
//
// let arrayOfLanguages = listOfLanguages.split(",");
// let setOfLanguages = new Set(arrayOfLanguages);
//
// console.log(listOfLanguages);
// console.log(arrayOfLanguages);
// console.log(setOfLanguages);
