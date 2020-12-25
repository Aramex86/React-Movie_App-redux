import React, {  useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NowPlayngType } from "../../Types/Types";
import Card from "../Common/Card";
import Filter from "../Common/Filter";
import Sort from "../Common/Sort";
import { requestloadMoreNowPlaying } from "../Store/Reducers/HomePageReducer";
import { loadMoreNplSelector } from "../Store/Selectors/HomePageSelector";
import { AppStateType } from "../Store/store";

// type Propstype={
//     nowPlaying:Array<NowPlayngType>
// }

const NowPlaying:FC = () => {
    const nowPlaying = useSelector((state: AppStateType) => loadMoreNplSelector(state));
    const dispatch = useDispatch();
  const [increment, setIncrement] = useState(3);

  const loadMore = () => {
    setIncrement((prev) =>  prev +1);
    dispatch(requestloadMoreNowPlaying(increment));
  };
  useEffect(() => {
    dispatch(requestloadMoreNowPlaying(2))
}, []);
const emptyArray = () => {
  //popular = [];
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
          {nowPlaying.map((p, index) => (
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

export default NowPlaying;
