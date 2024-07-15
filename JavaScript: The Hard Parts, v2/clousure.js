// CHALLENGE 1
function createFunction() {
  return () => {
		console.log('hello')    
  };
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
	return () => console.log(input);
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();


function addByX(x) {
	return (y) => {
    console.log(x + y);
		return x + y;
  };
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
	return (param2) => func(param2); 
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log('onceFunc --> ', onceFunc(4));  // => should log 6
console.log('onceFunc --> ', onceFunc(10));  // => should log 6
console.log('onceFunc --> ', onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
  let internlCounter = 1;
  
  return () => {
    if (internlCounter++ === count) {
      func();
    }
  }

}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {
  
  setTimeout(func, wait);

}


// CHALLENGE 7
function rollCall(names) {
  let currentIndex = 0;
  return () => {
    if (currentIndex >= names.length) {
      return 'Everyone accounted for';
    }
    
    return names[currentIndex++];
  }

}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
console.log('rollCaller ---> ', rollCaller()) // => should log 'Victoria'
console.log('rollCaller ---> ', rollCaller()); // => should log 'Juan'
console.log('rollCaller ---> ', rollCaller()); // => should log 'Ruth'
console.log('rollCaller ---> ', rollCaller()); // => should log 'Everyone accounted for'
console.log('rollCaller ---> ', rollCaller()); // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, magicWord) {
  const memoObj = {};
	
  return (param) => {
    if (param === magicWord) {
      return memoObj;
    }
    
    if (!memoObj[param]) {
      console.log('It will not trigger again for 2');
      memoObj[param] = func(param);
    } 
    
    return memoObj[param]
     
  }
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
  let counter = 0;
  return () => {
    return array[counter++ % array.length];
  }

}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {
	return (small) => func(arg, small);
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
	return (param) => {
    return ({
      date: new Date(Date.now()).toDateString(),
      output: func(param)
    })
  }
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
  const temp = {};
	return (param1, param2) => {
    if (param2 === undefined) {
      return param1.split(' ').reduce((acc, curr, index) => {
        if (temp[curr]) {
          acc = acc + temp[curr];
        } else {
          acc = acc + curr;
        }
        
        return index === 0 ? acc + ' ' : acc;
      }, '');
    } else {
      temp[param1] = param2;
    }
  }
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
  let secretHolder = secret;
  
  return ({
    getSecret: () => secretHolder,
    setSecret: (param) => {
      secretHolder = param;
    }
  });
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5)
console.log(obj.getSecret()) // => returns 5
obj.setSecret(2)
console.log(obj.getSecret()) // => returns 2


// CHALLENGE 14
function callTimes() {
  let counter = 1;
	return () => counter++;
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
console.log('myNewFunc1 --> ', myNewFunc1()); // => 1
console.log('myNewFunc1 --> ', myNewFunc1()); // => 2
console.log('myNewFunc2 --> ', myNewFunc2()); // => 1
console.log('myNewFunc2 --> ', myNewFunc2()); // => 2


// CHALLENGE 15
function roulette(num) {
  let counter = 0;
  
  return () => {
    counter += 1;
    
    const otherCases = counter > num ? 'pick a number to play again' : 'spin';
    
    return counter === num ? 'win' : otherCases;
  }

}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {
  let sum = 0;
  let counter = 0;
  
  return (param) => {
    if (param === undefined) {
      return counter === 0 ? 0 : sum / counter;
    }
    
    sum = sum + param;
    counter += 1;
    return sum / counter;
  }

}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  return (funcParam) => {
    return arrOfTests.reduce((acc, curr) => {
      if (funcParam(curr[0]) === curr[1]) {
        return acc && true;
      } else {
        return acc && false;
      }
    }, true);
  }
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
  let maxOperation = limit;
  let tempStorage = [];
  
  return (param) => {
    if (param !== 'undo') {
      tempStorage.push(param);
      if (maxOperation < limit) {
        maxOperation++;
      }
      
      return `${param} done`;
    } else if (maxOperation-- > 0) {
      
      return `${tempStorage.pop()} undone`;
    } else {
      return 'nothing to undo';
    }
  }

}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {
    	let index = 0;
	return function deal(param1, param2) {
    let sum = 0;
    let trigger = 0;
    let finished = false;
    
    return function player() {
      if (finished) {
        return 'you are done!';
      }
      
      if (trigger++ === 0) {
        sum = param1 + param2;
        
        return sum;
      } else if (sum < 21){
        sum += array[index++];
       	
        if (sum >= 21 ){
        	finished = true;
        	return 'bust';
      	}
        return sum;
      }
    }
  }
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
console.log('----------------Player - 2 -------------------');
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

console.log('----------------Player - 3 -------------------');

// /*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
