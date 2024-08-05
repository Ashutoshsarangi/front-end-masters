const timer10 = (param) => param * 10;

const cache = {};
const memoTimes10 = (n) => {
  if (!cache[n]) {
    cache[n] = timer10(n);
  }

  return cache[n];
};

console.log("task2 calculated value --> ", memoTimes10(9)); // calculated
console.log("task2 Cache value --> ", memoTimes10(9)); // cached
