import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestNowPlaying } from "../../Store/Reducers/HomePageReducer";
import { nowPlayingSelector } from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";
import Card from '../../Common/HomePageCard'


const Movies = () => {
  const nowPlayingMovies = useSelector((state: AppStateType) =>
    nowPlayingSelector(state)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestNowPlaying(2));
  }, []);

  return (
    <div className="cardwrapp">
      {nowPlayingMovies.map((movie) => (
        <Link to={`movie-card/${movie.id}`} key={movie.id}>
          <Card
            poster={movie.poster_path}
            title={movie.title}
             realese={movie.release_date}
            popularity={movie.popularity}
          />
        </Link>
      ))}
    </div>
  );
};

export default Movies;
