import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { Heading } from "evergreen-ui";

function CoolspotsCityList() {
  return (
    <div className={styles.grid}>
      <Heading size={800} fontFamily="Avenir">
        Locations
      </Heading>
      <div className={styles.grid}>
        <Link href="/valencia">
          <a className={styles.card}>Valencia</a>
        </Link>

        <div className={styles.card}>Padova</div>
        <div className={styles.card}>Barcelona</div>
        <div className={styles.card}>Bali</div>
        <div className={styles.card}>Bangkok</div>
      </div>
    </div>
  );
}
export default CoolspotsCityList;
