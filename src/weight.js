"use strict";
exports.__esModule = true;
var User_1 = require("./User");
// function showBmi(person: User) {
//     return "Your BMI is \n (imperial): " + person.getBmiImperial() + " \n (metric): " + person.getBmiMetric();
// }
function test(person) {
    return person.doTest();
}
var person = new User_1.User('male', 'Jon', 'Doe', 180.5, 81.8734228, 10, 5, 1.778);
// document.body.innerHTML = showBmi(person);
document.body.innerHTML = test(person);
