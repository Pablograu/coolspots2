import Head from "next/head";
import HeroLanding from "../sections/heroLanding";
import ListOfCities from "../sections/ListOfCities";
import { Container } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Head>
        <title>coolspots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container direction="row" justify="space-between" alignItems="center">
        <HeroLanding />

        <ListOfCities />
      </Container>
    </div>
  );
}
