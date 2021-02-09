import React, { FC } from "react";
import { PropsMovieComponentstype } from "./Popular";
import Card from "../../Common/HomePageCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchingSelector, traidingsSelector } from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";
import Skeleton from "../../Common/Skeleton";

const InTheater = () => {
  const fetching = useSelector((state: AppStateType) =>
    fetchingSelector(state)
  );
  const theater = useSelector((state:AppStateType)=>traidingsSelector(state))


  console.log(theater);
  return (
    <div className="cardwrapp">
      {theater.map((movie) =>
        fetching ? (
          <Skeleton key={movie.id}/>
        ) : (
          <Link to={movie.media_type === "movie"? `movie-card/${movie.id}`:`tv-card/${movie.id}`} key={movie.id}>
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

export default InTheater;
