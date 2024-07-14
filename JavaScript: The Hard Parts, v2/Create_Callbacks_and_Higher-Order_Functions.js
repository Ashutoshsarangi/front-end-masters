// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");
let alphabets = [];
const letters = ["a", "b", "c", "d"];

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
function map(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  return result;
}

console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  console.log(result);
}

// see for yourself if your forEach works!
forEach(letters, addS);

// Challenge 5
function mapWith(array, callback) {
  forEach(array, callback);
}

mapWith([5, 6, 7], (input) => input * 2);

const add = function (a, b) {
  return a + b;
};

// Challenge 6
function reduce(array, callback, initialValue) {
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i]);
  }

  return result;
}

console.log("reduce ---> ", reduce([3, 4, 5, 6, 7], add, 0));

const intersectCallback = (acc, current) => {
  return acc.filter((ele) => current.includes(ele));
};

// Challenge 7
function intersection(arrays) {
  return reduce(arrays, intersectCallback, arrays[0]);
}

console.log(
  "intersection --> ",
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
// should log: [5, 15]

const unionCallback = (acc, curr) => {
  return [...acc, ...curr.filter((ele) => !acc.includes(ele))];
};

// Challenge 8
function union(arrays) {
  return reduce(arrays, unionCallback, arrays[0]);
}

console.log(
  "union ---> ",
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  const result = {};

  for (let i = 0; i < array2.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      result[array1[i]] = array2[i];
    }
  }

  return result;
}

console.log(
  "objOfMatches---> ",
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const result = {};

  for (let i = 0; i < arrVals.length; i++) {
    result[arrVals[i]] = arrCallbacks.map((callback) => callback(arrVals[i]));
  }

  return result;
}

console.log(
  "multiMap ---> ",
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  const result = {};
  // for (let i = 0; i < city.length; i++) {
  // if (callback(obj[city[i]]) === obj[city[i]]) {
  // result[city[i]] = obj[city[i]];
  // }
  // }
  for (let city in obj) {
    if (obj[city] === callback(city)) {
      result[city] = obj[city];
    }
  }

  return result;

  // for (let city in obj) {
  // if (obj[city] !== callback(city)) {
  //     delete obj[city]
  //   }
  // }

  // return obj;
}
const cities = {
  London: "LONDON",
  LA: "Los Angeles",
  Paris: "PARIS",
};
console.log(
  "objectFilter ---> ",
  objectFilter(cities, (city) => city.toUpperCase())
); // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      counter++;
    }
  }

  return counter > Math.floor(array.length / 2);
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  const nonPriorityArray = [];
  const prioritizeArray = [];

  array.forEach((ele) => {
    if (callback(ele)) {
      prioritizeArray.push(ele);
    } else {
      nonPriorityArray.push(ele);
    }
  });

  return [...prioritizeArray, ...nonPriorityArray];
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  "prioritize ---> ",
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
);
// should log:['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// Challenge 14
function countBy(array, callback) {
  return array.reduce(
    (acc, curr) => {
      if (callback(curr) === "even") {
        return { ...acc, even: acc.even + 1 };
      } else {
        return { ...acc, odd: acc.odd + 1 };
      }
    },
    {
      odd: 0,
      even: 0,
    }
  );
}

// /*** Uncomment these to check your work! ***/
console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  return array.reduce((acc, curr) => {
    const deci = callback(curr);
    if (acc[deci]) {
      acc[deci].push(curr);
    } else {
      acc[deci] = [curr];
    }
    return acc;
  }, {});
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
  return Math.floor(num);
};
console.log("groupBy ----> ", groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    if (callback(value)) {
      result.push(key);
    }
  }

  return result;
}

// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log("goodKeys  ----> ", goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  if (func2(func1(value)) === func1(func2(value))) {
    return true;
  } else {
    return false;
  }
}

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log("commutative ---> ", commutative(multBy3, divBy4, 11)); // should log: true
console.log("commutative ---> ", commutative(multBy3, subtract5, 10)); // should log: false
console.log("commutative ---> ", commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (callback(key) === value) {
      result[key] = value;
    }
  }

  return result;
}

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log("objFilter ---> ", objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  return (
    arrOfFuncs.reduce((acc, curr) => {
      if (curr(value)) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0) * 25
  );
}

// /*** Uncomment these to check your work! ***/
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log("rating --> ", rating(checks, 64)); // should log: 100
console.log("rating --> ", rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((acc, curr, index) => {
    return index === 0 ? curr(value) : curr(acc);
  }, "");
}

// /*** Uncomment these to check your work! ***/
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log("capAddlowRepeat ---> ", pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  return Object.keys(objOfFuncs).reduce(
    (acc, curr) => {
      const exeValue = objOfFuncs[curr](subject);
      if (acc.max < exeValue) {
        return { max: exeValue, key: curr };
      }

      return acc;
    },
    { max: 0, key: "" }
  ).key;
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log("highestFunc ----> ", highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log("highestFunc ----> ", highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log("highestFunc ----> ", highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  return arrOfFuncs.reduce((acc, curr) => {
    return curr(acc);
  }, startVal);
}

function addTen(num) {
  return num + 10;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num * 5;
}

// /*** Uncomment these to check your work! ***/
console.log(
  "combineOperations ----> ",
  combineOperations(0, [add100, divByFive, multiplyByThree])
); // Should output 60 -->
console.log(
  "combineOperations ----> ",
  combineOperations(0, [divByFive, multiplyFive, addTen])
); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  return array.reduce((acc, curr) => {
    if (callback(curr)) {
      return acc === -1 ? 1 : acc + 1;
    }

    return acc;
  }, -1);
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return num % 2 !== 0;
}

// /*** Uncomment these to check your work! ***/
console.log("myFunc  ->", myFunc(numbers, isOdd)); // Output should be 1
console.log("myFunc  ->", myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {
  array.forEach((ele) => callback(ele));
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log(sum); // Should output 6
