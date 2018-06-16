"use strict";
exports.__esModule = true;
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
        return 'got test';
    };
    return User;
}());
exports.User = User;
