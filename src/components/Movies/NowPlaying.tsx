import React, {useState} from 'react';
import {useEffect} from 'react';
import {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Card from '../Common/Card';
import Filter from '../Common/Filter';
import Sort from '../Common/Sort';
import {requestNowPlayingMoviesPage} from '../Store/Reducers/MoviesReducer';
import {nowPlayingSelector} from '../Store/Selectors/MoviesSelector';
import {AppStateType} from '../Store/store';
import Paginatior from '../Common/Paginator';

const NowPlaying: FC = () => {
  const nowPlaying = useSelector((state: AppStateType) =>
    nowPlayingSelector(state)
  );
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestNowPlayingMoviesPage(page));
  }, [page]);

  const handalePageChange = (e: any, value: number) => {
    setPage(value);
  };
  return (
    <>
      <h1 className="heading">Now Playing</h1>
      <div className="popularwrap">
        <div className="popularwrap__filters">
          <Sort />
          <Filter />
          <button className="btn btn--search_filter" disabled={true}>
            Search
          </button>
        </div>
        <div className="popularwrap__movielist">
          {nowPlaying?.results.map((p, index) => (
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
            totalPages={nowPlaying?.total_pages}
          />
        </div>
      </div>
    </>
  );
};

export default NowPlaying;
