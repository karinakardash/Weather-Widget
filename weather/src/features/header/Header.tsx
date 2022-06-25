import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import styles from "./Header.module.scss";
import { ChangeEvent } from "react";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/ThemeContext";

type HeaderProps = {
  onChange: (event: ChangeEvent) => void;
  onKeyPress: (event: any) => void;
  value: string;
};

export const Header: React.FC<HeaderProps> = ({
  value,
  onChange,
  onKeyPress,
}) => {
  const theme = useTheme();
  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}>Weather Widget</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <div className={styles.input}>
          <input
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder="Enter location"
            type="text"
          />
        </div>
      </div>
    </header>
  );
};
