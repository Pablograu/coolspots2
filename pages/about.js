import Head from "next/head";
import Container from "@material-ui/core/Container";

const about = () => {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <h1>About Page</h1>
      <p>The first ever OaaS, office as a service☕️ 👩🏻‍💻</p>
      <p>Coffeeshops, co-working spaces, your fellow remoters... in one place! <br/> Join Coolspots to get access to different locations all around the world. Working remotely doesn't mean isolation!</p>
    </Container>
  );
};
export default about;
