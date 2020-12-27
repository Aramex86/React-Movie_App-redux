import Card from '../Common/Card';
import React, { FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../Common/Filter';
import Sort from '../Common/Sort';
import {topRatedSelector } from '../Store/Selectors/HomePageSelector';
import { AppStateType } from '../Store/store';
import Paginatior from '../Common/Paginator';
import {  requestTopRated } from '../Store/Reducers/HomePageReducer';

const TopRated: FC = () => {
    const topRated = useSelector((state: AppStateType) =>
    topRatedSelector(state)
    );
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
  
      useEffect(() => {
       dispatch(requestTopRated(page))
    }, [page]);
  
    console.log(topRated)
    const handalePageChange=(e:any,value:number)=>{
      setPage(value);
    }
    return (
      <>
        <h1 className="heading">Top Rated Movies</h1>
        <div className="popularwrap">
          <div className="popularwrap__filters">
            <Sort />
            <Filter />
            <button className="btn btn--search_filter" disabled={true}>
              Search
            </button>
          </div>
          <div className="popularwrap__movielist">
            {topRated?.results.map((p, index) => (
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
              totalPages={topRated?.total_pages}
            />
          </div>
        </div>
      </>
    );
  };
  
  export default TopRated;