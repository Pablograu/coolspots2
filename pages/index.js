import Head from "next/head";
import ListOfCities from "../sections/ListOfCities";

export default function Home({cities }) {
  return (
    <div>
      <Head>
        <title>coolspots</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListOfCities />
    </div>
  );
}
