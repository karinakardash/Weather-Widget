import { MouseEventHandler, useState } from "react";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import {
  DayInfoItem,
  DayInfoItemType,
} from "../../pages/home/components/day-info/DayInfo";
import { Weather } from "../../store/types/types";
import styles from "./Popup.module.scss";

type PopupProps = {
  onClick?: (event: any) => void;
  className?: string;
  dt_txt?: string;
  main: {
    temp: number;
    pressure: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
};

export const Popup: React.FC<PopupProps> = ({
  dt_txt,
  main,
  wind,
  weather,
  onClick,
  className,
}) => {
  const imgSrc = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const items = [
    {
      icon_id: "temp",
      name: "Temperature",
      value: `${Math.floor(main.temp)}° - feels like ${Math.floor(
        main.feels_like
      )}°`,
    },
    {
      icon_id: "precipitation",
      name: "Humidity",
      value: `${main.humidity}%`,
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: `${main.pressure} mm`,
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: `${wind.speed} m/s`,
    },
  ];
  return (
    <>
      <div className={className}>
        <div className={styles.day}>
          <div className={styles.day__temp}>{Math.floor(main.temp)}°</div>
          <div className={styles.day__name}>{dt_txt}</div>
          <div className={styles.img}>
            <img src={imgSrc} alt="icon" />
          </div>
          <div className={styles.day__time}>{weather[0].description}</div>
        </div>
        <div className={styles.this__day_info_items}>
          {items.map((item: DayInfoItemType) => (
            <DayInfoItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={styles.close} role="button" onClick={onClick}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
