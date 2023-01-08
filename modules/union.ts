type combineInput = string | number;
type conversionable = "number" | "string";

const caculator = (
  input1: combineInput,
  input2: combineInput,
  conversion: conversionable
) => {
  let result: any;
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    conversion === "number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

console.log(caculator("hello", "hi", "string"));
console.log(caculator(2, 9, "string"));
console.log(caculator(2, 9, "number"));
console.log(caculator("2", "9", "number"));
