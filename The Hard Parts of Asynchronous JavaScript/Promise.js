// Challenge 1

function sayHello() {
  setTimeout(() => {
    console.log("Hello");
  }, 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms

// Challenge 2
var promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  setTimeout(() => {
    resolve("Resolved!");
  }, 1000);
});

const handlePromiseResolve = (data) => console.log(data);
const handlePromiseReject = (err) => console.log(err);

// Should print out "Resolved!"
// ADD CODE HERE
promise.then(handlePromiseResolve).catch(handlePromiseReject);

// Challenge 3

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  reject("Reject!");
});

// Should print out "Reject!"
// ADD CODE HERE
promise.then(handlePromiseResolve).catch(handlePromiseReject);

// Challenge 4

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  console.log("I will also Print in begining");
  resolve();
});

// Uncomment the lines below when ready
promise.then(() => console.log("Promise has been resolved!"));
console.log("I'm not the promise!");

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  console.log("I will also Print in begining promise 22");
  resolve();
});

// Uncomment the lines below when ready
promise.then(() =>
  console.log("Promise has been resolved! Again --- before reject")
);
console.log("I'm not the promise!- again");

// Challenge 5
function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello from creating a new promises + setTime out");
    }, 1000);
  });
}
const sayHelloUpdate = (data) => console.log(data);
// Uncomment the code below to test
// This code should log "Hello" after 1000ms
delay().then(sayHelloUpdate);

// Challenge 6
//
// ADD CODE BELOW
const thirdPromise = new Promise((resolve, reject) => {
  resolve("Third---Ashu");
});
var secondPromise = new Promise((resolve, reject) => {
  resolve(thirdPromise);
});
var firstPromise = new Promise((resolve, reject) => {
  resolve(secondPromise);
});

firstPromise.then((data) => console.log(data));
// Challenge 7
const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      console.log("Inside");
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
  fakeAPICall(0).then(handlePromiseResolve).catch(handlePromiseReject);
}

getAllData();
