import React from 'react';
import styles from '../styles/Header.module.scss';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className={styles.mainContainer}>
      <span className={styles.addressText}>
        Velkuantie 988, 21180 Livonsaari
      </span>
      <Image
        src='/LO_logo-full_color.webp'
        layout='responsive'
        alt='main'
        width={528}
        height={237}
      />
      <span className={styles.subTitleText}>
        Kauppa&Ravintola&Kahvila&Baari
      </span>
    </header>
  );
};
