import Card from "../Common/Card";
import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Filter from "../Common/Filter";
import Sort from "../Common/Sort";
import {
  curentPageSelector,
  onTvSelector,
} from "../Store/Selectors/HomePageSelector";
import { AppStateType } from "../Store/store";
import Paginatior from "../Common/Paginator";
import { requestOnTv } from "../Store/Reducers/HomePageReducer";
import { showSortAcTv } from "../Store/Reducers/TvReducer";
import {
  sortedSelector,
  showSortSelector,
} from "../Store/Selectors/Tvselector";
import ResetBtnTv from "../Common/ResetBtnTv";

const Popular: FC = () => {
  const onTv = useSelector((state: AppStateType) => onTvSelector(state));
  const currentPage = useSelector((state: AppStateType) =>
    curentPageSelector(state)
  );
  const sortedTv = useSelector((state: AppStateType) => sortedSelector(state));
  const showSorted = useSelector((state: AppStateType) =>
    showSortSelector(state)
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    dispatch(requestOnTv(page));
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
      <h1 className="heading">On Tv</h1>
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
            : onTv?.results.map((p, index) => (
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
            totalPages={onTv?.total_pages}
            page={page}
          />
        </div>
      </div>
    </>
  );
};

export default Popular;
