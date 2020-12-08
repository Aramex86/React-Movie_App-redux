import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../../Common/HomePageCard";
import { requestNowTvPlaying } from "../../Store/Reducers/HomePageReducer";
import { nowTvPlayingSelector } from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";

const Tv = () => {
  const nowTvPlaying = useSelector((state: AppStateType) =>
    nowTvPlayingSelector(state)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestNowTvPlaying(Math.floor(Math.random() * 20) + 1));
  }, []);

  return (
    <div className="cardwrapp">
      {nowTvPlaying.map((movie:any)=> (
      /*   <Link to={`movie-card/${movie.id}`} key={movie.id}> */
          <Card
            poster={movie.poster_path}
            title={movie.name}
            realese={movie.first_air_date}
            voteAverage={movie.vote_average}
          />
        /* </Link> */
      ))}
    </div>
  );
};

export default Tv;
