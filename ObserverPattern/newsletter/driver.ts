import { NewsLetterPublisher } from './NewsLetterPublisher';
import { NewsLetterReceiver } from './NewsLetterReceiver';

const publisher = new NewsLetterPublisher();

const receiver = new NewsLetterReceiver('Test@gmail.com');
// registering new observer
publisher.registerObserver(receiver);

const receiver1 = new NewsLetterReceiver('Test1@gmail.com');
// registering another observer
publisher.registerObserver(receiver1);

// sending new news to all the observers
publisher.newChangeToSend('New news published');

// removing an existing observer
publisher.removeObserver(receiver1);

// sending new news to all the observers
publisher.newChangeToSend('New Article published');
