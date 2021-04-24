"use strict";
exports.__esModule = true;
exports.TheaterLights = void 0;
var TheaterLights = /** @class */ (function () {
    function TheaterLights(description) {
        this.description = description;
    }
    TheaterLights.prototype.on = function () {
        console.log(this.description + ' on');
    };
    TheaterLights.prototype.off = function () {
        console.log(this.description + ' off');
    };
    TheaterLights.prototype.dim = function (level) {
        console.log(this.description + ' dimming to ' + level + '%');
    };
    TheaterLights.prototype.toString = function () {
        return this.description;
    };
    return TheaterLights;
}());
exports.TheaterLights = TheaterLights;
