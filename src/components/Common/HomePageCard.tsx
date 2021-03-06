import React, { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import NoPoster from "../../assets/comingSoon.jpg";

type PropsType = {
  poster: string | null;
  title: string;
  realese: number | string;
  voteAverage: number;
  name: string;
  firstAirDate: string;
};

const HomePageCard: FC<PropsType> = ({
  poster,
  title,
  realese,
  voteAverage,
  name,
  firstAirDate,
}) => {
  let votes = voteAverage.toLocaleString().replace(".", "");
  if (votes.length < 2) {
    votes = votes + "0";
  }
  const voteNumber = parseInt(votes);

  const trailColorLine = (value: number) => {
    if (value < 30) {
      return "#fd1818";
    } else if (value > 30 && value < 70) {
      return "#ffff5d";
    } else {
      return "#50ff50de";
    }
  };

  return (
    <div className="card">
      <div className="card__img">
        {poster === null ? (
          <img src={NoPoster} alt="pic"  loading='lazy'/>
        ) : (
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="pic"  loading='lazy'/>
        )}
      </div>
      <div className="card__popular">
        <CircularProgressbar
          value={voteNumber}
          text={`${voteNumber}%`}
          background
          styles={buildStyles({
            textColor: "#fff",
            textSize: "3rem",
            strokeLinecap: "red",
            backgroundColor: "#000",
            trailColor: "#3d543fba",
            pathColor: trailColorLine(voteNumber),
          })}
        />
      </div>
      <div className="card__info">
        <h3 className="card__info__title">{title ? title : name}</h3>
        <span className="card__info__realease">
          {realese ? realese : firstAirDate}
        </span>
      </div>
    </div>
  );
};

export default HomePageCard;
