import React from "react";
import { Paragraph, Heading, Pane } from "evergreen-ui";
import { Button, Container, Grid } from "@material-ui/core";

function HeroLanding() {
  return (
    <Grid>
      <Heading size={900} fontFamily="Avenir" color="#424242">
        The first ever OaaS, office as a service
        <span role="img" aria-label="coffee">
          ☕️
        </span>{" "}
        <span role="img" aria-label="coding">
          👩🏻‍💻
        </span>{" "}
      </Heading>
      <Paragraph f color="#424242">
        Coffeeshops, co-working spaces, your fellow remoters... in one place!
        Join Coolspots to get access to different locations all around the
        world. Working remotely doesn't mean isolation!
      </Paragraph>
      <div //buttons container
      >
        <Button appearance="primary">Get started</Button>
      </div>
    </Grid>
  );
}

export default HeroLanding;
