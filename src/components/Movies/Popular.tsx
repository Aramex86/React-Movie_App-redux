import React, {useMemo, useState} from 'react';
import Filter from '../Common/Filter';
import Sort from '../Common/Sort';
import Card from '../Common/Card';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {requestloadMorePopular} from '../Store/Reducers/HomePageReducer';
import {PopularType} from '../../Types/Types';
import {FC} from 'react';
import {loadMorePopSelector} from '../Store/Selectors/HomePageSelector';
import {AppStateType} from '../Store/store';
import {useEffect} from 'react';
// type Propstype={
//   popular:Array<PopularType>
// }

const Popular: FC = () => {
  let popular = useSelector((state: AppStateType) =>
    loadMorePopSelector(state)
  );
  const [increment, setIncrement] = useState(2);
  const dispatch = useDispatch();

  const loadMore = () => {
    setIncrement((prev) => prev + 1);
    dispatch(requestloadMorePopular(increment));
  };
  const emptyArray = () => {
    popular = [];
  };
  //   useEffect(() => {
  //     dispatch(requestloadMorePopular(1));
  // }, []);

  return (
    <>
      <h1 className="heading">Popular Movies</h1>
      <div className="popularwrap">
        <div className="popularwrap__filters">
          <Sort />
          <Filter />
          <button className="btn btn--search_filter" disabled={true}>
            Search
          </button>
        </div>
        <div className="popularwrap__movielist">
          {popular.map((p, index) => (
            <Link
              to={`/movie-card/${p.id}`}
              key={index}
              className="popularwrap__movielist-link"
            >
              <Card
                poster={p.poster_path}
                title={p.title}
                voteAverage={p.vote_average}
                realese={p.release_date}
                firstAirDate={p.first_air_date}
                name={p.name}
                emptyArray={emptyArray}
              />
            </Link>
          ))}
          <button className="btn btn--loadmore" onClick={loadMore}>
            LOAD MORE
          </button>
        </div>
      </div>
    </>
  );
};

export default Popular;
