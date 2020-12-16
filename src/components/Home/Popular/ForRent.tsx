import React, { FC } from "react";
import { PropsMovieComponentstype } from "./Popular";
import Card from "../../Common/HomePageCard";
import { Link } from "react-router-dom";
import { AppStateType } from "../../Store/store";
import { fetchingSelector } from "../../Store/Selectors/HomePageSelector";
import { useSelector } from "react-redux";
import Skeleton from '../../Common/Skeleton';


const ForRent: FC<PropsMovieComponentstype> = ({ popularMovies }) => {
  const fetching = useSelector((state: AppStateType) =>
    fetchingSelector(state)
  );


  return (
    <>
      <div className="cardwrapp">
        {popularMovies.map((movie) =>
          fetching ? (<Skeleton key={movie.id}/>
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
    </>
  );
};

export default ForRent;
