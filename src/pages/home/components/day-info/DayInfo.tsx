import styles from "./DayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import { IndicatorSvgSelector } from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import { Weather } from "../../../../store/types/types";

export type DayInfoItemType = {
  icon_id: string;
  name: string;
  value: string;
};

type DayInfoItemProps = {
  item: DayInfoItemType;
};

export const DayInfoItem: React.FC<DayInfoItemProps> = ({ item }) => {
  const { icon_id, name, value } = item;
  return (
    <div className={styles.item}>
      <div className={styles.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={styles.indicator__name}>{name}</div>
      <div className={styles.indicator__value}>{value}</div>
    </div>
  );
};

type DayInfoProps = {
  weather: Weather;
};

export const DayInfo: React.FC<DayInfoProps> = ({ weather }) => {
  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: `${Math.floor(weather.main.temp)}° - feels like ${Math.floor(
        weather.main.feels_like
      )}°`,
    },
    {
      icon_id: "precipitation",
      name: "Humidity",
      value: `${weather.main.humidity}%`,
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: `${weather.main.pressure} mm`,
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: `${weather.wind.speed} m/s`,
    },
  ];
  return (
    <div className={styles.this__day_info}>
      <div className={styles.this__day_info_items}>
        {items.map((item: DayInfoItemType) => (
          <DayInfoItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={styles.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};
