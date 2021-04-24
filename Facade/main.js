"use strict";
exports.__esModule = true;
exports.Main = void 0;
var Amplifier_1 = require("./Amplifier");
var Tuner_1 = require("./Tuner");
var dvdPlayer_1 = require("./dvdPlayer");
var cdPlayer_1 = require("./cdPlayer");
var Projector_1 = require("./Projector");
var PopcornPopper_1 = require("./PopcornPopper");
var TheaterLights_1 = require("./TheaterLights");
var HomeTheaterFacade_1 = require("./HomeTheaterFacade");
var TheaterScreen_1 = require("./TheaterScreen");
var Main = /** @class */ (function () {
    function Main() {
        var amp = new Amplifier_1.Amplifier('Top-O-Line Amplifier');
        var tuner = new Tuner_1.Tuner('Top-O-Line AM/FM Tuner', amp);
        var dvd = new dvdPlayer_1.DvdPlayer('Top-O-Line DVD Player', amp);
        var cd = new cdPlayer_1.CdPlayer('Top-O-Line CD Player', amp);
        var projector = new Projector_1.Projector('Top-O-Line Projector', dvd);
        var lights = new TheaterLights_1.TheaterLights('Theater Ceiling Lights');
        var screen = new TheaterScreen_1.TheaterScreen('Theater Screen');
        var popper = new PopcornPopper_1.PopcornPopper('Popcorn Popper');
        var homeTheater = new HomeTheaterFacade_1.HomeTheaterFacade(amp, tuner, dvd, cd, projector, screen, lights, popper);
        homeTheater.watchMovie('Raiders of the Lost Ark');
        console.log('test');
        homeTheater.endMovie();
    }
    return Main;
}());
exports.Main = Main;
