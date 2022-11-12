import React from 'react';
import Image from 'next/image';
import styles from '../styles/ScrollToTop.module.scss';

export const ScrollToTop = () => {
  return (
    <a className={styles.scrollToTopButton} href='#top'>
      <Image
        src='/angle-top.png'
        alt='scroll to top button'
        width={15}
        height={9}
        loading='lazy'
      />
    </a>
  );
};
