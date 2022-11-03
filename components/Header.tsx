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
        src='/big-logo.webp'
        layout='responsive'
        alt='main'
        width={528}
        height={237}
      />
      <h1 className={styles.subTitleText}>Kauppa&Ravintola&Kahvila&Baari</h1>
    </header>
  );
};
