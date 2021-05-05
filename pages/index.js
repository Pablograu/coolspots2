import Head from "next/head";
import ListOfCities from '../sections/ListOfCities'
import Header from "../components/header";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Home({ }) {
  return (
    <>
    <React.Fragment>
      <Head>
        <title>coolspots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <CssBaseline />
        <Header />
        <ListOfCities />
      </React.Fragment>
    </>
  );
}
