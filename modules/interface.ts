/* Interfaces in typescript allow you to define what properties and methods are needed by the object to be implemented.
 If the object conforms to the correct interface template, then the object that implements that interface will be properly 
 implemented. If the interface is not implemented properly then the typescript will throw an error immediately. */

interface Person {
  name: string;
  age: number;
  hobbies: string[];
  position: string;
}

// Optional Properties
interface Person2 {
  name: string;
  age: number;
  hobbies?: string[];
  position: string;
}

const simplePerson: Person = { name: "sam", age: 23, hobbies: ["soccer", "piano"], position: "dev" }
const personWithoutHobbies: Person2 = { name: "sam", age: 23, position: "dev" }
