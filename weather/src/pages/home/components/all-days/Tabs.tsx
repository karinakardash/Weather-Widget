import styles from "./AllDays.module.scss";

type TabsProps = {};

type Tab = {
  value: string;
};

export const Tabs: React.FC<TabsProps> = () => {
  const tabs: Tab[] = [
    {
      value: "Today",
    },
    {
      value: "Tommorow",
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
    </div>
  );
};
