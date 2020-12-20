import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  currentPagesSelector,
  searchCollectionsSelector,
  searchMoviesQuerySelector,
  searchMoviesSelector,
  searchPeopleSelector,
  searchTvSelector,
  totalPagesSelector,
} from '../Store/Selectors/SearchSelector';
import {AppStateType} from '../Store/store';
import Person from '../Common/Pesrson';
import NoPoster from '../../assets/comingSoon.jpg';
import {Link} from 'react-router-dom';
import Paginator from '../Common/Paginator';
import {
  requestCurrentPage,
  requestSearchMovie,
  requestSearchTv,
} from '../Store/Reducers/SearchReducer';
import Movies from './SerachResult/Movie'

type PropsType = {
  // results: Array<SearchType> | undefined;
  show: string;
  handalePageChange:(e:any,value:number)=>void
  page:number
};

const SearchResultsItems: FC<PropsType> = ({show,handalePageChange,page}) => {
  const dispatch = useDispatch();
  dispatch(requestCurrentPage(page));

  const movies = useSelector((state: AppStateType) =>
  searchMoviesSelector(state)
);
  const tv = useSelector((state: AppStateType) => searchTvSelector(state));
  const persons = useSelector((state: AppStateType) =>
    searchPeopleSelector(state)
  );
  const collections = useSelector((state: AppStateType) =>
    searchCollectionsSelector(state)
  );
  const searchQuery = useSelector((state: AppStateType) =>
    searchMoviesQuerySelector(state)
  );
  const currentPage = useSelector((state: AppStateType) =>
    currentPagesSelector(state)
  );
  const totalPages = useSelector((state: AppStateType) =>
    totalPagesSelector(state)
  );


 
  console.log(movies)
  // console.log(collections)

  return (
    <>
      {show === 'movie' ? 
      <Movies movies={movies?.results}/>
      : (
        ''
      )}
      {show === 'tv' ? (
        <>
          {tv?.results.map((movie) => (
            <div className="searchresultitems" key={movie.id}>
              <div className="searchresultitems__img">
                {movie.poster_path === null ? (
                  <img src={NoPoster} alt="pic" />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="pic"
                  />
                )}
              </div>
              <div className="searchresultitems__desc">
                <h4>{movie.title ? movie.title : movie.name}</h4>
                <span>{movie.release_date}</span>
                <p>{movie.overview.slice(0, 150)}</p>
              </div>
            </div>
          ))}
          
        </>
      ) : (
        ''
      )}
      {show === 'person' ? (
        <>
          {persons?.results.map((person) => (
            <div
              className="searchresultitems searchresultitems--person"
              key={person.id}
            >
              <div className="searchresultitems__img">
                {person.profile_path === null ? (
                  <Person />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                    alt="pic"
                  />
                )}
              </div>
              <div className="searchresultitems__desc">
                <h4>{person.name}</h4>
                <span>{person.known_for_department}</span>
              </div>
            </div>
          ))}
        </>
      ) : (
        ''
      )}
      {show === 'collections' ? (
        <>
          {collections?.results.map((collection) => (
            <div className="searchresultitems" key={collection.id}>
              <div className="searchresultitems__img">
                {collection.poster_path === null ? (
                  <img src={NoPoster} alt="pic" />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${collection.poster_path}`}
                    alt="pic"
                  />
                )}
              </div>
              <div className="searchresultitems__desc">
                <h4>{collection.name}</h4>
                <p>{collection.overview.slice(0, 150)}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        ''
      )}
    
    </>
  );
};

export default SearchResultsItems;
