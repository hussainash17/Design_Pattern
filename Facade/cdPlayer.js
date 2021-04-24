"use strict";
exports.__esModule = true;
exports.CdPlayer = void 0;
var CdPlayer = /** @class */ (function () {
    function CdPlayer(description, amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }
    CdPlayer.prototype.on = function () {
        console.log(this.description + ' on');
    };
    CdPlayer.prototype.off = function () {
        console.log(this.description + ' off');
    };
    CdPlayer.prototype.eject = function () {
        this.title = null;
        console.log(this.description + ' eject');
    };
    CdPlayer.prototype.play = function (x) {
        if (typeof x === 'string') {
            this.title = x;
            this.currentTrack = 0;
            console.log(this.description + ' playing "' + x + '"');
        }
        if (typeof x === 'number') {
            if (this.title == null) {
                console.log(this.description +
                    " can't play track " +
                    this.currentTrack +
                    ', no cd inserted');
            }
            else {
                this.currentTrack = x;
                console.log(this.description + ' playing track ' + this.currentTrack);
            }
        }
    };
    CdPlayer.prototype.stop = function () {
        this.currentTrack = 0;
        console.log(this.description + ' stopped');
    };
    CdPlayer.prototype.pause = function () {
        console.log(this.description + ' paused "' + this.title + '"');
    };
    CdPlayer.prototype.toString = function () {
        return this.description;
    };
    return CdPlayer;
}());
exports.CdPlayer = CdPlayer;
