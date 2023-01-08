const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const showResult = (result: number): void => {
  console.log("Result is: " + result);
};

// let combineValues: (a: number, b: number) => number;
// console.log(showResult(add(3, 2)));
// combineValues = add;
// console.log(combineValues(4, 5));

// console.log(combineValues);
const handleCallback = (a: number, b: number, cb: (num: number) => void) => {
  let result: number;
  result = a + b;
  cb(result);
};
handleCallback(32, 90, (test) => {
  console.log(test);
});
