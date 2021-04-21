import { Observer } from './Observer';

export class NewsLetterReceiver implements Observer {
  private email: String;
  constructor(email: String) {
    this.email = email;
  }
  public update(newNews: String): void {
    console.log(
      'Sending new newsletter to this email -> ' +
        this.email +
        ' with news -> ' +
        newNews
    );
  }
}
