import React from 'react';
import styles from '../styles/OpenHours.module.scss';

export const OpenHours = () => {
  return (
    <>
      <h2 className={styles.openHoursTitle}>Auki:</h2>
      <p className={styles.openHoursText}>ma-la 12:00-19:00</p>
      <p className={styles.openHoursDesc}>
        kysynnän ja sään salliessa myös pidempään
      </p>
      <h2 className={styles.openHoursTitle}>Tervetuloa!</h2>
    </>
  );
};
