import styles from '../styles/Index.module.scss';
import Image from 'next/image';
import { OpenHours } from '../components/OpenHours';
import { ScrollToTop } from '../components/ScrollToTop';
import { NextSeo } from 'next-seo';
import { FiExternalLink, FiDownload } from 'react-icons/fi';

export default function Index() {
  return (
    <>
      <NextSeo
        title='Livonsaaren Osuuskauppa'
        description='Kyläkauppa, kahvila, ravintola ja baari Livonsaarella'
      />
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <header className={styles.sectionContainer}>
            <span className={styles.address}>
              Velkuantie 988, 21180 Livonsaari
            </span>
            <Image
              className={styles.mainLogo}
              src='/big-logo.webp'
              alt='logo'
              width={528}
              height={237}
              loading='lazy'
            />
            <h1 className={styles.title + ' ' + styles.underLogo}>
              Kauppa&Ravintola&Kahvila&Baari
            </h1>
          </header>

          <section className={styles.sectionContainer}>
            <h2 className={styles.openHoursTitle}>Auki:</h2>
            <OpenHours />
            <Image
              className={styles.mainImage}
              src='/main.png'
              alt='kaupan julkisivu'
              width={150}
              height={150}
              loading='lazy'
            />
            <span className={styles.emailAddress}>
              livonsaarenosuuskauppa@gmail.com
            </span>
            <span className={styles.phone}>+358 40 0460600</span>
            <div className={styles.socialMediaContainer}>
              <a href='https://www.facebook.com/LivonsaarenOsuuskauppa/'>
                <Image
                  className={styles.socialMediaIcon}
                  src='/fb-icon.png'
                  alt='facebook'
                  width={100}
                  height={100}
                  loading='lazy'
                />
              </a>
              <a href='https://www.instagram.com/livonsaaren_osuuskauppa/'>
                <Image
                  className={styles.socialMediaIcon}
                  src='/insta-icon.png'
                  alt='instagram'
                  width={100}
                  height={100}
                  loading='lazy'
                />
              </a>
            </div>
          </section>

          <span className={styles.separator} />

          <section className={styles.sectionContainer}>
            <h1 className={styles.title}>Postin pakettiautomaatti</h1>
            <p className={styles.postServiceDesc}>
              Lähetä tai nouda paketti Postin pakettiautomaatista Livonsaaren
              Osuuskaupasta
            </p>
            <OpenHours />
            <span className={styles.postServiceInfo}>
              Velkuantie 988, 21180 Livonsaari
            </span>
            <a href='https://www.smartpost.fi/' className={styles.link}>
              Lisätietoja <FiExternalLink />
            </a>
          </section>

          <span className={styles.separator} />

          <section className={styles.sectionContainer}>
            <h1 className={styles.title}>Tervetuloa kahvilaan!</h1>
            <Image
              className={styles.menuImage}
              src='/restaurant.webp'
              alt='ravintola'
              width={506}
              height={89}
              loading='lazy'
            />
            <h1 className={styles.title}>Alla syyskauden tarjoilut</h1>
            <div className={styles.menuContainer}>
              {/* Only during summer season */}
              <a href='/ravintola.pdf' className={styles.menuLink}>
                <h1 className={styles.title}>Ruoat</h1>
              </a>
              <a href='/baari.pdf' className={styles.menuLink}>
                <h1 className={styles.title}>Juomat</h1>
              </a>
            </div>
            <a href='/oiva.pdf' className={styles.link + ' ' + styles.oivaLink}>
              Oiva-raportti <FiDownload />
            </a>
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
            <div className={styles.instagramImagesContainer}>
              <Image
                className={styles.instagramImage}
                src='/kauppa.png'
                alt='kauppa ulkoa'
                width={650}
                height={650}
                loading='lazy'
              />
              <Image
                className={styles.instagramImage}
                src='/cafe.png'
                alt='kahvi ja leivos'
                width={650}
                height={650}
                loading='lazy'
              />
              <Image
                className={styles.instagramImage}
                src='/bar.png'
                alt='kaupan baari'
                width={650}
                height={650}
                loading='lazy'
              />
            </div>
          </section>

          <span className={styles.separator} />

          <section className={styles.sectionContainer}>
            <h1 className={styles.title}>Teemme yhteistyötä</h1>
            <Image
              className={styles.collaborationImage}
              src='/collaboration.png'
              alt='yhteystyö'
              width={496}
              height={326}
              loading='lazy'
            />
          </section>

          <span className={styles.separator} />

          <section className={styles.sectionContainer}>
            <h2 className={styles.openHoursTitle}>Auki:</h2>
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
    </>
  );
}
