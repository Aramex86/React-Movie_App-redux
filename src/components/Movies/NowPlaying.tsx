import Card from '../Common/Card';
import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../Common/Filter';
import Sort from '../Common/Sort';
import { nowPlayingSelector } from '../Store/Selectors/HomePageSelector';
import { AppStateType } from '../Store/store';
import Paginatior from '../Common/Paginator';
import { requestNowPlaying } from '../Store/Reducers/HomePageReducer';

const NowPlaying: FC = () => {
    const nowPlaying = useSelector((state: AppStateType) =>
    nowPlayingSelector(state)
    );
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
  
      useEffect(() => {
       dispatch(requestNowPlaying(page))
    }, [page,dispatch]);
  
    const handalePageChange=(e:any,value:number)=>{
      setPage(value);
    }
    return (
      <>
        <h1 className="heading">Now Playing Movies</h1>
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