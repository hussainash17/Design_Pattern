import { Subject } from './SubjectInterface';
import { Observer } from './ObserverInterface';

export class WeatherData implements Subject {
  private temperature: Number;
  private humidity: Number;
  private pressure: Number;
  private observers: Observer[];

  constructor() {
    this.observers = [];
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    // pop is not working because we need to remove any observers
    // this.observers.pop(observer);
    // we need to find the index of the observer
    const index: number = this.observers.indexOf(observer);
    // we can also use slice method but it will complicated
    // we use splice for instead
    if (index === -1) {
      console.log('there is no observer for remove');
    }
    this.observers.splice(index, 1);
  }

  notifyObserver(): void {
    for (let i: number = 0; i < this.observers.length; i++) {
      //   let observer: Observer = this.observers[i];
      //   observer.update(this.temperature, this.humidity, this.pressure);
      this.observers[i].update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementChange(): void {
    this.notifyObserver();
  }

  setMeasurement(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    (this.temperature = temperature),
      (this.humidity = humidity),
      (this.pressure = pressure);
  }

  getTempareture(): Number {
    return this.temperature;
  }

  getPressure(): Number {
    return this.pressure;
  }

  getHumidity(): Number {
    return this.humidity;
  }
}
