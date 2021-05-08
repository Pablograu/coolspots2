import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


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
const tile = [
 {
     img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FmZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
     title: 'Image',
     author: 'author',
     cols: 2,
   },
 ];


export default function Padova() {
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
              Metodo Zero
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Metodo Zero Coworking offre a Padova tutto ciò in un ambiente
              rilassato e confortevole che garantisce sia la privacy che la
              sicurezza mettendo ogni coworker in grado di confrontarsi con
              altri, far nascere progetti, condividere pensieri e progetti in
              totale autonomia e libertà.
            </Typography>
            <Link href="https://nomadlist.com/padova">source: nomadlist</Link>
            
          </Container>
          

        </div>
        <Container className={classes.cardGrid} maxWidth="md">
        <GridList cellHeight={160} className={classes.gridList} cols={3}>

          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
      </GridList>
        </Container>
      </main>
    </React.Fragment>
  );
}
