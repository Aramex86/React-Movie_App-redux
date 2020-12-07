import React, { FC } from "react";
import { PropsMovieComponentstype } from "../Popular";
import Card from "../../Common/HomePageCard";

const ForRent: FC<PropsMovieComponentstype> = ({ popularMovies }) => {
    return (
      <div className="cardwrapp">
        {popularMovies.map((movie) => (
          <Card
            key={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            realese={movie.release_date}
            popularity={movie.popularity}
          />
        ))}
    </div>
  );
};

export default ForRent;
