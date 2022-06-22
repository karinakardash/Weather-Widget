import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import styles from "./Day.module.scss";

type DayProps = {
  weather: Weather;
};

export const Day: React.FC<DayProps> = ({ weather }) => {
  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__block_wrapper}>
          <div className={styles.this__temp}>
            {Math.floor(weather.main.temp)}
          </div>
          <div className={styles.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={styles.bottom__block}>
        <div className={styles.this__time}>
          Время: <span>21:54</span>
        </div>
        <div className={styles.this__city}>
          Время: <span>Санкт-Петербург</span>
        </div>
      </div>
    </div>
  );
};
