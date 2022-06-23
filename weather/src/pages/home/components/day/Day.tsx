import { Weather } from "../../../../store/types/types";
import styles from "./Day.module.scss";

type DayProps = {
  weather: Weather;
};

export const Day: React.FC<DayProps> = ({ weather }) => {
  const imgSrc = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__block_wrapper}>
          <div className={styles.this__temp}>
            {Math.floor(weather.main.temp)}°
          </div>
          <div className={styles.this__day_name}>Today</div>
        </div>
        <img className={styles.img} src={imgSrc} alt="icon" />
      </div>
      <div className={styles.bottom__block}>
        <div className={styles.this__time}>
          {weather.weather[0].description}
        </div>
        <div className={styles.this__city}>
          City: <span>Санкт-Петербург</span>
        </div>
      </div>
    </div>
  );
};
