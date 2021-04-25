import React from "react";
import styles from "../styles/Home.module.css";

import { Text, Link, Heading, Paragraph } from "evergreen-ui";

function CoolspotsList() {
  return (
    <div className={styles.grid}>
      <Heading size={800} fontFamily="Avenir">
        Locations
      </Heading>

      <Paragraph>Book from one of the available locations below</Paragraph>

      <div className={styles.card}>
        Artysana
        <Text>
          Address: Calle Denia 49 Ruzafa – Valencia (+34) 697.280.999
          info@cafeartysana.com
        </Text>
        <Link href="https://www.beinglocallyabroad.com/top-5-cafes-with-wifi-in-valencia/">
          Website
        </Link>
      </div>
      <div className={styles.card}>
        Ubik – Work, Coffee & Books
        <Text>Calle Literato Azorín 13 Valencia 46006 963741255</Text>
        <Link>#</Link>
      </div>
      <div className={styles.card}>
        Bluebell Coffee
        <Text>Address: Calle Buenos Aires, 3 Ruzafa – Valencia</Text>
        <Link>Website</Link>
      </div>
      <div className={styles.card}>
        Federal – Café with WIFI in the Center of Valencia
        <Text>Address: C/ Embajador Vich 15 46002 Valencia</Text>
        <Link>Website</Link>
      </div>
      <div className={styles.card}>
        Bastard Coffee and Kitchen – Food and WIFI{" "}
        <Text>Address: C/ Embajador Vich 15 46002 Valencia</Text>
        <Link>Website</Link>
      </div>
    </div>
  );
}
export default CoolspotsList;
