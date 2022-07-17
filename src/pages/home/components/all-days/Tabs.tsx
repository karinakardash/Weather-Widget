import styles from "./AllDays.module.scss";

type TabProps = {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const Tab: React.FC<TabProps> = ({ selected, onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.tab} ${selected ? styles.tab__active : ""}`}
    >
      {children}
    </div>
  );
};

export enum TabValues {
  TODAY = "Today",
  TOMORROW = "Tomorrow",
}
type TabsProps = {
  tabs: TabValues[];
  selectedTab: TabValues;
  onTabClick: (selectedTab: TabValues) => void;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTab,
  onTabClick,
}) => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {tabs.map((tab) => (
          <Tab
            onClick={() => onTabClick(tab)}
            key={tab}
            selected={selectedTab === tab}
          >
            {tab}
          </Tab>
        ))}
      </div>
    </div>
  );
};
