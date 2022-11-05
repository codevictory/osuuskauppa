import styles from '../styles/Index.module.scss';
import Image from 'next/image';

export default function Index() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <header className={styles.sectionContainer}>
          <span className={styles.address}>
            Velkuantie 988, 21180 Livonsaari
          </span>
          <Image
            className={styles.mainLogo}
            src='/big-logo.webp'
            alt='main'
            width={528}
            height={237}
          />
          <h1 className={styles.title}>Kauppa&Ravintola&Kahvila&Baari</h1>
        </header>

        <section className={styles.sectionContainer}>
          <h2 className={styles.openHoursTitle}>Auki:</h2>
          <p className={styles.openHoursText}>ma-la 12:00-19:00</p>
          <p className={styles.openHoursDesc}>
            kysynnän ja sään salliessa myös pidempään
          </p>
          <h2 className={styles.openHoursTitle}>Tervetuloa!</h2>
        </section>

        <section className={styles.sectionContainer}>
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
          <div className={styles.socialMediaContainer}>
            <a href='https://www.facebook.com/LivonsaarenOsuuskauppa/'>
              <Image
                className={styles.socialMediaIcon}
                src='/fb-icon.png'
                layout='responsive'
                alt='facebook'
                width={300}
                height={300}
              />
            </a>
            <a href='https://www.instagram.com/livonsaaren_osuuskauppa/'>
              <Image
                className={styles.socialMediaIcon}
                src='/insta-icon.png'
                layout='responsive'
                alt='facebook'
                width={300}
                height={300}
              />
            </a>
          </div>
        </section>

        <span className={styles.separator} />

        <section className={styles.sectionContainer}>
          <h1 className={styles.title}>Postin automaattipalvelu</h1>
          <p className={styles.postServiceDesc}>
            Lähetä tai nouda paketti Postin pakettiautomaatista Livonsaaren
            Osuuskaupasta
          </p>
          <span className={styles.postServiceInfo}>ma-la 12:00-19:00</span>
          <span className={styles.postServiceInfo}>
            Velkuantie 988, 21180 Livonsaari
          </span>
          <a href='https://www.smartpost.fi/' className={styles.link}>
            Lisätietoja
          </a>
        </section>

        <span className={styles.separator} />

        <section className={styles.sectionContainer}>
          <h1 className={styles.title}>Tervetuloa ravintolaan!</h1>
          <Image
            src='/restaurant.webp'
            layout='responsive'
            alt='restaurant'
            width={300}
            height={300}
          />
          <h1 className={styles.title}>Alla kesäkauden tarjoilut</h1>
          <div className={styles.menuContainer}>
            <a href='/ravintola.pdf' className={styles.menuLink}>
              <h1 className={styles.title}>Ruoat</h1>
            </a>
            <a href='/baari.pdf' className={styles.menuLink}>
              <h1 className={styles.title}>Juomat</h1>
            </a>
          </div>
        </section>

        <span className={styles.separator} />
      </div>
    </div>
  );
}
