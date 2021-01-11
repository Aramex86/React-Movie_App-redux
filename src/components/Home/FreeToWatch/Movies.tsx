import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestNowPlaying } from "../../Store/Reducers/HomePageReducer";
import {
  fetchingSelector,
  nowPlayingSelector,
} from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";
import Card from "../../Common/HomePageCard";
import Skeleton from "../../Common/Skeleton";

const Movies = () => {
  const nowPlayingMovies = useSelector((state: AppStateType) =>
    nowPlayingSelector(state)
  );
  const fetching = useSelector((state: AppStateType) =>
    fetchingSelector(state)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestNowPlaying(1));
  }, []);
  return (
    <div className="cardwrapp">
      {nowPlayingMovies?.results.map((movie) =>
        fetching ? (
          <Skeleton key={movie.id}/>
        ) : (
          <Link to={`movie-card/${movie.id}`} key={movie.id}>
            <Card
              poster={movie.poster_path}
              title={movie.title}
              realese={movie.release_date}
              voteAverage={movie.vote_average}
              name={movie.name}
              firstAirDate={movie.first_air_date}
            />
          </Link>
        )
      )}
    </div>
  );
};

export default Movies;
