"use strict";
exports.__esModule = true;
exports.NewsLetterPublisher = void 0;
var NewsLetterPublisher = /** @class */ (function () {
    function NewsLetterPublisher() {
        this.observers = [];
    }
    NewsLetterPublisher.prototype.registerObserver = function (observer) {
        console.log('Registering new observer');
        // added new observer in observer array
        this.observers.push(observer);
    };
    NewsLetterPublisher.prototype.removeObserver = function (observer) {
        // checking if the observer is exist or not
        var indexOfObserver = this.observers.indexOf(observer);
        if (indexOfObserver === -1) {
            return console.log(observer + ' is not exist for remove');
        }
        console.log('Removing an existing obsever');
        this.observers.splice(indexOfObserver, 1);
    };
    NewsLetterPublisher.prototype.notifyObserver = function () {
        console.log('Notifying all the observers');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update('Newsletter updated');
        }
    };
    NewsLetterPublisher.prototype.newChangeToSend = function (newNews) {
        this.newNews = newNews;
        console.log('This is the new news -> "' + this.newNews + '"');
        this.notifyObserver();
    };
    return NewsLetterPublisher;
}());
exports.NewsLetterPublisher = NewsLetterPublisher;
