import { Weather } from "../../../../store/types/types";
import styles from "./AllDays.module.scss";
import { Card } from "./Card";

type AllDaysProps = {
  forecastWeather: Weather[];
  onPreviewClick?: (dt_txt: string) => void;
};

export const AllDays: React.FC<AllDaysProps> = ({
  forecastWeather,
  onPreviewClick,
}) => {
  return (
    <>
      <div className={styles.days}>
        {forecastWeather.map((day) => (
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
