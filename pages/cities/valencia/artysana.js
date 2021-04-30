import React from "react";
import styles from "../styles/Home.module.css";
import { Text, Link } from "evergreen-ui";
import Button from "@material-ui/core/Button";

const Artysana = () => (
  <div>
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
      <h1 className={styles.title}>Artysana</h1>
      <Text>
        Address: Calle Denia 49 Ruzafa – Valencia (+34) 697.280.999
        info@cafeartysana.com
      </Text>
      <Link href="https://www.beinglocallyabroad.com/top-5-cafes-with-wifi-in-valencia/">
        Website
      </Link>
      <Button variant="contained" color="primary">
        Book
      </Button>
    </main>
  </div>
);
export default Artysana;
