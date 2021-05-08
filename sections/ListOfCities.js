import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    display: "grid",
    padding: theme.spacing(2),
    flexGrow: 1,
    gridGap: "10px",
    height: "100vh",
    margin: 0,
    gridTemplateColumns: "auto auto auto",
  },
  root: {
    maxWidth: 345,
  },
}));

export default function ListOfCities() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.cardGrid}
      maxWidth="md"
      container
      spacing={1}
      direction="row"
      justify="space-between"
      alignItems="center"
      
    >

    {/*VALENCIA*/}
    <Grid item xs={12} md={24} key={2}>
        <Card className={classes.root}>
          <CardActionArea href="/cities/valencia">
            <CardMedia
              component="img"
              alt="Valencia"
              height="140"
              image="https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              title="Valencia"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Valencia
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Valencia is really walkable and cyclable and everything is
                pretty much within a 15-20 minute reach so maybe looking for a
                more economic location doesn´t make a big difference.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>


      {/*PADOVA*/}

      <Grid item xs md key={1}>
        <Card className={classes.root}>
          <CardActionArea href="/cities/padova">
            <CardMedia
              component="img"
              alt="Padova"
              height="140"
              image="https://images.pexels.com/photos/4513657/pexels-photo-4513657.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              title="Padua"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Padova
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Description
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      
    </Grid>
  );
}
