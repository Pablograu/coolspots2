import React from "react";

import { Paragraph, Button, TextInput, Heading, Pane } from "evergreen-ui";

function HeroLanding() {
  return (
    <Pane
      //background="#f4f3f0"
      padding={64}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      border
    >
      <Pane>
        <Heading size={900} padding={16} fontFamily="Avenir" color="#424242">
          The first ever office as a service OaaS
          <span role="img" aria-label="coffee">
            ☕️
          </span>{" "}
          <span role="img" aria-label="coding">
            👩🏻‍💻
          </span>{" "}
          <span role="img" aria-label="group">
            💃
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
          <TextInput
            name="text-input-name"
            placeholder="Search for a cool spot..."
          />
          <Button appearance="primary" margin={16}>
            Get started
          </Button>
        </div>
      </Pane>
    </Pane>
  );
}

export default HeroLanding;
