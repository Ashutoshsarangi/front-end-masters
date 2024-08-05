const timer10 = (param) => param * 10;

const memoTimes10Wrapper = (callBack) => {
  const cache = {};

  return (n) => {
    if (!cache[n]) {
      cache[n] = callBack(n);
    }
    return cache[n];
  };
};
const memoTimes10 = memoTimes10Wrapper(timer10);
console.log("task2 calculated value --> ", memoTimes10(9)); // calculated
console.log("task2 Cache value --> ", memoTimes10(9)); // cached
