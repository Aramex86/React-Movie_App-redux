import React, { FC } from "react";
import { PropsMovieComponentstype } from "./Popular";
import Card from "../../Common/HomePageCard";
import { Link } from "react-router-dom";

const InTheater: FC<PropsMovieComponentstype> = ({ popularMovies }) => {
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

export default InTheater;
