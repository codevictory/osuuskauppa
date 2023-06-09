import React from 'react';
import styles from '../styles/OpenHours.module.scss';

export const OpenHours = () => {
  return (
    <>
      <h2 className={styles.openHoursTitle}>Auki:</h2>
      <p className={styles.openHoursText}>
        su-to 09:00-19:00
        <br />
        pe-la 09:00-21:00
      </p>
      <p className={styles.openHoursDesc}>
        kysynnän ja sään salliessa myös pidempään
      </p>
      <h2 className={styles.openHoursTitle}>Tervetuloa!</h2>
    </>
  );
};
