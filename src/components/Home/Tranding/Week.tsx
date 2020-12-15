import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestTraidings } from "../../Store/Reducers/HomePageReducer";
import { traidingsSelector } from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";
import Card from "../../Common/HomePageCard";

const Week = () => {
  const traidings = useSelector((state: AppStateType) =>
    traidingsSelector(state)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestTraidings("week"));
  }, []);

  return (
    <div className="cardwrapp">
      {traidings.map((movie) => (
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
      ))}
    </div>
  );
};

export default Week;
