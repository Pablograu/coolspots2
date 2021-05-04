import Head from "next/head";
import ListOfCities from '../sections/ListOfCities'
import Header from "../components/header";
import {Container} from '@material-ui/core'



export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>coolspots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
      <ListOfCities />
      </Container>
    </div>
  );
}
