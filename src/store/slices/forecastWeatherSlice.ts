import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { ForecastWeatherType } from "../types/types";

type ForecastWeather = {
  weather: ForecastWeatherType;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: ForecastWeather = {
  weather: {
    list: [
      {
        dt_txt: "0",
        main: {
          temp: 0,
          pressure: 0,
          feels_like: 0,
          humidity: 0,
        },
        wind: {
          speed: 0,
        },
        weather: [
          {
            description: "sunny",
            icon: "10n",
          },
        ],
      },
    ],
  },
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
};

export const forecastWeatherSlice = createSlice({
  name: "forecast_weather",
  initialState,
  reducers: {
    fetchForecastWeather(state) {
      state.isLoading = true;
    },
    fetchForecastWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<ForecastWeatherType>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchForecastWeatherError(
      state,
      action: PayloadAction<AxiosResponse<ForecastWeatherType>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default forecastWeatherSlice.reducer;
