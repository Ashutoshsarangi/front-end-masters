// accumulator pattern

const accWrapperRecursive = () => {
  return (recurssive = (num, acc) => {
    if (num === 1) {
      return acc;
    }
    return recurssive(num - 1, num * acc);
  });
};

const test11 = accWrapperRecursive();

console.log(test11(5, 1));

// Memorize recurssion

const memoWrapperRecursive = () => {
  const cache = {};
  return (recurssive = (num) => {
    if (num === 1) {
      return 1;
    }

    if (!cache[num]) {
      cache[num] = num * recurssive(num - 1);
    }
    console.log(cache);
    return cache[num];
  });
};

const test = memoWrapperRecursive();

console.log(test(5));
console.log(test(6));
console.log(test(7));
