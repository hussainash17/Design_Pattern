"use strict";
exports.__esModule = true;
exports.Tuner = void 0;
var Tuner = /** @class */ (function () {
    function Tuner(description, amplifier) {
        this.description = description;
    }
    Tuner.prototype.on = function () {
        console.log(this.description + ' on');
    };
    Tuner.prototype.off = function () {
        console.log(this.description + ' off');
    };
    Tuner.prototype.setFrequency = function (frequency) {
        console.log(this.description + ' setting frequency to ' + frequency);
        this.frequency = frequency;
    };
    Tuner.prototype.setAm = function () {
        console.log(this.description + ' setting AM mode');
    };
    Tuner.prototype.setFm = function () {
        console.log(this.description + ' setting FM mode');
    };
    Tuner.prototype.toString = function () {
        return this.description;
    };
    return Tuner;
}());
exports.Tuner = Tuner;
