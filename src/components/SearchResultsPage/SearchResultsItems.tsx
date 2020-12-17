import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  searchMoviesSelector,
  searchPeopleSelector,
  searchTvSelector,
} from "../Store/Selectors/SearchSelector";
import { AppStateType } from "../Store/store";
import {GoPerson} from 'react-icons/go';
import {BsDot} from 'react-icons/bs';

type PropsType = {
  // results: Array<SearchType> | undefined;
  show: string;
};

const SearchResultsItems: FC<PropsType> = ({ show }) => {
  const movies = useSelector((state: AppStateType) =>
    searchMoviesSelector(state)
  );
  const tv = useSelector((state: AppStateType) => searchTvSelector(state));
  const persons = useSelector((state: AppStateType) => searchPeopleSelector(state));

  //console.log(results);

  return (
    <>
      {show === "movie" ? (
        <>
          {movies?.results.map((movie) => (
            <div className="searchresultitems" key={movie.id}>
              <div className="searchresultitems__img">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="pic"
                />
              </div>
              <div className="searchresultitems__desc">
                <h4>{movie.title}</h4>
                <span>{movie.release_date}</span>
                <p>{movie.overview.slice(0, 150)}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
      {show === "tv" ? (
        <>
          {tv?.results.map((movie) => (
            <div className="searchresultitems" key={movie.id}>
              <div className="searchresultitems__img">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="pic"
                />
              </div>
              <div className="searchresultitems__desc">
                <h4>{movie.title}</h4>
                <span>{movie.release_date}</span>
                <p>{movie.overview.slice(0, 150)}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
      {show === "person" ? (
        <>
          {persons?.results.map((person) => (
            <div className="searchresultitems searchresultitems--person" key={person.id}>
              <div className="searchresultitems__img searchresultitems__img--person">
                {person.profile_path === null?<div><GoPerson/></div>:<img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt="pic"
                />}
                
              </div>
              <div className="searchresultitems__desc">
                <h4>{person.name}</h4>
                <span>{person.known_for_department}</span><BsDot/><span></span>
              </div>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchResultsItems;
