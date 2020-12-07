import React, { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

type PropsType = {
  poster: string;
  title: string;
  realese: number | string;
  popularity: number;
};

const HomePageCard: FC<PropsType> = ({
  poster,
  title,
  realese,
  popularity,
}) => {
  const popular = (popularity * 100) / 100;

  const percent = Math.round(popular);

  return (
    <div className="card">
      <div className="card__img">
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="pic" />
      </div>
      <div className="card__popular">
        <CircularProgressbar
          value={percent}
          text={percent > 100 ? `100%` : `${percent}%`}
          background
          styles={buildStyles({
            //trail: { stroke: "#fff" },
            textColor: "#fff",
            textSize: "3rem",
            backgroundColor: "#000",
            trailColor: `${percent < 70 ? "yellow" : "#3d543fba"}`,
            pathColor: `${percent < 70 ? "yellow" : "#4aff5d"}`,
          })}
        />
      </div>
      <div className="card__info">
        <h3 className="card__info__title">{title}</h3>
        <span className="card__info__realease">{realese}</span>
      </div>
    </div>
  );
};

export default HomePageCard;
