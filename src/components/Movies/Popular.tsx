import Card from "../Common/Card";
import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Filter from "../Common/Filter";
import Sort from "../Common/Sort";
import {
  curentPageSelector,
  popularSelector,
} from "../Store/Selectors/HomePageSelector";
import { AppStateType } from "../Store/store";
import Paginatior from "../Common/Paginator";
import { requestPopularMovies } from "../Store/Reducers/HomePageReducer";
import {
  sortselector,
  showSortselector,
} from "../Store/Selectors/MovieSelector";
import { requestSort, showSortAc } from "../Store/Reducers/MovieListReducer";
import ResetBtnMov from "../Common/ResetBtnMov";

const Popular: FC = () => {
  const popularMovies = useSelector((state: AppStateType) =>
    popularSelector(state)
  );
  const currentPage = useSelector((state: AppStateType) =>
    curentPageSelector(state)
  );
  const sortedMovies = useSelector((state: AppStateType) =>
    sortselector(state)
  );
  const showSorted = useSelector((state: AppStateType) =>
    showSortselector(state)
  );

  const [page, setPage] = useState<number>(currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPopularMovies(page));
    dispatch(requestSort('',page))
  }, [page, dispatch]);

  const handalePageChange = (e: any, value: number) => {
    setPage(value);
  };

  const handleDisableBtn = () => {
    dispatch(showSortAc(false));
    setPage(1);
  };

  const resetPage=()=>{
    setPage(1)
  }

  // console.log(sortedMovies);
  // console.log(showSorted);

  return (
    <>
      <h1 className="heading">Popular Movies</h1>
      <div className="popularwrap">
        <div className="popularwrap__filters">
          <Sort resetPage={resetPage}/>
          <Filter />
          <ResetBtnMov handleDisableBtn={handleDisableBtn}/>
        </div>
        <div className="popularwrap__movielist">
          {showSorted
            ? sortedMovies?.results.map((p, index) => (
                <Link
                  to={`/movie-card/${p.id}`}
                  key={index}
                  className="popularwrap__movielist-link"
                  target="_blank"
                >
                  <Card
                    poster={p.poster_path}
                    title={p.title}
                    voteAverage={p.vote_average}
                    realese={p.release_date}
                    firstAirDate={p.first_air_date}
                    name={p.name}
                  />
                </Link>
              ))
            : popularMovies?.results.map((p, index) => (
                <Link
                  to={`/movie-card/${p.id}`}
                  key={index}
                  className="popularwrap__movielist-link"
                  target="_blank"
                >
                  <Card
                    poster={p.poster_path}
                    title={p.title}
                    voteAverage={p.vote_average}
                    realese={p.release_date}
                    firstAirDate={p.first_air_date}
                    name={p.name}
                  />
                </Link>
              ))}
         {showSorted?<Paginatior
          handalePageChange={handalePageChange}
          totalPages={sortedMovies?.total_pages}
          page={page}
        />:<Paginatior
        handalePageChange={handalePageChange}
        totalPages={popularMovies?.total_pages}
        page={page}
      />} 
        </div>
      </div>
    </>
  );
};

export default Popular;
