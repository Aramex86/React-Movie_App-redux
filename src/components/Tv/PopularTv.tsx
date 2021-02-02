import Card from "../Common/Card";
import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Filter from "../Common/Filter";
import Sort from "../Common/Sort";
import {
  curentPageSelector,
  nowTvPlayingSelector,
} from "../Store/Selectors/HomePageSelector";
import { AppStateType } from "../Store/store";
import Paginatior from "../Common/Paginator";
import { requestNowTvPlaying } from "../Store/Reducers/HomePageReducer";
import {
  showSortSelector,
  sortedSelector,
} from "../Store/Selectors/Tvselector";
import { requestSortTv, showSortAcTv } from "../Store/Reducers/TvReducer";
import ResetBtnTv from "../Common/ResetBtnTv";

const Popular: FC = () => {
  const popularTv = useSelector((state: AppStateType) =>
    nowTvPlayingSelector(state)
  );
  const sortedTv = useSelector((state: AppStateType) => sortedSelector(state));
  const showSorted = useSelector((state: AppStateType) =>
    showSortSelector(state)
  );

  const currentPage = useSelector((state: AppStateType) =>
    curentPageSelector(state)
  );
  const [page, setPage] = useState<number>(currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestNowTvPlaying(page));
    dispatch(requestSortTv("", page));
  }, [page, dispatch]);

  const handalePageChange = (e: any, value: number) => {
    setPage(value);
  };

  const handleDisableBtn = () => {
    dispatch(showSortAcTv(false));
    setPage(1);
  };

  const resetPage = () => {
    setPage(1);
  };

  //console.log(sortedTv);
  return (
    <>
      <h1 className="heading">Popular TV Shows</h1>
      <div className="popularwrap">
        <div className="popularwrap__filters">
          <Sort resetPage={resetPage} />
          <Filter />
          <ResetBtnTv handleDisableBtn={handleDisableBtn} />
        </div>
        <div className="popularwrap__movielist">
          {showSorted
            ? sortedTv?.results.map((p, index) => (
                <Link
                  to={`/tv-card/${p.id}`}
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
            : popularTv?.results.map((p, index) => (
                <Link
                  to={`/tv-card/${p.id}`}
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
          {showSorted ? (
            <Paginatior
              handalePageChange={handalePageChange}
              totalPages={sortedTv?.total_pages}
              page={page}
            />
          ) : (
            <Paginatior
              handalePageChange={handalePageChange}
              totalPages={popularTv?.total_pages}
              page={page}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Popular;
