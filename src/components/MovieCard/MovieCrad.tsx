import React from "react";
import { CreditsType, MovieListType } from "../../Types/Types";

type PropsType = {
  movieList: Array<MovieListType>;
  match?: any;
  credits: Array<CreditsType>;
};

const MovieCrad = ({ movieList, match, credits }: PropsType) => {
  const movieId = match.params.id;
  const movieMatchId = movieList.filter((movie) => movie.id == movieId);
  const actors = credits.slice(0, 10);
   console.log(movieList)
  // console.log(movieMatchId);
  console.log(actors);
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
                <span>Realese date : </span>
                {movie.release_date}
              </li>
              <li className="movieCard-wrapp__right-item">
                <span>Raiting : </span>
                {movie.vote_average}
              </li>
              <li className="movieCard-wrapp__right-item">
                <span>Total votes : </span>
                {movie.vote_count}
              </li>
              {movie.adult ? <li>adult:18+</li> : ""}
              <li className="movieCard-wrapp__right-item">
                <span>Genre : </span>
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
