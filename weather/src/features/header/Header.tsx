import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import styles from "./Header.module.scss";
import Select from "react-select";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
    }),
  };

  const options = [
    { value: "city-1", label: "Санкт-Петербург" },
    { value: "city-2", label: "Москва" },
    { value: "city-3", label: "Новгород" },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}>Weather Widget</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          options={options}
          styles={colourStyles}
        />
      </div>
    </header>
  );
};
