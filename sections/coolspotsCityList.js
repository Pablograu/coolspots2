import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    display: "grid",
  gridTemplateAreas: 
    "header header header",
    "nav article ads",
  gridTemplateRows: "60px 1fr 60px",
  gridTemplateColumns: "20% 1fr 15%",
  gridGap: "10px",
  height: '100vh',
  margin: 0,
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
      spacing={2}
      direction="row"
      justify="space-between"
      alignItems="center"
    >
      {/*PADOVA*/}

      <Grid item xs={12} md={24}>
        <Card className={classes.root}>
          <CardActionArea href="/padova">
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
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/*VALENCIA*/}
      <Grid item xs={12} md={24}>
        <Card className={classes.root}>
          <CardActionArea href="/valencia">
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
                more economic location doesn´t make a big difference. There is
                not really a part in city center you should avoid so I find it
                hard to make a mistake there.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
