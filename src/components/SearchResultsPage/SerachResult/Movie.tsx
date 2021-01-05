import React, { FC, useEffect, useState } from "react";
import { SearchType } from "../../../Types/Types";
import NoPoster from "../../../assets/comingSoon.jpg";
import { Link } from "react-router-dom";
import Paginator from "../../Common/Paginator";
import { useDispatch, useSelector } from "react-redux";
import { requestSearchMovie } from "../../Store/Reducers/SearchReducer";
import { searchMoviesQuerySelector } from "../../Store/Selectors/SearchSelector";
import { AppStateType } from "../../Store/store";
type PropsType = {
  movies: Array<SearchType> | undefined;
  totalPages: number | undefined;
};

const Movie: FC<PropsType> = ({ movies, totalPages }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const searchQuery = useSelector((state: AppStateType) =>
    searchMoviesQuerySelector(state)
  );
  useEffect(() => {
    dispatch(requestSearchMovie(searchQuery, page));
  }, [page,searchQuery,dispatch]);

  const handalePageChange = (e: any, value: number) => {
    setPage(value);
  };

  //console.log(page);
  return (
    <>
      {movies?.map((movie) => (
        <Link to={`/movie-card/${movie.id}`} key={movie.id}>
          <div className="searchresultitems">
            <div className="searchresultitems__img">
              {movie.poster_path === null ? (
                <img src={NoPoster} alt="pic" />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="pic"
                />
              )}
            </div>
            <div className="searchresultitems__desc">
              <h4>{movie.title}</h4>
              <span>{movie.release_date}</span>
              <p>{movie.overview.slice(0, 150)}</p>
            </div>
          </div>
        </Link>
      ))}
      <Paginator
        handalePageChange={handalePageChange}
        totalPages={totalPages}
      />
    </>
  );
};

export default Movie;
