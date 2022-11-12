import styles from '../styles/Index.module.scss';
import Image from 'next/image';
import { OpenHours } from '../components/OpenHours';
import { ScrollToTop } from '../components/ScrollToTop';

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
            loading='lazy'
          />
          <h1 className={styles.title}>Kauppa&Ravintola&Kahvila&Baari</h1>
        </header>

        <section className={styles.sectionContainer}>
          <OpenHours />
          <Image
            className={styles.keepersImage}
            src='/elvira-iveta.png'
            layout='responsive'
            alt='shop keepers'
            width={251}
            height={251}
            loading='lazy'
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
                loading='lazy'
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
                loading='lazy'
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
            className={styles.menuImage}
            src='/restaurant.webp'
            layout='responsive'
            alt='restaurant'
            width={506}
            height={89}
            loading='lazy'
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

        <section className={styles.sectionContainer}>
          <h1 className={styles.title + ' ' + styles.instagramText}>
            Seuraa meitä{' '}
            <a
              href='https://www.instagram.com/livonsaaren_osuuskauppa/'
              className={styles.instagramLink}
            >
              @Instagramissa
            </a>
          </h1>
        </section>

        <span className={styles.separator} />

        <section className={styles.sectionContainer}>
          <h1 className={styles.title}>Teemme yhteistyötä</h1>
          <Image
            src='/collaboration.png'
            layout='responsive'
            alt='yhteystyö'
            width={496}
            height={326}
            loading='lazy'
          />
        </section>

        <span className={styles.separator} />

        <section className={styles.sectionContainer}>
          <OpenHours />
          <iframe
            className={styles.googleMaps}
            src='https://maps.google.com/maps?q=Velkuantie%20988%2C%20Livonsaari%2C%20Finland&t=m&z=13&output=embed&iwloc=near'
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </section>

        <span className={styles.separator} />

        <ScrollToTop />
      </div>
    </div>
  );
}
