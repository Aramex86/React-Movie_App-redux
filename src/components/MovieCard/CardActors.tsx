import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

import testactor from "../../assets/testactor.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 168,
  },
});

const CardActors = () => {
  const classes = useStyles();

  return (
    <div className="actorsWrapp">
      <h3 className="actorsWrapp__heading">Top Billed Cast</h3>
      <div className="actorsWrapp__cardsWrapp">
      <div className="actorsWrapp__cardsWrapp-cards">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="150"
              image={testactor}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="name1"
              >
                Joaquin Phoenix
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="name2"
              >
                Arthur Fleck / Joke
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="150"
              image={testactor}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="name1"
              >
                Joaquin Phoenix
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="name2"
              >
                Arthur Fleck / Joke
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="150"
              image={testactor}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="name1"
              >
                Joaquin Phoenix
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="name2"
              >
                Arthur Fleck / Joke
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="150"
              image={testactor}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="name1"
              >
                Joaquin Phoenix
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="name2"
              >
                Arthur Fleck / Joke
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="150"
              image={testactor}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="name1"
              >
                Joaquin Phoenix
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="name2"
              >
                Arthur Fleck / Joke
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="150"
              image={testactor}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="name1"
              >
                Joaquin Phoenix
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="name2"
              >
                Arthur Fleck / Joke
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="150"
              image={testactor}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className="name1"
              >
                Joaquin Phoenix
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className="name2"
              >
                Arthur Fleck / Joke
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions></CardActions>
        </Card>

        <a href="#">View More <ArrowForwardRoundedIcon/></a>
      </div>
      </div>
      <h4><a href='#'>Full Cast & Crew</a></h4>
    </div>
  );
};

export default CardActors;
