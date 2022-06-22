import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import styles from "./Day.module.scss";

type DayProps = {};

export const Day: React.FC<DayProps> = () => {
  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__block_wrapper}>
          <div className={styles.this__temp}>20°</div>
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
