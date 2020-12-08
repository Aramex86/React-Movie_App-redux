import React, {FC} from 'react';
import {MovieListType} from '../../Types/Types';

import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Loader from '../Common/Loader';

type PropsType = {
  movieList: Array<MovieListType>;
  isFetching: boolean;
};

const Movielist: FC<PropsType> = ({movieList, isFetching}) => {
  return (
    <>
      <div className="movielist-wrapp">
        {isFetching ? (
          <Loader />
        ) : (
          <>
            {movieList.map((movie) => (
              <Card className="movielist-wrapp__card" key={movie.id}>
                <Link
                  className="movielist-wrapp__link"
                  to={`/movie-card/${movie.id}`}
                >
                  <CardActionArea>
                    <CardMedia>
                      <span
                        style={{
                          position: 'absolute',
                          width: '44px',
                          height: '24px',
                          background: 'rgb(255 255 255 / 30%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontSize: '1rem',
                          fontWeight: 'bolder',
                        }}
                      >
                        {movie.vote_average}
                      </span>
                      <img
                        src={
                          'https://image.tmdb.org/t/p/w500/' + movie.poster_path
                        }
                        alt="poster"
                        style={{width: '100%'}}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                      </Typography>
                      {/* <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ maxHeight: "220px" }}
                >
                  {movie.overview}
                </Typography> */}
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Movielist;
