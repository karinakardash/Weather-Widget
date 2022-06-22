import styles from "./AllDays.module.scss";

type TabsProps = {};

type Tab = {
  value: string;
};

export const Tabs: React.FC<TabsProps> = () => {
  const tabs: Tab[] = [
    {
      value: "На неделю",
    },
    {
      value: "На 10 дней",
    },
    {
      value: "На месяц",
    },
  ];
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={styles.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={styles.cancel}>Отменить</div>
    </div>
  );
};
