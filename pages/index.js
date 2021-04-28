import Head from "next/head";
//import styles from "../styles/Home.module.css";
import HeroLanding from "../sections/heroLanding";
import ListOfCities from "../sections/coolspotsCityList";
import { Container, Grid } from "@material-ui/core";

import "fontsource-roboto";
import Header from "../components/header";

export default function Home(city) {
  return (
    <div>
      <Head>
        <title>Coolspots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container direction="row" justify="space-between" alignItems="center">
        <HeroLanding />

        <ListOfCities />
      </Container>
    </div>
  );
}
