import { ForecastWeatherType } from "../../../../store/types/types";
import styles from "./AllDays.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";

type AllDaysProps = {
  forecastWeather: ForecastWeatherType;
};

export type Day = {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
};

export const AllDays: React.FC<AllDaysProps> = ({ forecastWeather }) => {
  const forecastDays = forecastWeather.list;

  console.log(forecastDays);

  /*const forecastToday = forecastDays.map((item, index) => {
    for (index; index <= 3; index++) {
      return item;
    }
  });
  console.log(forecastToday);*/

  /*const days: Day[] = [
    {
      day: `today`,
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Завтра",
      day_info: "29 авг",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь и солнце",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
    {
      day: "Чт",
      day_info: "28 авг",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Пт",
      day_info: "28 авг",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сб",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Вс",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];*/
  return (
    <>
      <Tabs />
      <div className={styles.days}>
        {forecastDays.map((day) => (
          <Card oneDay={day} key={day.dt_txt} />
        ))}
      </div>
    </>
  );
};
