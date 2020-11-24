import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CombinedCreditsCastType } from "../../../Types/Types";

type PropsTypes = {
  combineCast: Array<CombinedCreditsCastType>;
};

const StaffCardMovielist: React.FC<PropsTypes> = ({ combineCast }) => {
  return (
    <div className="cardswrapp">
      {combineCast.map((c) => (
        <Card className={c.poster_path == null ? "movies__hide" : "movies"} key={c.credit_id}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={`https://image.tmdb.org/t/p/w500${c.poster_path}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {c.title == null ? c.name : c.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default StaffCardMovielist;
