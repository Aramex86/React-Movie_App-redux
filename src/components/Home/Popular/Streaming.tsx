import React, {FC} from 'react';
import {PropsPopularMoviesType} from '../Popular';
import Card from '../../Common/HomePageCard';

const Streaming: FC<PropsPopularMoviesType> = ({popularMovies}) => {
  //https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg

  console.log(popularMovies);
  return (
    <div className="cardwrapp">
      {popularMovies.map((movie) => (
        <Card poster={movie.poster_path} title={movie.title} realese={movie.release_date} popularity={movie.popularity}/>
      ))}
    </div>
  );
};

export default Streaming;
