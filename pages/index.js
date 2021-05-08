import Head from "next/head";
import ListOfCities from '../sections/ListOfCities';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "@material-ui/core";

export default function Home({ }) {
  return (
    <>
    <React.Fragment>
      <Head>
        <title>coolspots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <CssBaseline />
        <Container maxWidth="lg">
      
            
<h2>
            The first ever OaaS, office as a service☕️ 👩🏻‍💻
            Coffeeshops, co-working spaces, your fellow remoters... in one place! Join Coolspots to get access to different locations all around the world. Working remotely doesn't mean isolation!
            </h2>
        <ListOfCities />
        </Container>
      </React.Fragment>
    </>

  );
}
