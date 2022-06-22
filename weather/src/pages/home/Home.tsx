import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selectors/selector";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { AllDays } from "./components/all-days/AllDays";
import { DayInfo } from "./components/day-info/DayInfo";
import { Day } from "./components/day/Day";
import styles from "./Home.module.scss";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  useEffect(() => {
    dispatch(fetchCurrentWeather("paris"));
  }, []);
  return (
    <div className={styles.home}>
      <div className={styles.day__container}>
        <Day weather={weather} />
        <DayInfo />
      </div>
      <AllDays></AllDays>
    </div>
  );
};
