import React from "react";

import { Paragraph, Heading, Pane } from "evergreen-ui";
import { Button } from "@material-ui/core";

function HeroLanding() {
  return (
    <Pane
      padding={64}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Pane>
        <Heading size={900} padding={16} fontFamily="Avenir" color="#424242">
          The first ever OaaS, office as a service
          <span role="img" aria-label="coffee">
            ☕️
          </span>{" "}
          <span role="img" aria-label="coding">
            👩🏻‍💻
          </span>{" "}
        </Heading>

        <Paragraph fontFamily="Avenir" padding={8} color="#424242">
          Coffeeshops, co-working spaces, your fellow remoters... in one place!{" "}
          <br />
          Join Coolspots to get access to different locations all around the
          world. Working remotely doesn't mean isolation!
        </Paragraph>
        <div //buttons container
        >
          <Button appearance="primary" margin={16}>
            Get started
          </Button>
        </div>
      </Pane>
    </Pane>
  );
}

export default HeroLanding;
