import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { OpenHours } from '../components/OpenHours';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Header />
        <OpenHours />
        <Contact />
      </div>
    </div>
  );
}
