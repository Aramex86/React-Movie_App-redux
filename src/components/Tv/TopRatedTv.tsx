import Card from "../Common/Card";
import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Filter from "../Common/Filter";
import Sort from "../Common/Sort";
import {
  curentPageSelector,
  topRatedTvSelector,
} from "../Store/Selectors/HomePageSelector";
import { AppStateType } from "../Store/store";
import Paginatior from "../Common/Paginator";
import { requestTopRatedTv } from "../Store/Reducers/HomePageReducer";
import { showSortAcTv } from "../Store/Reducers/TvReducer";
import {
  sortedSelector,
  showSortSelector,
} from "../Store/Selectors/Tvselector";
import ResetBtnTv from "../Common/ResetBtnTv";

const Popular: FC = () => {
  const topRatedTv = useSelector((state: AppStateType) =>
    topRatedTvSelector(state)
  );
  const sortedTv = useSelector((state: AppStateType) => sortedSelector(state));
  const showSorted = useSelector((state: AppStateType) =>
    showSortSelector(state)
  );
  const currentPage = useSelector((state: AppStateType) =>
    curentPageSelector(state)
  );
  const [page, setPage] = useState(currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTopRatedTv(page));
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
            : topRatedTv?.results.map((p, index) => (
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
          <Paginatior
            handalePageChange={handalePageChange}
            totalPages={topRatedTv?.total_pages}
            page={page}
          />
        </div>
      </div>
    </>
  );
};

export default Popular;
