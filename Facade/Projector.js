"use strict";
exports.__esModule = true;
exports.Projector = void 0;
var Projector = /** @class */ (function () {
    function Projector(description, dvdPlayer) {
        this.description = description;
        this.dvdPlayer = dvdPlayer;
    }
    Projector.prototype.on = function () {
        console.log(this.description + ' on');
    };
    Projector.prototype.off = function () {
        console.log(this.description + ' off');
    };
    Projector.prototype.wideScreenMode = function () {
        console.log(this.description + ' in widescreen mode (16x9 aspect ratio)');
    };
    Projector.prototype.tvMode = function () {
        console.log(this.description + ' in tv mode (4x3 aspect ratio)');
    };
    Projector.prototype.toString = function () {
        return this.description;
    };
    return Projector;
}());
exports.Projector = Projector;
