import React from 'react';
import Image from 'next/image';
import styles from '../styles/Contact.module.scss';

export const Contact = () => {
  return (
    <section className={styles.mainContainer}>
      <Image
        className={styles.keepersImage}
        src='/elvira-iveta.png'
        layout='responsive'
        alt='shop keepers'
        width={251}
        height={251}
      />
      <span className={styles.emailAddress}>
        info@livonsaarenosuuskauppa.fi
      </span>
      <span className={styles.phone}>+358 40 0460600</span>
      <div className={styles.someContainer}>
        <a href='https://www.facebook.com/LivonsaarenOsuuskauppa/'>
          <Image
            className={styles.someIcon}
            src='/fb-icon.png'
            layout='responsive'
            alt='facebook'
            width={300}
            height={300}
          />
        </a>
        <a href='https://www.instagram.com/livonsaaren_osuuskauppa/'>
          <Image
            className={styles.someIcon}
            src='/insta-icon.png'
            layout='responsive'
            alt='facebook'
            width={300}
            height={300}
          />
        </a>
      </div>
      <span className={styles.separator} />
    </section>
  );
};
