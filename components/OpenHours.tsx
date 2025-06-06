import React from 'react';
import styles from '../styles/OpenHours.module.scss';

type OpenHoursProps = {
  kitchenNotice?: boolean;
};

export const OpenHours = ({ kitchenNotice }: OpenHoursProps) => {
  return (
    <>
      <p className={styles.openHoursText}>su-to 9:00-19:00</p>
      {/* Only during summer season */}
      <p className={styles.openHoursDesc}>
        pe-la 9:00-21:00
      </p>
      {kitchenNotice && (<p className={styles.openHoursDesc}>Keittiö auki klo 12:00-19:00</p>)}


      <h2 className={styles.openHoursTitle}>Tervetuloa!</h2>
    </>
  );
};
