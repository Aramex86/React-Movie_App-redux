import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestUpComing } from "../../Store/Reducers/HomePageReducer";
import { fetchingSelector, upComingSelector } from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";
import Card from "../../Common/HomePageCard";
import Skeleton from "../../Common/Skeleton";

const Upcoming = () => {
  const upComing = useSelector((state: AppStateType) =>
    upComingSelector(state)
  );
  const fetching = useSelector((state: AppStateType) =>
  fetchingSelector(state)
);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUpComing(Math.floor(Math.random() * 20) + 1));
  }, []);

//console.log(upComing?.results)

  return (
    <div className="upcomingwrapp">
      <h2>Upcoming</h2>
      <div className="cardwrapp">
      {upComing?.results.map((movie) => fetching?<Skeleton key={movie.id}/>:
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
      )}
    </div>
    </div>
  );
};

export default Upcoming;
