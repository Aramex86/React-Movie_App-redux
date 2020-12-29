import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Common/HomePageCard";
import Skeleton from "../../Common/Skeleton";
import { requestNowTvPlaying } from "../../Store/Reducers/HomePageReducer";
import { fetchingSelector, nowTvPlayingSelector } from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";

const Tv = () => {
  const fetching = useSelector((state: AppStateType) =>
    fetchingSelector(state)
  );
  const nowTvPlaying = useSelector((state: AppStateType) =>
    nowTvPlayingSelector(state)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestNowTvPlaying(Math.floor(Math.random() * 20) + 1));
  }, []);

  console.log(nowTvPlaying)

  return (
    <div className="cardwrapp">
      {nowTvPlaying?.results.map((movie:any)=> 
      fetching?<Skeleton key={movie.id}/>:
      /*   <Link to={`movie-card/${movie.id}`} key={movie.id}> */
          <Card key={movie.id}
            poster={movie.poster_path}
            title={movie.name}
            realese={movie.first_air_date}
            voteAverage={movie.vote_average}
            name={movie.name}
            firstAirDate={movie.first_air_date}
          />
        /* </Link> */
      )}
    </div>
  );
};

export default Tv;
