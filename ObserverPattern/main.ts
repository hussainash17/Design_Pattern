import { CurrentConditionDisplay } from './CurrentConditionDisplay';
import { WeatherData } from './WeatherData';
class main {
   weatherStation: WeatherData = new WeatherData();
   display: CurrentConditionDisplay = new CurrentConditionDisplay(
    this.weatherStation
  );
}
