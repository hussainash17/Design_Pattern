"use strict";
exports.__esModule = true;
exports.NewsLetterReceiver = void 0;
var NewsLetterReceiver = /** @class */ (function () {
    function NewsLetterReceiver(email) {
        this.email = email;
    }
    NewsLetterReceiver.prototype.update = function (newNews) {
        console.log('Sending new newsletter to this email -> ' +
            this.email +
            ' with news -> ' +
            newNews);
    };
    return NewsLetterReceiver;
}());
exports.NewsLetterReceiver = NewsLetterReceiver;
