import { AllDays } from "./components/all-days/AllDays";
import { DayInfo } from "./components/day-info/DayInfo";
import { Day } from "./components/day/Day";
import styles from "./Home.module.scss";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.home}>
      <div className={styles.day__container}>
        <Day />
        <DayInfo />
      </div>
      <AllDays></AllDays>
    </div>
  );
};
