// TODO: define polyfill for `Object.is(..)`
if (!Object.ashuIs) {
  Object.ashuIs = (param1, param2) => {
    const isItNegZero = (param) => {
      return param === 0 && 1 / param === -Infinity;
    };

    if (Number.isNaN(param1) && Number.isNaN(param2)) {
      return true;
    }
    if (isItNegZero(param1) || isItNegZero(param2)) {
      return isItNegZero(param1) && isItNegZero(param2);
    }

    return param1 === param2;
  };
}

// tests:
console.log(Object.ashuIs(42, 42) === true);
console.log(Object.ashuIs("foo", "foo") === true);
console.log(Object.ashuIs(false, false) === true);
console.log(Object.ashuIs(null, null) === true);
console.log(Object.ashuIs(undefined, undefined) === true);
console.log(Object.ashuIs(NaN, NaN) === true);
console.log(Object.ashuIs(-0, -0) === true);
console.log(Object.ashuIs(0, 0) === true);

console.log(Object.ashuIs(-0, 0) === false);
console.log(Object.ashuIs(0, -0) === false);
console.log(Object.ashuIs(0, NaN) === false);
console.log(Object.ashuIs(NaN, 0) === false);
console.log(Object.ashuIs(42, "42") === false);
console.log(Object.ashuIs("42", 42) === false);
console.log(Object.ashuIs("foo", "bar") === false);
console.log(Object.ashuIs(false, true) === false);
console.log(Object.ashuIs(null, undefined) === false);
console.log(Object.ashuIs(undefined, null) === false);
