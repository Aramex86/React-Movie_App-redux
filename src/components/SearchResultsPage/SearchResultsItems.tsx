import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentPagesSelector,
  searchCollectionsSelector,
  searchMoviesQuerySelector,
  searchMoviesSelector,
  searchPeopleSelector,
  searchTvSelector,
  totalPagesSelector,
} from "../Store/Selectors/SearchSelector";
import { AppStateType } from "../Store/store";
import NoPoster from "../../assets/comingSoon.jpg";
import { Link } from "react-router-dom";
import Paginator from "../Common/Paginator";
import {
  // requestCurrentPage,
  requestSearchMovie,
  requestSearchTv,
} from "../Store/Reducers/SearchReducer";
import Movies from "./SerachResult/Movie";
import Tv from "./SerachResult/Tvs";
import Persons from "./SerachResult/Person";
import Collections from "./SerachResult/Collections";

type PropsType = {
  // results: Array<SearchType> | undefined;
  show: string;
  // handalePageChange:(e:any,value:number)=>void
  // page:number
};

const SearchResultsItems: FC<PropsType> = ({ show }) => {
  const dispatch = useDispatch();
  //dispatch(requestCurrentPage(page));

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

  //console.log(movies)
  // console.log(collections)

  return (
    <>
      {show === "movie" ? (
        <Movies movies={movies?.results} totalPages={movies?.total_pages} />
      ) : (
        ""
      )}
      {show === "tv" ? (
        <>
          <Tv movies={tv?.results} totalPages={tv?.total_pages} />
        </>
      ) : (
        ""
      )}
      {show === "person" ? (
        <>
          <Persons
            persons={persons?.results}
            totalPages={persons?.total_pages}
          />
        </>
      ) : (
        ""
      )}
      {show === "collections" ? (
        <>
          <Collections
            collections={collections?.results}
            totalPages={collections?.total_pages}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchResultsItems;
