import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SearchResults from "./SearchResults";
import SearchResultsItems from "./SearchResultsItems";
import Paginator from "../Common/Paginator";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../Store/store";
import {
  searchMoviesQuerySelector,
  searchMoviesSelector,
  searchPeopleSelector,
  searchTvSelector,
} from "../Store/Selectors/SearchSelector";
import {
  requestSearchMovie,
  requestSearchPeople,
  requestSearchTv,
} from "../Store/Reducers/SearchReducer";

const ResultsPage = () => {
  const [show, setShow] = useState<string>("movie");

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
  const dispatch = useDispatch();

  const showSearchtype = (value: string) => {
    setShow(value);
  };

  useEffect(() => {
    dispatch(requestSearchMovie(searchQuery));
    dispatch(requestSearchTv(searchQuery));
    dispatch(requestSearchPeople(searchQuery));
  }, []);

  console.log(people);

  return (
    <>
      <div className="search__header">
        <SearchOutlinedIcon />
        <input
          type="text"
          placeholder="Search for a movie, tv show, person..."
          value={searchQuery}
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
              showSearchtype={showSearchtype}
            />
          </div>
          <div className="resultspagewrapp__body__right">
            <SearchResultsItems show={show} />
          </div>
        </div>
        <div className="paginator">
          <Paginator />
        </div>
      </div>
    </>
  );
};

export default ResultsPage;
