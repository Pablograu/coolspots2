import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { GridList, GridListTile } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    margin: 32,
    width: "100vh",
    height: "auto",
  },
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
}));

export default function CafeDeCo() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />

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
            Cafe de Co
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Lorem ipsum
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Button variant="contained" color="secondary">
                Reserve a spot
              </Button>
            </Grid>
          </div>
        </Container>
      </div>

      {/* End hero unit */}
      <Container maxWidth="md">
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          <GridListTile cols={2} rows={2}>
            <img
              src="https://images.pexels.com/photos/2193600/pexels-photo-2193600.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="coffeeshop"
            />
          </GridListTile>
          <GridListTile cols={1}>
            <img
              src="https://images.pexels.com/photos/2478330/pexels-photo-2478330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="coffeeshop"
            />
          </GridListTile>
          <GridListTile cols={1}>
            <img
              src="https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="coffeeshop"
            />
          </GridListTile>
          <GridListTile cols={1}>
            <img
              src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="coffeeshop"
            />
          </GridListTile>
        </GridList>
        <Typography>
          De la filosofía y estilo de vida de Wayco nace Café de CO para que
          disfrutes de un desayuno, almuerzo o afterwork en un espacio
          inspirador y muy acogedor. Enjoy our collaborative, international and
          creative environment! Te esperamos de lunes a viernes de 8:30h a
          21:30h y los sábados de 8:30h a 14:00h
        </Typography>
      </Container>

      {/* End footer */}
    </React.Fragment>
  );
}
