import React from 'react';
import styles from '../styles/PostService.module.scss';

export const PostService = () => {
  return (
    <section className={styles.mainContainer}>
      <h1 className={styles.title}>Postin automaattipalvelu</h1>
      <p className={styles.desc}>
        Lähetä tai nouda paketti Postin pakettiautomaatista Livonsaaren
        Osuuskaupasta
      </p>
      <span className={styles.info}>ma-la 12:00-19:00</span>
      <span className={styles.info}>Velkuantie 988, 21180 Livonsaari</span>
      <a href='https://www.smartpost.fi/' className={styles.link}>
        Lisätietoja
      </a>
      <span className='separator' />
    </section>
  );
};
