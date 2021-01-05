import React, {  useEffect, useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SearchResults from "./SearchResults";
import SearchResultsItems from "./SearchResultsItems";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../Store/store";
import {
  currentPagesSelector,
  searchCollectionsSelector,
  searchMoviesQuerySelector,
  searchMoviesSelector,
  searchPeopleSelector,
  searchTvSelector,
  // totalPagesSelector,
} from "../Store/Selectors/SearchSelector";
import {
  // requestCurrentPage,
  requestSearchCollections,
  requestSearchMovie,
  requestSearchPeople,
  requestSearchQuery,
  requestSearchTv,
} from "../Store/Reducers/SearchReducer";

const ResultsPage = () => {
  const [show, setShow] = useState<string>("movie");
  const [newValue, setNewValue] = useState<string>("");

  const searchQuery = useSelector((state: AppStateType) =>
    searchMoviesQuerySelector(state)
  );
  const movies = useSelector((state: AppStateType) =>
    searchMoviesSelector(state)
  );
  const tv = useSelector((state: AppStateType) => searchTvSelector(state));
  const people = useSelector((state: AppStateType) =>
    searchPeopleSelector(state)
  );
  const collection = useSelector((state: AppStateType) =>
    searchCollectionsSelector(state)
  );
  const currentPage = useSelector((state: AppStateType) =>
    currentPagesSelector(state)
  );
  const dispatch = useDispatch();

  const showSearchtype = (value: string) => {
    setShow(value);
  };

  const newSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(requestSearchQuery(e.target.value));
    setNewValue(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(requestSearchMovie(searchQuery, currentPage));
      dispatch(requestSearchTv(searchQuery, currentPage));
      dispatch(requestSearchPeople(searchQuery, currentPage));
      dispatch(requestSearchCollections(searchQuery, currentPage));
    }
  };

  useEffect(() => {
    dispatch(requestSearchMovie(searchQuery, currentPage));
    dispatch(requestSearchTv(searchQuery, currentPage));
    dispatch(requestSearchPeople(searchQuery, currentPage));
    dispatch(requestSearchCollections(searchQuery, currentPage));
  }, [newValue,dispatch,searchQuery,currentPage]);

  return (
    <>
      <div className="search__header">
        <SearchOutlinedIcon />
        <input
          type="text"
          placeholder="Search for a movie, tv show, person..."
          value={searchQuery}
          onChange={newSearch}
          onKeyPress={handleKeyDown}
        />
      </div>
      <div className="resultspagewrapp">
        <div className="resultspagewrapp__body">
          <div className="resultspagewrapp__body__left">
            <SearchResults
              query={searchQuery}
              movies={movies?.total_results}
              tv={tv?.total_results}
              person={people?.total_results}
              collections={collection?.total_results}
              showSearchtype={showSearchtype}
            />
          </div>
          <div className="resultspagewrapp__body__right">
            <SearchResultsItems show={show} />
          </div>
        </div>
        <div className="paginator"></div>
      </div>
    </>
  );
};

export default ResultsPage;
