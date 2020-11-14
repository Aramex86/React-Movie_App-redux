import React from "react";
import poster from "../../assets/testbanner.jpg";

import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CreditsType, GenresType } from "../../Types/Types";

  type PropsType={
    poster_path: undefined|string
    original_title:undefined|string
    release_date:undefined|string
    original_language:undefined|string
    genres:undefined|Array<GenresType>
    runtime:undefined|number
    popularity:undefined|number
    overview:undefined|string
    credits: Array<CreditsType>
  }
  



const CardPoster = (props:PropsType) => {
  
  const usersScore = props.popularity?Math.ceil(props.popularity):'';
  
  const percent = +usersScore
  console.log(usersScore)
  
console.log(props)
console.log(props.credits)

  return (
    <div className="posterWrapp">
      <div className="posterWrapp__img">
        <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="poster" />
      </div>
      <div className="posterWrapp__info">
        <div className="posterWrapp__info-heading">
          <h2>
            {props.original_title} <span>({props.release_date?.slice(0,4)})</span>{" "}
          </h2>
  <p>{props.release_date?.replaceAll('-','/')} ({props.original_language?.toUpperCase()}) {props.genres?.map(g=><span key={g.id}>{g.name}</span>)} - {props.runtime? `${props.runtime/60} h`:''}</p>
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
                    value={percent}
                    text={`${percent}%`}
                    styles={{
                      trail: { stroke: "#fff" },
                      text: { fill: "#fff", fontSize: "28px" },
                      path: {stroke:`${percent < 30?'red':'#4aff5d'}`},
                    }}
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
              <a
                href="#"
                className="posterWrapp__info-actions-link posterWrapp__info-actions-link--video"
              >
                <PlayArrowRoundedIcon /> Play Trailer
              </a>
            </li>
          </ul>
        </div>
        <div className="posterWrapp__info-overview">
          <p>
           {props.overview}
          </p>
        </div>
        <div className="posterWrapp__info-cast">
          <ul className="posterWrapp__info-cast-list">
            <li className="posterWrapp__info-cast-item">
              <a href="#" className="posterWrapp__info-cast-link">
                <p> Todd Phillips</p>
                <p>Writer, Director</p>
              </a>
            </li>
            <li className="posterWrapp__info-cast-item">
              <a href="#" className="posterWrapp__info-cast-link">
                <p> Todd Phillips</p>
                <p>Writer, Director</p>
              </a>
            </li>
            <li className="posterWrapp__info-cast-item">
              <a href="#" className="posterWrapp__info-cast-link">
                <p> Todd Phillips</p>
                <p>Writer, Director</p>
              </a>
            </li>
            <li className="posterWrapp__info-cast-item">
              <a href="#" className="posterWrapp__info-cast-link">
                <p> Todd Phillips</p>
                <p>Writer, Director</p>
              </a>
            </li>
            <li className="posterWrapp__info-cast-item">
              <a href="#" className="posterWrapp__info-cast-link">
                <p> Todd Phillips</p>
                <p>Writer, Director</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPoster;
