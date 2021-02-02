import Card from "../Common/Card";
import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Filter from "../Common/Filter";
import Sort from "../Common/Sort";
import {
  curentPageSelector,
  upComingSelector,
} from "../Store/Selectors/HomePageSelector";
import { AppStateType } from "../Store/store";
import Paginatior from "../Common/Paginator";
import { requestUpComing } from "../Store/Reducers/HomePageReducer";
import { showSortAc } from "../Store/Reducers/MovieListReducer";
import { sortselector, showSortselector } from "../Store/Selectors/MovieSelector";
import ResetBtnMov from "../Common/ResetBtnMov";

const Upcoming: FC = () => {
  const upcoming = useSelector((state: AppStateType) =>
    upComingSelector(state)
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
  const [page, setPage] = useState(currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUpComing(page));
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
  return (
    <>
      <h1 className="heading">Upcoming Movies</h1>
      <div className="popularwrap">
        <div className="popularwrap__filters">
        <Sort resetPage={resetPage}/>
          <Filter />
          <ResetBtnMov handleDisableBtn={handleDisableBtn}/>
        </div>
        <div className="popularwrap__movielist">
          {showSorted? sortedMovies?.results.map((p, index) => (
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
              )) : upcoming?.results.map((p, index) => (
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
          <Paginatior
            handalePageChange={handalePageChange}
            totalPages={upcoming?.total_pages}
            page={page}
          />
        </div>
      </div>
    </>
  );
};

export default Upcoming;
