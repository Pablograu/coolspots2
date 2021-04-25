import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroLanding from "../sections/heroLanding";
import CoolspotsCityList from "../sections/coolspotsCityList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coolspots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://coolspotsnext.vercel.app/">
            <img
              src="/coolspots.svg"
              alt="Coolspots Logo"
              className={styles.logo}
            />
          </a>
        </h1>

        <HeroLanding />
        <CoolspotsCityList />
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <img
            src="/coolspots.svg"
            alt="Coolspots Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
