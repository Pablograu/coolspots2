import React from "react";
import { Paragraph, Heading, Pane } from "evergreen-ui";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #0f2027, #203a43, #2c5364)",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 32,
    padding: "0 30px",
  },
});

function HeroLanding() {
  const classes = useStyles();

  return (
    <Grid>
      <Heading size={900} fontFamily="Avenir" color="#424242">
        The first ever OaaS, office as a service
        <span role="img" aria-label="coffee">
          ☕️
        </span>{" "}
        <span role="img" aria-label="co-working">
          👩🏻‍💻
        </span>{" "}
      </Heading>
      <Paragraph fontFamily="Avenir" color="#424242">
        Coffeeshops, co-working spaces, your fellow remoters... in one place!
        Join Coolspots to get access to different locations all around the
        world. Working remotely doesn't mean isolation!
      </Paragraph>
      <div //buttons container
      >
        <Button className={classes.button}>Get started</Button>
      </div>
    </Grid>
  );
}

export default HeroLanding;
