"use strict";
exports.__esModule = true;
exports.TheaterScreen = void 0;
var TheaterScreen = /** @class */ (function () {
    function TheaterScreen(description) {
        this.description = description;
    }
    TheaterScreen.prototype.up = function () {
        console.log(this.description + ' going up');
    };
    TheaterScreen.prototype.down = function () {
        console.log(this.description + ' going down');
    };
    TheaterScreen.prototype.toString = function () {
        return this.description;
    };
    return TheaterScreen;
}());
exports.TheaterScreen = TheaterScreen;
