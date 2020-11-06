import React from "react";
import { CreditsType, GenresType, MovieListType } from "../../Types/Types";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import ThumbDownAltRoundedIcon from "@material-ui/icons/ThumbDownAltRounded";

import { matchIdFunc } from "../Helper/mtchId";

type PropsType = {
  movieList: Array<MovieListType>;
  match?: any;
  credits: Array<CreditsType>;
  genres: Array<GenresType>;
};

const MovieCrad = ({ movieList, match, credits, genres }: PropsType) => {
  const movieId = match.params.id;
  const movieMatchId = matchIdFunc(movieList, movieId);
  const actors = credits.slice(0, 10);
  const genreId = movieMatchId.map((m) => Object.values(m.genre_ids).flat());

  const movieGenre = [] as Array<GenresType>;

  genres.filter((item) => {
    return genreId.flat().filter((g) => {
      if (item.id === g) {
        return movieGenre.push(item);
      }
    });
  });

  return (
    <>
      {movieMatchId.map((movie) => (
        <div key={movie.id} className="movieCard-wrapp">
          <div className="movieCard-wrapp__left">
            <div className="movieCard-wrapp__left-poster">
              <img
                src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                alt="poster"
              />
            </div>
          </div>
          <div className="movieCard-wrapp__right">
            <h2 className="movieCard-wrapp__right-title">{movie.title}</h2>
            <ul className="movieCard-wrapp__right-list">
              <li className="movieCard-wrapp__right-item">
                <h3>{movie.title}</h3>
              </li>
              <li className="movieCard-wrapp__right-item">
                <span>Realese date : </span>
                {movie.release_date}
              </li>
              <li className="movieCard-wrapp__right-item">
                <span>Raiting : </span>
                {movie.vote_average >= 5 ? (
                  <span className="movieCard-wrapp__right-average">
                    {movie.vote_average} <ThumbUpAltRoundedIcon />
                  </span>
                ) : (
                  <span>
                    {movie.vote_average} <ThumbDownAltRoundedIcon />
                  </span>
                )}
              </li>
              <li className="movieCard-wrapp__right-item">
                <span>Total votes : </span>
                {movie.vote_count}
              </li>
              {movie.adult ? <li>adult:18+</li> : ""}
              <li className="movieCard-wrapp__right-item">
                <span>
                  Genre :{" "}
                  {movieGenre.map((m) => (
                    <span className="movieCard-wrapp__right-genre" key={m.id}>
                      {m.name}
                    </span>
                  ))}
                </span>
              </li>
              <li className="movieCard-wrapp__right-item">
                <span>Actors : </span>
                {actors.map((actor) => (
                  <span
                    key={actor.id}
                    className="movieCard-wrapp__right-actorName"
                  >
                    {actor.name}
                  </span>
                ))}
              </li>
            </ul>
            <div className="movieCard-wrapp__right-actorsImg">
              {actors.slice(0, 6).map((actor) => (
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + actor.profile_path}
                  alt="Actors"
                  key={actor.id}
                  className="movieCard-wrapp__right-actorImg"
                />
              ))}
            </div>
            <p className="movieCard-wrapp__right-overview">{movie.overview}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCrad;
