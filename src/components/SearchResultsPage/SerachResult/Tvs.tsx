import React, { FC, useEffect, useState } from "react";
import { SearchType } from "../../../Types/Types";
import NoPoster from "../../../assets/comingSoon.jpg";
// import { Link } from "react-router-dom";
import Paginator from "../../Common/Paginator";
import { useDispatch, useSelector } from "react-redux";
import {
  // requestSearchMovie,
  requestSearchTv,
} from "../../Store/Reducers/SearchReducer";
import { searchMoviesQuerySelector } from "../../Store/Selectors/SearchSelector";
import { AppStateType } from "../../Store/store";
// import { requestCurrentPage } from "../../Store/Reducers/SearchReducer";
type PropsType = {
  movies: Array<SearchType> | undefined;
  totalPages: number | undefined;
};

const Tv: FC<PropsType> = ({ movies, totalPages }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const searchQuery = useSelector((state: AppStateType) =>
    searchMoviesQuerySelector(state)
  );
  useEffect(() => {
    dispatch(requestSearchTv(searchQuery, page));
  }, [page,dispatch,searchQuery]);

  const handalePageChange = (e: any, value: number) => {
    setPage(value);
  };

  return (
    <>
      {movies?.map((movie) => (
        <div className="searchresultitems" key={movie.id}>
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
            <h4>{movie.title ? movie.title : movie.name}</h4>
            <span>{movie.release_date}</span>
            <p>{movie.overview.slice(0, 150)}</p>
          </div>
        </div>
      ))}
      <Paginator
        handalePageChange={handalePageChange}
        totalPages={totalPages}
      />
    </>
  );
};

export default Tv;
