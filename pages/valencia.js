import React from "react";
import CoolspotsList from "../sections/coolspotsList";

import styles from "../styles/Home.module.css";

const Valencia = () => (
  <div>
    <main className={styles.main}>
      <h1 className={styles.title}>
        <a href="https://coolspots.io">
          <img
            src="/coolspots.svg"
            alt="Coolspots Logo"
            className={styles.logo}
          />
        </a>
      </h1>
      <CoolspotsList />
    </main>
  </div>
);
export default Valencia;
