import styles from "./DayInfo.module.scss";
import cloud from "../../../../assets/images/cloud.png";
import { IndicatorSvgSelector } from "../../../../assets/icons/indicators/IndicatorSvgSelector";

type DayInfoItem = {
  icon_id: string;
  name: string;
  value: string;
};

type DayInfoItemProps = {
  item: DayInfoItem;
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

type DayInfoProps = {};

export const DayInfo: React.FC<DayInfoProps> = () => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <div className={styles.this__day_info}>
      <div className={styles.this__day_info_items}>
        {items.map((item: DayInfoItem) => (
          <DayInfoItem key={item.icon_id} item={item} />
        ))}
      </div>
      <img className={styles.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};
