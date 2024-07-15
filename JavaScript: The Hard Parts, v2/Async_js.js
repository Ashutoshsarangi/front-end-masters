/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(() => console.log("Welcome"), 3000);
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  setTimeout(() => console.log("Hello"), 1);
  setTimeout(() => console.log("good bye"), 3000);
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE
  setInterval(() => console.log("hi"), 1000);
}
// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
  const intervalTimer = setInterval(() => console.log("hi for now"), 1000);

  setTimeout(() => clearInterval(intervalTimer), 5000);
}
// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(callBackFunc, intervalTimer, timeOut) {
  // ADD CODE HERE
  const interval = setInterval(callBackFunc, intervalTimer);

  setTimeout(() => clearInterval(interval), timeOut);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log("This is the end!");
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  let counter = 1;
  return () => {
    const interval = setInterval(() => {
      if (counter === target) {
        clearInterval(interval);
      }
      console.log(`log ${counter++}`);
    }, wait);
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000);
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
  // ADD CODE HERE
  return new Promise((resolve, reject) => {
    resolve(val);
  });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised("wait for it promised func...");
createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
    this.callback = cb;
  }
  // ADD METHODS HERE
  start() {
    this.interval = setInterval(() => this.callback("Tick"), 1000);
  }

  reset() {
    clearInterval(this.interval);
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => {
  console.log(val);
});
console.log("Started Clock.");
clock.start();
setTimeout(() => {
  clock.reset();
  console.log("Stopped Clock after 6 seconds.");
}, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  // ADD CODE HERE
  let duration = 0;
  let id;
  return function () {
    if (duration <= 0) {
      duration = interval;
      clearInterval(id);
      id = setInterval(() => {
        duration -= 100;
      }, 100);
      return callback();
    }
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() {
  return "hi from debounce";
}
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function () {
  console.log(giveHiSometimes());
}, 2000); // -> undefined
setTimeout(function () {
  console.log(giveHiSometimes());
}, 4000); // -> undefined
setTimeout(function () {
  console.log(giveHiSometimes());
}, 8000); // -> 'hi'

// ---------
const debouncedFunc = (callback, delay) => {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => callback(), delay);
  };
};

const printHello = () => console.log("Hello");

const betterFun = debouncedFunc(printHello, 100);

for (let i = 0; i < 1000; i++) {
  betterFun();
}

const thruttleFunc = (callback, delay) => {
  let timer;
  return function () {
    setTimeout(() => callback(), delay);
  };
};
