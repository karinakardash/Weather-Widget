import { AxiosResponse } from "axios";
import { api, apiPro } from "../axios";
import { ForecastWeatherType, Weather } from "../store/types/types";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }
}
export class WeatherForecastService {
  static getForecastWeather(
    city: string
  ): Promise<AxiosResponse<ForecastWeatherType>> {
    return apiPro.get<ForecastWeatherType>(`/forecast?q=${city}`);
  }
}
