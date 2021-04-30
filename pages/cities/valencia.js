import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
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

export default function Valencia() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
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
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* Card  */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea href="/cities/valencia/cafedeco">
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic3.lasprovincias.es%2Fwww%2Fmultimedia%2F201810%2F29%2Fmedia%2Fcortadas%2Fcafe-madrid-valencia-kgUB-U6013967615186QB-624x385%40Las%2520Provincias.jpg&f=1&nofb=1"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Cafè deCO
                    </Typography>
                    <Typography>Lorem ipsum</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Card  */}

            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea href="/cities/valencia/#">
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://metodo-zero.it/wp-content/uploads/2020/05/Worketteria-2-2048x1536.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      WayCO
                    </Typography>
                    <Typography>Description</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
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
