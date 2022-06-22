import styles from "./Home.module.scss";

type HomeProps = {};

export const Home: React.FC<HomeProps> = () => {
  return <div className={styles.home}></div>;
};
