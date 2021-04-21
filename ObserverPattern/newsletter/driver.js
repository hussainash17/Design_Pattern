"use strict";
exports.__esModule = true;
var NewsLetterPublisher_1 = require("./NewsLetterPublisher");
var NewsLetterReceiver_1 = require("./NewsLetterReceiver");
var publisher = new NewsLetterPublisher_1.NewsLetterPublisher();
var receiver = new NewsLetterReceiver_1.NewsLetterReceiver('Test@gmail.com');
// registering new observer
publisher.registerObserver(receiver);
var receiver1 = new NewsLetterReceiver_1.NewsLetterReceiver('Test1@gmail.com');
// registering another observer
publisher.registerObserver(receiver1);
// sending new news to all the observers
publisher.newChangeToSend('New news published');
// removing an existing observer
publisher.removeObserver(receiver1);
// sending new news to all the observers
publisher.newChangeToSend('New Article published');
