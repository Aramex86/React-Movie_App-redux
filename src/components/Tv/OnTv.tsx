import Card from '../Common/Card';
import React, {FC, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Filter from '../Common/Filter';
import Sort from '../Common/Sort';
import { onTvSelector} from '../Store/Selectors/HomePageSelector';
import {AppStateType} from '../Store/store';
import Paginatior from '../Common/Paginator';
import { requestOnTv} from '../Store/Reducers/HomePageReducer';

const Popular: FC = () => {
  const onTv = useSelector((state: AppStateType) =>
  onTvSelector(state)
  );
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestOnTv(page));
  }, [page]);

  const handalePageChange = (e: any, value: number) => {
    setPage(value);
  };

  return (
    <>
      <h1 className="heading">On Tv</h1>
      <div className="popularwrap">
        <div className="popularwrap__filters">
          <Sort />
          <Filter />
          <button className="btn btn--search_filter" disabled={true}>
            Search
          </button>
        </div>
        <div className="popularwrap__movielist">
          {onTv?.results.map((p, index) => (
            <Link
              to="/somewere in space" /* {`/movie-card/${p.id}`} */
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
          />
        </div>
      </div>
    </>
  );
};

export default Popular;
