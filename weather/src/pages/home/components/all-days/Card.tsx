import styles from "./AllDays.module.scss";
import { Day } from "./AllDays";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";

type CardProps = {
  oneDay: Day;
};

export const Card: React.FC<CardProps> = ({ oneDay }) => {
  const { day, day_info, icon_id, temp_day, info } = oneDay;
  return (
    <div className={styles.card}>
      <div className={styles.day}>{day}</div>
      <div className={styles.day__info}>{day_info}</div>
      <div className={styles.img}>
        <GlobalSvgSelector id={icon_id} />
      </div>
      <div className={styles.temp__day}>{temp_day}</div>
      <div className={styles.temp__night}>{temp_day}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};
