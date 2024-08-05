// Greedy Algorithm- No of Coins
// This is locally Optimized Solution not the global optimized solution

// Brute force is Globally optimized solution. It calculate Every single combination possible
// and keep track of the minimum

const coins = [5, 10, 25];

coins.sort((a, b) => b - a);

console.log(coins);

const MinNoCoins = () => {
  let counter = 0;
  let arr = [];
  let i = 0;
  const recurr = (amount) => {
    console.log("Coins array ---> ", arr);
    if (amount <= 0 || i > coins.length) {
      return counter;
    }

    if (amount >= coins[i]) {
      counter++;
      arr.push(coins[i]);
      return recurr(amount - coins[i]);
    } else {
      i++;
      return recurr(amount);
    }
  };

  return recurr;
};

console.log(MinNoCoins()(55));
console.log(MinNoCoins()(5));
console.log(MinNoCoins()(40));
console.log(MinNoCoins()(0));
