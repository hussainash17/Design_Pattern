"use strict";
exports.__esModule = true;
exports.PopcornPopper = void 0;
var PopcornPopper = /** @class */ (function () {
    function PopcornPopper(description) {
        this.description = description;
    }
    PopcornPopper.prototype.on = function () {
        console.log(this.description + " on");
    };
    PopcornPopper.prototype.off = function () {
        console.log(this.description + " off");
    };
    PopcornPopper.prototype.pop = function () {
        console.log(this.description + " popping popcorn!");
    };
    PopcornPopper.prototype.toString = function () {
        return this.description;
    };
    return PopcornPopper;
}());
exports.PopcornPopper = PopcornPopper;
