"use strict";
exports.__esModule = true;
exports.Amplifier = void 0;
var Amplifier = /** @class */ (function () {
    function Amplifier(description) {
        this.description = description;
    }
    Amplifier.prototype.on = function () {
        console.log(this.description + ' on');
    };
    Amplifier.prototype.off = function () {
        console.log(this.description + ' off');
    };
    Amplifier.prototype.setStereoSound = function () {
        console.log(this.description + ' stereo mode on');
    };
    Amplifier.prototype.setSurroundSound = function () {
        console.log(this.description + ' surround sound on (5 speakers, 1 subwoofer)');
    };
    Amplifier.prototype.setVolume = function (level) {
        console.log(this.description + ' setting volume to ' + level);
    };
    Amplifier.prototype.setTuner = function (tuner) {
        console.log(this.description + ' setting tuner to ' + this.dvd);
        this.tuner = tuner;
    };
    Amplifier.prototype.setDvd = function (dvd) {
        console.log(this.description + ' setting DVD player to ' + this.dvd);
        this.dvd = dvd;
    };
    Amplifier.prototype.setCd = function (cd) {
        console.log(this.description + ' setting CD player to ' + this.cd);
        this.cd = cd;
    };
    Amplifier.prototype.toString = function () {
        return this.description;
    };
    return Amplifier;
}());
exports.Amplifier = Amplifier;
