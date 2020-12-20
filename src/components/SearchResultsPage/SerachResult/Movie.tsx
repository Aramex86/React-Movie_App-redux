import React, {FC} from 'react';
import { SearchType} from '../../../Types/Types';
import NoPoster from '../../../assets/comingSoon.jpg';
import {Link} from 'react-router-dom';
type PropsType = {
  movies: Array<SearchType> | undefined;
};

const Movie: FC<PropsType> = ({movies}) => {
  return (
    <>
      {movies?.map((movie) => (
        <Link to={`/movie-card/${movie.id}`} key={movie.id}>
          <div className="searchresultitems">
            <div className="searchresultitems__img">
              {movie.poster_path === null ? (
                <img src={NoPoster} alt="pic" />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="pic"
                />
              )}
            </div>
            <div className="searchresultitems__desc">
              <h4>{movie.title}</h4>
              <span>{movie.release_date}</span>
              <p>{movie.overview.slice(0, 150)}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Movie;
