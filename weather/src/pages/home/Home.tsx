import { useEffect, useState } from "react";
import { Popup } from "../../features/popup/Popup";
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
import { setSelectedCard } from "../../store/slices/selectedCardSlice";

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

  const forecastDays = forecastWeather.list;
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  let selectedCardId = useCustomSelector(
    (state) => state.selectedCardSliceReducer.dt_txt
  );
  let selectedCard =
    selectedCardId != null
      ? forecastDays.find((card) => card.dt_txt === selectedCardId)
      : null;

  return (
    <div className={styles.home}>
      {selectedCardId != null ? (
        <div
          className={
            popupVisible
              ? `${styles.overlayContainer}`
              : `${styles.overlayContainerClose}`
          }
        >
          <div className={styles.overlay}></div>
          {selectedCard ? (
            <Popup
              className={styles.popup}
              {...selectedCard}
              onClick={(event) => {
                setPopupVisible(false);
                event.preventDefault();
              }}
            />
          ) : null}
        </div>
      ) : null}
      <div className={styles.day__container}>
        <Day weather={weather} />
        <DayInfo weather={weather} />
      </div>
      <AllDays
        forecastWeather={forecastWeather}
        onPreviewClick={(dt_txt) => {
          dispatch(setSelectedCard(dt_txt));
          setPopupVisible(true);
        }}
      ></AllDays>
    </div>
  );
};
