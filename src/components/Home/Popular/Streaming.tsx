import React, { FC } from "react";
import { PropsMovieComponentstype } from "./Popular";
import Card from "../../Common/HomePageCard";
import { Link } from "react-router-dom";

const Streaming: FC<PropsMovieComponentstype> = ({ popularMovies }) => {
  //https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg

  //console.log(popularMovies);
  return (
    <div className="cardwrapp">
      {popularMovies.map((movie) => (
        <Link to={`movie-card/${movie.id}`} key={movie.id}>
          <Card
            poster={movie.poster_path}
            title={movie.title}
            realese={movie.release_date}
            voteAverage={movie.vote_average}
          />
        </Link>
      ))}
    </div>
  );
};

export default Streaming;
