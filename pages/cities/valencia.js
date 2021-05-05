import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Padova() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        {/* Hero unit */}
          <Container maxWidth="sm" className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Valencia
            </Typography>
            <div className={classes.heroButtons}></div>
          </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* Card  */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea href="/cities/valencia/waycoabastos">
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://hs.wayco.es/hubfs/team%20office%20la%20rueca%20(8)-2.jpg"
                    title="Wayco abastos"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      WayCo Abastos
                    </Typography>
                    <Typography>
                      Description lorem ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Card  */}

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea href="/cities/padova/#">
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://coworkingruzafa.wayco.es/hubfs/coworking-2.jpg"
                    title="Wayco ruzafa"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      WayCo Ruzafa
                    </Typography>
                    <Typography>Description</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>

      {/* End footer */}
    </React.Fragment>
  );
}
