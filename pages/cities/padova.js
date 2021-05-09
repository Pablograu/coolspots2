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
  heroContent: {
    backgroundColor: theme.palette.background.paper,
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
  const metodoZeroImg = "https://images.unsplash.com/photo-1620455804128-6e90bd608e1a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.heroContent}>
        {/* Hero unit */}

          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Padova
            </Typography>
            <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
            >Padua is a city and comune in Veneto, northern Italy. Padua is on the river Bacchiglione, west of Venice. It is the capital of the province of Padua. It is also the economic and communications hub of the area. Padua's population is 214,000.</Typography>
          </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* Card  */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea href="/cities/padova/metodozero">
                  <CardMedia
                    className={classes.cardMedia}
                    image={metodoZeroImg}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Metodo Zero
                    </Typography>
                    <Typography>
                      Metodo Zero Coworking offre a Padova tutto ciò in un
                      ambiente rilassato e confortevole che garantisce sia la
                      privacy che la sicurezza mettendo ogni coworker in grado
                      di confrontarsi con altri, far nascere progetti,
                      condividere pensieri e progetti in totale autonomia e
                      libertà.
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
                    image="https://metodo-zero.it/wp-content/uploads/2020/05/Worketteria-2-2048x1536.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Blended
                    </Typography>
                    <Typography>Description</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>

      {/* End footer */}
    </React.Fragment>
  );
}
