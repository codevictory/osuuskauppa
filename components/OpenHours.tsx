import React from 'react';
import styles from '../styles/OpenHours.module.scss';

export const OpenHours = () => {
  return (
    <>
      <p className={styles.openHoursText}>ma-la 12:00-19:00</p>
      {/* Only during summer season
      <p className={styles.openHoursDesc}>
        pe-la 11:00-21:00
      </p>
      */}
      <h2 className={styles.openHoursTitle}>Tervetuloa!</h2>
    </>
  );
};
