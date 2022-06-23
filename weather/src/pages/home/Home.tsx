import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import {
  selectCurrentWeatherData,
  selectForecastWeatherData,
} from "../../store/selectors/selector";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { fetchForecastWeather } from "../../store/thunks/fetchForecastWeather";
import { AllDays } from "./components/all-days/AllDays";
import { DayInfo } from "./components/day-info/DayInfo";
import { Day } from "./components/day/Day";
import styles from "./Home.module.scss";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { weather: forecastWeather } = useCustomSelector(
    selectForecastWeatherData
  );
  useEffect(() => {
    dispatch(fetchCurrentWeather("paris"));
  }, []);

  useEffect(() => {
    dispatch(fetchForecastWeather("paris"));
  }, []);
  return (
    <div className={styles.home}>
      <div className={styles.day__container}>
        <Day weather={weather} />
        <DayInfo weather={weather} />
      </div>
      <AllDays forecastWeather={forecastWeather}></AllDays>
    </div>
  );
};
