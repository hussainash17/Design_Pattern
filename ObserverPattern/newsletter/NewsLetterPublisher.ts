import { Subject } from './Subject';
import { Observer } from './Observer';

export class NewsLetterPublisher implements Subject {
  private observers: Observer[] = [];
  private newNews: String;

  public registerObserver(observer: Observer): void {
    console.log('Registering new observer');
    // added new observer in observer array
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    // checking if the observer is exist or not
    const indexOfObserver: number = this.observers.indexOf(observer);
    if (indexOfObserver === -1) {
      return console.log(observer + ' is not exist for remove');
    }
    console.log('Removing an existing obsever');
    this.observers.splice(indexOfObserver, 1);
  }

  public notifyObserver(): void {
    console.log('Notifying all the observers');
    for (let observer of this.observers) {
      observer.update('Newsletter updated');
    }
  }

  public newChangeToSend(newNews: String): void {
    this.newNews = newNews;
    console.log('This is the new news -> "' + this.newNews + '"');
    this.notifyObserver();
  }
}
