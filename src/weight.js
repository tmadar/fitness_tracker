var User = /** @class */ (function () {
    function User(gender, firstName, lastName, weightPounds, weightKilograms, heightInches, heightFeet, heightMeters) {
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.weightPounds = weightPounds;
        this.weightKilograms = weightKilograms;
        this.heightInches = heightInches;
        this.heightFeet = heightFeet;
        this.heightMeters = heightMeters;
    }
    User.prototype.getBmiImperial = function () {
        var a = (this.weightPounds * 0.45);
        var feetToInches = (this.heightFeet * 12);
        var inches = (this.heightInches + feetToInches);
        var b = (inches * 0.025);
        var c = (b * b);
        return (a / c);
    };
    User.prototype.getBmiMetric = function () {
        var a = this.heightMeters;
        var b = (this.weightKilograms * this.weightKilograms);
        return (a / b);
    };
    User.prototype.doTest = function () {
        console.log('got test');
    };
    return User;
}());
function showBmiImperial(person) {
    return "" + person.getBmiImperial();
}
function showBmiMetric(person) {
    return "" + person.getBmiMetric();
}
// function test(person: User) {
//     person.doTest();
// }
var person = new User('male', 'Jon', 'Doe', 180.5, 81.8734228, 10, 5, 1.778);
document.getElementById("weightMetric").innerHTML = 'something';
// test(person);
