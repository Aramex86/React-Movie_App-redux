import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import NoPhoto from '../../assets/noImage.png';

import { Link } from "react-router-dom";

import { CreditsType } from "../../Types/Types";

type PropsType = {
  credits: CreditsType | null;
};



const CardActors = ({ credits }: PropsType) => {
  const actors = credits?.cast.slice(0, 8);
  return (
    <div className="actorsWrapp">
      <h3 className="actorsWrapp__heading">Top Billed Cast</h3>
      <div className="actorsWrapp__cardsWrapp">
        <div className="actorsWrapp__cardsWrapp-cards">
          {actors?.map((actor) => (
            <Link to="/actorslist" className="actorslist" key={actor.id}>
              <Card className='cardStyle'>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="actor photo"
                    height="150"
                    image={actor.profile_path===null?`${NoPhoto}`:`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className="name1"
                    >
                      {actor.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className="name2"
                      style={{
                        fontSize: "1.5rem",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {actor.character}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
            </Link>
          ))}
          <Link to="/actorslist">
            View More <ArrowForwardRoundedIcon />
          </Link>
        </div>
      </div>
      <h4>
        <Link to="/actorslist">Full Cast & Crew</Link>
      </h4>
    </div>
  );
};

export default CardActors;
