interface Person {
  name: string;
  age: number;
  hobbys: any[];
  position: string;
}
enum Position {
  WEB_DEVELOPER = "WEB_DEVELOPER",
  SOFTWARE_ENGINER = "SOFTWARE_ENGINER",
  UI_UX_DESIGN = "UI_UX_DESIGN",
  TESTER = "TESTER",
}
const person: Person = {
  name: "Phuc",
  age: 21,
  hobbys: ["soccer", "guitar", "game", "sleep"],
  position: Position.WEB_DEVELOPER,
};

if (person.position === Position.SOFTWARE_ENGINER) {
  console.log("Your so cool");
} else {
  console.log("Your are a lier!");
}
//In => show index of every value in array
//Of => show value of every index in array
