import styles from "./AllDays.module.scss";
import { Day } from "./AllDays";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";

type CardProps = {
  oneDay: Weather;
};

export const Card: React.FC<CardProps> = ({ oneDay }) => {
  const { dt_txt, main, wind, weather } = oneDay;
  const date = dt_txt?.slice(0, 10);
  const time = dt_txt?.slice(11, 16);
  const imgSrc = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  return (
    <div className={styles.card}>
      <div className={styles.day}>{time}</div>
      <div className={styles.day__info}></div>
      <div className={styles.img}>
        <img src={imgSrc} />
      </div>
      <div className={styles.temp__day}>{Math.floor(main.temp)}°</div>
      <div className={styles.temp__night}>{Math.floor(main.feels_like)}°</div>
      <div className={styles.info}>{weather[0].description}</div>
    </div>
  );
};
