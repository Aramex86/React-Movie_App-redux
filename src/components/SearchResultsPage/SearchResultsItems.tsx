import React, { FC} from "react";
import {  useSelector } from "react-redux";
import {
  // currentPagesSelector,
  searchCollectionsSelector,
  // searchMoviesQuerySelector,
  searchMoviesSelector,
  searchPeopleSelector,
  searchTvSelector,
} from "../Store/Selectors/SearchSelector";
import { AppStateType } from "../Store/store";
// import NoPoster from "../../assets/comingSoon.jpg";
// import { Link } from "react-router-dom";
// import Paginator from "../Common/Paginator";
// import {
//   // requestCurrentPage,
//   requestSearchMovie,
//   requestSearchTv,
// } from "../Store/Reducers/SearchReducer";
import Movies from "./SerachResult/Movie";
import Tv from "./SerachResult/Tvs";
import Persons from "./SerachResult/Person";
import Collections from "./SerachResult/Collections";

type PropsType = {
  show: string;
};

const SearchResultsItems: FC<PropsType> = ({ show }) => {

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
  console.log(collections)

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
