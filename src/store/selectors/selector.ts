import { RootState } from "../store";

export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;

export const selectForecastWeatherData = (state: RootState) =>
  state.forecastWeatherSliceReducer;
