import React from 'react';
import styles from '../styles/OpenHours.module.scss';

export const OpenHours = () => {
  return (
    <section className={styles.mainContainer}>
      <h2 className={styles.openHoursBold}>Auki:</h2>
      <span className={styles.openHours}>ma-la 12:00-19:00</span>
      <p className={styles.openHoursDesc}>
        kysynnän ja sään salliessa myös pidempään
      </p>
      <h2 className={styles.openHoursBold}>Tervetuloa!</h2>
    </section>
  );
};
