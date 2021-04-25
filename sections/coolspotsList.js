import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Heading, Paragraph } from "evergreen-ui";

function CoolspotsList() {
  return (
    <div className={styles.grid}>
      <Heading size={800} fontFamily="Avenir">
        Locations
      </Heading>

      <Paragraph>Book from one of the available locations below</Paragraph>

      <Link href="/artysana">
        <a className={styles.card}>Artysana</a>
      </Link>
      <Link href="/artysana">
        <a className={styles.card}>Ubik – Work, Coffee & Books</a>
      </Link>
      <Link href="/artysana">
        <a className={styles.card}>Bluebell Coffee</a>
      </Link>
      <Link href="/artysana">
        <a className={styles.card}>Federal – Café</a>
      </Link>
    </div>
  );
}
export default CoolspotsList;
