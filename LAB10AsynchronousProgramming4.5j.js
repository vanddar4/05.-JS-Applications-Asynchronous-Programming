// Asynchronous Programming and Promise

// Promises. Async / Await.

// Table of Contents
// Asynchronous Programming Promises
// Async / Await

// Synchronous vs Asynchronous
//   Asynchronous Programming

// Asynchronous Programming in JS
// Not the same thing as concurrent or multi-threaded There can be asynchronous code, but it is generally
// single-threaded
// Structured using callback functions
// In current versions of JS there are:
// Callbacks [].reduce((a,c)=>a+c)
// Promises .then, .catch
// Async Functions the .asych keyword

// Asynchronous Programming
// Runs several tasks (pieces of code) in parallel, at the same time
// All the task can be send out right away, instead waiting for each task to be complete before the next one runs. 
// It's assembly line progrmaming vs. program management.
// Asynchronous happens a lot in websites

// Asynchronous Programming – Example
// The following commands will be executed as follows:

// console.log("Hello.");// Hello.
// let random = 0
// setTimeout(function() { 
//     console.log("Goodbye!");// Hello again!
//     random = 3
//     console.log(random);
// }, 2000);
// random = 1
// console.log("Hello again!");// Goodbye!

// Objects Holding Asynchronous Operations
//Promises

// What is a Promise?
// A promise is an asynchronous action that may complete at some point and produce a value
// States:
// Pending - operation still running (unfinished) Fulfilled - operation finished (the result is available) Failed - operation failed (an error is present)
// Promises use the Promise object
// new Promise(executor);

// What is a Promise?

// Promise Methods

// Promise.reject(reason) /A type of Promise is the fetch method, so you use the name fetch not promise Fetch.race or Fetch.reject
// Returns an object that is rejected with the given reason
// Promise.resolve(value)
// Returns an object that is resolved with the given value
// Promise.all(iterable)
// Returns a promise
// Fulfills when all of the promises have fulfilled Rejects as soon as one of them rejects

// Promise.allSettled(iterable) Wait until all promises have settled
// Promise.race(iterable)
// Returns a promise that fulfills or rejects as soon as
// one of the promises in an iterable is settled
// Promise.finally()
// The handler is called when the promise is settled

// Promise.allSettled(iterable) Wait until all promises have settled
// Promise.race(iterable)
// Returns a promise that fulfills or rejects as soon as
// one of the promises in an iterable is settled
// Promise.finally()
// The handler is called when the promise is settled

// Promise.then() – Example
// console.log('Before promise'); // Before promise
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         // resolve('done'); // Then returned: done
//         reject('failure')
//     }, 2000); 
// })
//   //Resolved after 500 ms
//    .then(function(res) {
//         console.log('Then returned: ' + res); 
//   }).catch((error) => {
//     console.log(error);
//   });
// console.log('After promise'); // After promise

// Promises work for API callbacks and routing with url calls to see if something exists, it will provide the page or errors

//Patrick's attempt at doing it with a url, doesn't work
// let url = "https://api.github.com/ussers/testnakov/repos"
// new Promise(function(resolve, reject){
//     fetch(url).then(function(response){
//         if(response.ok){
//             resolve(response.json());
//         } else {
//             reject(response.error)
//         }
//     });
// }).then(function(res){
//     console.log('then' + res);
// }).catch((error) => {
//         console.log(error);
// });

//This is  essentially what the resolve function looks like, don't necesarily need the reject method. It's like using the reduce method with the accumluator
// function resolve(input){
//     return input
// }

// Promise.catch() – Example
// console.log('Before promise');
// new Promise(function (resolve, reject) { setTimeout(function () {
//     reject('fail');
//     }, 500); })
//     Rejected after 500 ms
//      .then (function (result) { console.log(result); }) .catch (function(error) { console.log(error); });
// console.log('After promise');

// Problem: Load GitHub Commits
// GitHub username:
// <input type="text" id="username" value="nakov" /> <br> Repo: <input type="text" id="repo" value="nakov.io.cin" /> <button onclick="loadCommits()">Load Commits</button>
// <ul id="commits"></ul>
// <script>
//   function loadCommits() {
//      // Use Fetch API
// } </script>

// Simplified Promises
// Async / Await

// Async Functions
// Returns a promise, that can await other promises in a way that looks synchronous
// Operate asynchronously via the event loop Contains an await expression that:
// Is only valid inside async functions Pauses the execution of that function Waits for the Promise's resolution

//Example
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => { 
//             console.log('res 2');
//             resolve('resolved');
//         }, 2000); 
//     });
//   }

// async function asyncCall() { 
//     console.log('calling'); // calling
//     let result = await resolveAfter2Seconds(); 
//     console.log(result); // resolved
//     console.log("finished");
// }
// console.log('before function');
// asyncCall();
// console.log('after function');

// Do not confuse await with Promise.then()
// await is always used for a single promise
// To await two or more promises in parallel, use Promise.then()
// If a promise resolves normally, then await promise returns the result
// In case of a rejection, it throws an error

// Async/Await vs Promise.then

// Promise.then
// function logFetch(url) {
//     return fetch(url)
//   .then(response => { 
//       return response.text()
//   })
//   .then(text => {
//     console.log(text); })
//   .catch(err => { 
//     console.error(err);
//   }); 
// }

//   Async/Await
//   async function logFetch(url) {
//     try {
//         const response = await fetch(url);
//         console.log(await response.text()); 
//     }
//   catch (err) { 
//       console.log(err);
//   } }

//   Error Handling

//   async function f() {
//     try {
//       let response = await fetch();
//   let user = await response.json(); } catch (err) {
//   // catches errors both in fetch andresponse.json
//       alert(err);
//     }}
// For Formal try catch template

// async function f() {
//         let response = await fetch();
//         }
//         // f() becomes a rejected promise
//         f().catch(alert);
//For promise based system use .catch


// Sequential Execution
// ▪ To execute different promise methods one by one, use Async /Await

// function execute(x,sec) {
//     return new Promise(resolve => { 
//     console.log('Start: ' + x);
//         setTimeout(() => { 
//             console.log('End: ' + x); 
//             resolve(x);
//       }, sec *1000); 
//     }); 
// }
// async function serialFlow() {
//     let result1 = await execute(1, 1);
//     let result2 = await execute(2, 2);
//     let result3 = await execute(3, 3);
//     let finalResult = result1 + result2 + result3; 
//     console.log(finalResult);
// }

// serialFlow()

// Start: 1
// End: 1
// Start: 2
// End: 2
// Start: 3
// End: 3
// 6

// Concurrent Execution
function execute(x,sec) {
    return new Promise(resolve => { 
    console.log('Start: ' + x);
        setTimeout(() => { 
            console.log('End: ' + x); 
            resolve(x);
      }, sec *1000); 
    }); 
}
async function parallelFlow() {
    let result1 = execute(1,1);
    let result2 = execute(2,2);
    let result3 = execute(3,3);
    let result4 = execute(4,4);
    let finalResult = await result1 + await result2 + await result3 + await result4; 
    console.log(finalResult);
}

parallelFlow()

// Expected output: // Start: 1
// Start: 2
// Start: 3
// End: 1 // End: 2 // End: 3 // 6

//Will mostly be using the .then method, sometimes the Promise.finally, Promise.resolve, 

// Summary
// ▪ Asynchronous programming
// ▪ Runs several tasks in parallel, at
// the same time
// ▪ Promises hold operations
// ▪ Can be resolved or rejected ▪ Async functions contain an await
// expression
// ▪ Pauses the execution
// ▪ Waits for the Promise's resolution