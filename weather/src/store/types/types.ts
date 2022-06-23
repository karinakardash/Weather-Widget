export type Weather = {
  dt_txt: string;
  main: {
    temp: number;
    pressure: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
};

export type ForecastWeatherType = {
  list: Weather[];
};
