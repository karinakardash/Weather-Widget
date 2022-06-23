import { ForecastWeatherType } from "../../../../store/types/types";
import styles from "./AllDays.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";

type AllDaysProps = {
  forecastWeather: ForecastWeatherType;
  onPreviewClick?: (dt_txt: string) => void;
};

export const AllDays: React.FC<AllDaysProps> = ({
  forecastWeather,
  onPreviewClick,
}) => {
  const forecastDays = forecastWeather.list;
  return (
    <>
      <Tabs />
      <div className={styles.days}>
        {forecastDays.map((day) => (
          <Card
            id={day.dt_txt}
            oneDay={day}
            key={day.dt_txt}
            onPreviewClick={onPreviewClick}
          />
        ))}
      </div>
    </>
  );
};
