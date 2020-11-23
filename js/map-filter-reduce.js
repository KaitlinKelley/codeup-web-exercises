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

//OR-----------------------------------------------------


//ES6
// let langUsers = users.filter(user => user.languages.length >= 3);

console.log(langUsers);


//     2. Use .map to create an array of strings where each element is a user's email address

const emails = users.map(function(user){
    return user.email;
})

console.log(emails);


//ES6
// const emails = users.map(user => user.email);

//OR
// const emails = users.map(({email}) => email);


// 3. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const yearsOfExp = users.reduce(function(currentSum, {yearsOfExperience}){
    return currentSum + yearsOfExperience;
}, 0);

let average = yearsOfExp/users.length;

//ES6
// const yearsOfExp = users.reduce((currentSum, currentUser) => currentSum + currentUser.yearsOfExperience, 0);

console.log(average);
console.log(yearsOfExp);

//     4. Use .reduce to get the longest email from the list of users.

let longestEmail = emails.reduce(function(currentLongestEmail, currentUserEmail){
    if(currentUserEmail.length > currentLongestEmail.length){
        currentLongestEmail = currentUserEmail;
    }
    return currentLongestEmail;
});


//OR---------------------------------------------------------------------
// const longestEmail = users.reduce((accum, curr) => {
//     return (curr.email.length > accum.length) ? curr.email : accum;
// }, "");

console.log(longestEmail);


    // 5. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

let nameList = users.reduce(function(currentString, currentUser){
    return currentString + currentUser.name + ", ";
}, "Your instructors are: ")

console.log(nameList);

//OR---------------------------------------------------------

const userString = users.reduce((accum, {name}) => {
    return `${accum} ${name}, `;
}, "Your instructors are: ").slice(0, -2).concat(".");

console.log(userString);


// 6. Use .reduce to get the unique list of languages from the list of users.

const allLanguages = users.reduce((accum, current) => {
    return accum.concat(current.languages);
//    use .concat() to add these two arrays together
}, []);

const uniqueLanguages = new Set(allLanguages);
console.log(uniqueLanguages);

const arrUniqueLang = Array.from(uniqueLanguages);
console.log(arrUniqueLang);


