import { Display } from './DisplayInterface';
import { Observer } from './ObserverInterface';
import { Subject } from './SubjectInterface';

export class CurrentConditionDisplay implements Observer, Display {
  private temperature: Number;
  private humidity: Number;
  private pressure: Number;

  private weatherData: Subject;

  constructor(weatherdata: Subject) {
    this.weatherData = weatherdata;
  }

  update(temperature: Number, pressure: Number, humidity: Number): void {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.display();
  }
  display(): void {
    console.log(
      `Current condition ${this.temperature} and ${this.humidity} and ${this.pressure}`
    );
  }
}
