"use strict";
exports.__esModule = true;
exports.HomeTheaterFacade = void 0;
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(amp, tuner, dvd, cd, projector, screen, lights, popper) {
        this.amp = amp;
        this.tuner = tuner;
        this.dvd = dvd;
        this.cd = cd;
        this.projector = projector;
        this.screen = screen;
        this.lights = lights;
        this.popper = popper;
    }
    HomeTheaterFacade.prototype.watchMovie = function (movie) {
        console.log('Get ready to watch a movie...');
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setDvd(this.dvd);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        console.log('Shutting movie theater down...');
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.dvd.stop();
        this.dvd.eject();
        this.dvd.off();
    };
    HomeTheaterFacade.prototype.listenToCd = function (cdTitle) {
        console.log('Get ready for an audiopile experence...');
        this.lights.on();
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setCd(this.cd);
        this.amp.setStereoSound();
        this.cd.on();
        this.cd.play(cdTitle);
    };
    HomeTheaterFacade.prototype.endCd = function () {
        console.log('Shutting down CD...');
        this.amp.off();
        this.amp.setCd(this.cd);
        this.cd.eject();
        this.cd.off();
    };
    HomeTheaterFacade.prototype.listenToRadio = function (frequency) {
        console.log('Tuning in the airwaves...');
        this.tuner.on();
        this.tuner.setFrequency(frequency);
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setTuner(this.tuner);
    };
    HomeTheaterFacade.prototype.endRadio = function () {
        console.log('Shutting down the tuner...');
        this.tuner.off();
        this.amp.off();
    };
    return HomeTheaterFacade;
}());
exports.HomeTheaterFacade = HomeTheaterFacade;
