"use strict";
exports.__esModule = true;
exports.DvdPlayer = void 0;
var DvdPlayer = /** @class */ (function () {
    function DvdPlayer(description, amplifier) {
        this.description = description;
        this.amplifier = amplifier;
        this.currentTrack = 0;
    }
    DvdPlayer.prototype.on = function () {
        console.log(this.description + ' on');
    };
    DvdPlayer.prototype.off = function () {
        console.log(this.description + ' off');
    };
    DvdPlayer.prototype.eject = function () {
        this.movie = null;
        console.log(this.description + ' eject');
    };
    DvdPlayer.prototype.play = function (x) {
        if (typeof x === 'string') {
            this.movie = x;
            this.currentTrack = 0;
            console.log(this.description + ' playing "' + x + '"');
        }
        if (typeof x === 'number') {
            if (this.movie == null) {
                console.log(this.description + " can't play track " + x + ' no dvd inserted');
            }
            else {
                this.currentTrack = x;
                console.log(this.description +
                    ' playing track ' +
                    this.currentTrack +
                    ' of "' +
                    this.movie +
                    '"');
            }
        }
    };
    DvdPlayer.prototype.stop = function () {
        this.currentTrack = 0;
        console.log(this.description + ' stopped "' + this.movie + '"');
    };
    DvdPlayer.prototype.pause = function () {
        console.log(this.description + ' paused "' + this.movie + '"');
    };
    DvdPlayer.prototype.setTwoChannelAudio = function () {
        console.log(this.description + ' set two channel audio');
    };
    DvdPlayer.prototype.setSurroundAudio = function () {
        console.log(this.description + ' set surround audio');
    };
    DvdPlayer.prototype.toString = function () {
        return this.description;
    };
    return DvdPlayer;
}());
exports.DvdPlayer = DvdPlayer;
