import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Footer from "./Footer";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Company</title>
        <meta name="description" content="Generated by NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div className={styles.flex_column}>
              <div className={styles.logoitem}>
                <Image src="/img/logo.png" alt="photo" width="770px" height="190px" />
              </div>
              <h1 className={styles.logotitle}>🌟 ДЕТСКИЙ САД МЕЧТЫ 🌟</h1>
              <div className={styles.menu_box}>
                  <a className={styles.menu_item} href="#about">Инфо о нас</a>
                  <a className={styles.menu_item} href="#contact">Контакты</a>
              </div>
          </div>
          <PartOne />
          <PartTwo />
          <Footer />
      </main>
    </div>
  )
}