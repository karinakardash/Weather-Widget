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
import { Tabs, TabValues } from "./components/all-days/Tabs";
import { Header } from "../../features/header/Header";

type HomeProps = {};

const TABS_LIST = Object.values(TabValues);

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
let todayFormatted = yyyy + "-" + mm + "-" + dd;

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let ddTomorrow = String(tomorrow.getDate()).padStart(2, "0");
let mmTomorrow = String(tomorrow.getMonth() + 1).padStart(2, "0");
let yyyyTomorrow = tomorrow.getFullYear();
let tommorowFormatted = yyyyTomorrow + "-" + mmTomorrow + "-" + ddTomorrow;

export const Home: React.FC<HomeProps> = () => {
  const dispatch = useCustomDispatch();
  const [location, setLocation] = useState("");

  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { weather: forecastWeather } = useCustomSelector(
    selectForecastWeatherData
  );

  useEffect(() => {
    dispatch(fetchCurrentWeather("minsk"));
  }, []);

  useEffect(() => {
    dispatch(fetchForecastWeather("minsk"));
  }, []);

  const searchLocation = (event: KeyboardEvent) => {
    if (event?.key === "Enter") {
      dispatch(fetchCurrentWeather(location));
      dispatch(fetchForecastWeather(location));
    }
  };

  const forecastDays = forecastWeather.list;
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  let selectedCardId = useCustomSelector(
    (state) => state.selectedCardSliceReducer.dt_txt
  );
  let selectedCard =
    selectedCardId != null
      ? forecastDays.find((card) => card.dt_txt === selectedCardId)
      : null;

  const [selectedTab, setSelectedTab] = useState(TabValues.TODAY);

  const todayForecast = forecastDays.filter((item) => {
    if (item.dt_txt.slice(0, 10) === todayFormatted) {
      return item;
    }
  });

  const tommorowForecast = forecastDays.filter((item) => {
    if (item.dt_txt.slice(0, 10) === tommorowFormatted) {
      return item;
    }
  });

  const getSelectedTabCards = (selectedTab: TabValues) => {
    switch (selectedTab) {
      case TabValues.TODAY:
        return todayForecast;
      case TabValues.TOMORROW:
        return tommorowForecast;
    }
  };

  return (
    <div className={styles.home}>
      <Header
        value={location}
        onChange={(event: any) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
      />
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
              onClick={(event: any) => {
                setPopupVisible(false);
                event.preventDefault();
              }}
            />
          ) : null}
        </div>
      ) : null}
      <div className={styles.day__container}>
        <Day weather={weather} location={location} />
        <DayInfo weather={weather} />
      </div>
      <Tabs
        tabs={TABS_LIST}
        selectedTab={selectedTab}
        onTabClick={setSelectedTab}
      />
      <AllDays
        forecastWeather={getSelectedTabCards(selectedTab)}
        onPreviewClick={(dt_txt) => {
          dispatch(setSelectedCard(dt_txt));
          setPopupVisible(true);
        }}
      ></AllDays>
    </div>
  );
};
