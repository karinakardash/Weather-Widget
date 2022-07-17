import { WeatherForecastService } from "../../services/WeatherService";
import { forecastWeatherSlice } from "../slices/forecastWeatherSlice";
import { AppDispatch } from "../store";

export const fetchForecastWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(forecastWeatherSlice.actions.fetchForecastWeather());
      const res = await WeatherForecastService.getForecastWeather(payload);
      if (res.status === 200) {
        dispatch(forecastWeatherSlice.actions.fetchForecastWeatherSuccess(res));
      } else {
        dispatch(forecastWeatherSlice.actions.fetchForecastWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
