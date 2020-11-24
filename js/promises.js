"use strict";

//Practicing with github API------------------------------------------------
// fetch("https://api.github.com/events", {headers:{"Authorization": "token" + gitHubToken}})
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(console.error);

// fetch("https://api.github.com/users/KaitlinKelley/events/public", {headers:{"Authorization": "token" + gitHubToken}})
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(console.error);




function getLastPush(username){
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers:{"Authorization": "token" + gitHubToken}})
            .then((response) => response.json())
            .then((data) => console.log("Most recent push created at: " + data[0].created_at.slice(11,-1)))
            .catch(console.error);
}

function getLastCommitMessage(username){
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers:{"Authorization": "token" + gitHubToken}})
        .then((response) => response.json())
        .then((data) => console.log("The most recent commit message is: " + data[0].payload.commits[0].message))
        .catch(console.error);
}

getLastPush("KaitlinKelley");
getLastCommitMessage("KaitlinKelley");




//Justin's Solution
function lastPushDate(username){
    const url = `https://api.github.com/users/${username}/events`;
    const options = {headers: {"Authorization": "token" + gitHubToken}};
    return fetch(url, options)
        .then(result => result.json())
        .then(extractDateOfLastPushEvent)
        .catch(console.error);
}

function extractDateOfLastPushEvent(events) {
    for (let event of events){
        if (event.type === "PushEvent"){
            return new Date(event.created_at).toDateString();
        }
    }
    return null;
}

lastPushDate("KaitlinKelley").then(console.log);















// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.

// const wait = (numOfMillPassedIn) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//                 resolve(numOfMillPassedIn);
//         }, numOfMillPassedIn);
//     })
// }


//this solution would work, but would not be dynamic (for the bonus)
// function wait(numMill){
//     return new Promise( (resolve) => {
//         setTimeout(resolve, numMill)
//     });
// }



// wait(1000).then((data) => console.log(`You'll see this after ${data/1000} second(s).`));
// wait(3000).then((data) => console.log(`You'll see this after ${data/1000} second(s).`));
// wait(6000).then((data) => console.log(`You'll see this after ${data/1000} second(s).`));
// wait(10000).then((data) => console.log(`You'll see this after ${data/1000} second(s).`));
//
// console.log(wait);



//Practice with Star Wars API----------------------------------
// fetch("https://swapi.dev/api/starships/2/")
//     .then((response) => response.json())
//     .then((data) => console.log(data.cargo_capacity, data.consumables))
//     .catch((error) => console.log(error));
//
// fetch("http://swapi.dev/api/films/6/")
//     .then((response) => response.json())
//     .then((data) => console.log(data.title, data.producer))
//     .catch((error) => console.log(error))
