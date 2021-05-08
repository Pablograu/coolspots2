import Head from "next/head";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";



const howitworks = () => {
  return (
    <Container>
      <Head>
        <title>How it works</title>
      </Head>
      <h1>One membership for coffee, food and your work-station</h1>
      <p>Join Coolspots to try different co-working spaces all around the world. Working remotely doesn't have to be by yourself.</p>
      <h2>What can I book with Coolspots?</h2>
      <div style={{display: "grid", gridGap: "10px", gridTemplateColumns: "auto auto auto", gridaAutoFlow: "row" }}>
      <div>
          <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y28lMjB3b3JraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" width="240px"></img>
          <h6>Co-working spaces</h6>
      </div>
      <div>
          <img src="https://images.unsplash.com/photo-1530088172039-5aa64cd6d3b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" width="240px"></img>
          <h6>Cofeeshops</h6>
      </div>
      <div>
          <img src="https://images.unsplash.com/photo-1587275599595-224cb9a4ff48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVldGluZyUyMHJvb21zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" width="240px"></img>
          <h6>Meeting rooms</h6>
      </div>
      </div>
      <p>Book through Coolspots to get a guaranteed desk in all our locations and find a community of remote workers</p>
      <Button variant="contained" color="primary">Get started</Button>
    </Container>
  );
};
export default howitworks;
