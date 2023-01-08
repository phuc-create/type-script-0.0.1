"use strict";
var Position;
(function (Position) {
    Position["WEB_DEVELOPER"] = "WEB_DEVELOPER";
    Position["SOFTWARE_ENGINER"] = "SOFTWARE_ENGINER";
    Position["UI_UX_DESIGN"] = "UI_UX_DESIGN";
    Position["TESTER"] = "TESTER";
})(Position || (Position = {}));
const person = {
    name: "Phuc",
    age: 21,
    hobbys: ["soccer", "guitar", "game", "sleep"],
    position: Position.WEB_DEVELOPER,
};
if (person.position === Position.SOFTWARE_ENGINER) {
    console.log("Your so cool");
}
else {
    console.log("Your are a lier!");
}
//In => show index of every value in array
//Of => show value of every index in array
