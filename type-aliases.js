"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
const showResult = (result) => {
    console.log("Result is: " + result);
};
// let combineValues: (a: number, b: number) => number;
// console.log(showResult(add(3, 2)));
// combineValues = add;
// console.log(combineValues(4, 5));
// console.log(combineValues);
const handleCallback = (a, b, cb) => {
    let result;
    result = a + b;
    cb(result);
};
handleCallback(32, 90, (test) => {
    console.log(test);
});
