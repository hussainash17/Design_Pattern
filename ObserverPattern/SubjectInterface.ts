import { Observer } from './ObserverInterface';

export interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObserver(): void;
}
