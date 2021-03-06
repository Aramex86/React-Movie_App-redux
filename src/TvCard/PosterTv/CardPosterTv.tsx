import React from "react";

import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CreditsType, GenresType, TvDetailType } from "../../Types/Types";
import { crewStaff, crewStaffTV } from "../../components/Helper/crewstaff";
import { Link } from "react-router-dom";
import NoPoster from '../../assets/comingSoon.jpg';

type PropsType = {
  details: null | TvDetailType;
  original_title: string | undefined;
  release_date: undefined | string;
  original_language: undefined | string;
  genres: undefined | Array<GenresType>;
  runtime: undefined | Array<number>;
  popularity: undefined | number;
  overview: undefined | string;
  credits: CreditsType | null;
  handaleplay: () => void;
};

const CardPoster = (props: PropsType) => {
  const creator = props.details?.created_by.map((c) => c.name).toLocaleString();
  const id = props.details?.created_by.map((id) => id.id);

  const crew: any = [];

  const voteAvarage = props.details?.vote_average
    ? props.details.vote_average
    : "";

  let votes = voteAvarage.toLocaleString().replace(".", "");
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

  // if (props.credits?.crew) {
  //   crewStaffTV(props.credits?.crew, "Directing", crew);
  // }

  return (
    <div
      className="posterWrapp"
      style={{
        background: `linear-gradient(to left, #7f7f7f9e, black), url(https://image.tmdb.org/t/p/w500/${props.details?.poster_path}) no-repeat`,
      }}
    >
      <div className="posterWrapp__img">
      {props.details?.poster_path == null ? (
          <img
            src={NoPoster}
            alt="poster"
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.details?.poster_path}`}
            alt="poster"
          />
        )}
      </div>
      <div className="posterWrapp__info">
        <div className="posterWrapp__info-heading">
          <h2>
            {props.original_title}{" "}
            <span>({props.release_date?.slice(0, 4)})</span>{" "}
          </h2>
          <p>
            {props.release_date?.replaceAll("-", "/")} (
            {props.original_language?.toUpperCase()}){" "}
            {props.genres?.map((g) => (
              <span key={g.id}>{g.name}</span>
            ))}{" "}
            - {props.runtime ? `${props.runtime[0]} min` : ""}
          </p>
        </div>
        <div className="posterWrapp__info-actions">
          <ul className="posterWrapp__info-actions-list">
            <li className="posterWrapp__info-actions-item">
              <a
                href="#"
                className="posterWrapp__info-actions-link posterWrapp__info-actions-link--score"
              >
                <div>
                  <CircularProgressbar
                    value={voteNumber}
                    text={`${voteNumber}%`}
                    styles={buildStyles({
                      //trail: { stroke: "#fff" },
                      textColor: "#fff",
                      textSize: "3rem",
                      backgroundColor: "#000",
                      trailColor: "#3d543fba",
                      pathColor: trailColorLine(voteNumber),
                    })}
                  />
                </div>
                User Score
              </a>
            </li>
            <li className="posterWrapp__info-actions-item">
              <a
                href="#"
                className="posterWrapp__info-actions-link posterWrapp__info-actions-link--styled"
              >
                <FormatListBulletedRoundedIcon />
              </a>
              <div className="movieCrad__tolltip">
                Login to create and edit custom lists
              </div>
            </li>
            <li className="posterWrapp__info-actions-item">
              <a
                href="#"
                className="posterWrapp__info-actions-link posterWrapp__info-actions-link--styled"
              >
                <FavoriteRoundedIcon />
              </a>
              <div className="movieCrad__tolltip">
                Login to add this movie to your favourite list
              </div>
            </li>
            <li className="posterWrapp__info-actions-item">
              <a
                href="#"
                className="posterWrapp__info-actions-link posterWrapp__info-actions-link--styled"
              >
                <BookmarkRoundedIcon />
              </a>
              <div className="movieCrad__tolltip">
                Login to add this movie to your watchlist
              </div>
            </li>
            <li className="posterWrapp__info-actions-item">
              <a
                href="#"
                className="posterWrapp__info-actions-link posterWrapp__info-actions-link--styled"
              >
                <StarRoundedIcon />
              </a>
              <p className="movieCrad__tolltip">Login to rate this movie</p>
            </li>
            <li className="posterWrapp__info-actions-item">
              <button
                className="btn btn--postertrailer"
                onClick={props.handaleplay}
              >
                <PlayArrowRoundedIcon /> Play Trailer
              </button>
            </li>
          </ul>
        </div>
        <div className="posterWrapp__info-overview">
          <p>{props.overview}</p>
        </div>
        <div className="posterWrapp__info-cast">
          <ul className="posterWrapp__info-cast-list">
            <li className="posterWrapp__info-cast-item">
              <Link
                to={`/posterstaff/${id}`}
                className="posterWrapp__info-cast-link"
              >
                <p>{creator}</p>
                <p>Creator</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPoster;
