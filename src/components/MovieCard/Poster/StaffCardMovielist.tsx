import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  CombineCreditsCrewType,
  CombinedCreditsCastType,
} from "../../../Types/Types";
import { Link } from "react-router-dom";

type PropsTypes = {
  combineCast: Array<CombinedCreditsCastType>;
  combineCrew: Array<CombineCreditsCrewType>;
};

const StaffCardMovielist: React.FC<PropsTypes> = ({
  combineCast,
  combineCrew,
}) => {
  let data = [...combineCast, ...combineCrew];

  //remove the same
  const dataArr: any = data.map((item) => {
    return [item.id, item];
  });
  const mapArr: any = new Map(dataArr);
  const result = [...mapArr.values()];

  // console.log(result)

  return (
    <div className="cardswrapp">
      {result.map((c) => (
        <Link to={`/movie-card/${c.id}`} key={c.credit_id}>
          <Card className={c.poster_path == null ? "movies__hide" : "movies"}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={c.title}
                height="250"
                image={`https://image.tmdb.org/t/p/w500${c.poster_path}`}
                title={c.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {c.title == null ? c.name : c.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default StaffCardMovielist;
