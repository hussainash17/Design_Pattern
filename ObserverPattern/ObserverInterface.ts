export interface Observer {
  update(temperature: Number, humidity: Number, pressure: Number): void;
}
