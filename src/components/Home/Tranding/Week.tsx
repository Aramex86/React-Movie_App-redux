import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestTraidings } from "../../Store/Reducers/HomePageReducer";
import {
  fetchingSelector,
  traidingsSelector,
} from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";
import Card from "../../Common/HomePageCard";
import Skeleton from "../../Common/Skeleton";

const Week = () => {
  const fetching = useSelector((state: AppStateType) =>
    fetchingSelector(state)
  );
  const traidings = useSelector((state: AppStateType) =>
    traidingsSelector(state)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestTraidings("week"));
  }, []);

  return (
    <div className="cardwrapp">
      {traidings.map((movie) =>
        fetching ? (
          <Skeleton key={movie.id} />
        ) : (
          <Link
            to={
              movie.media_type === "movie"
                ? `movie-card/${movie.id}`
                : `tv-card/${movie.id}`
            }
            key={movie.id}
          >
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

export default Week;
