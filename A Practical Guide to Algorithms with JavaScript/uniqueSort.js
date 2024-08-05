//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function (arr) {
  const breadcrumbs = {};
  const result = [];

  for (let item of arr) {
    if (!breadcrumbs[item]) {
      result.push(item);
      breadcrumbs[item] = true;
    }
  }

  return result.sort((a, b) => a - b);
};

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2])); // => [2,3,4]
