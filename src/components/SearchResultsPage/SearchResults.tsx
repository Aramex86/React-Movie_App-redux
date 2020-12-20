import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestSearchCollections,
  requestSearchMovie,
  requestSearchPeople,
  requestSearchTv,
} from "../Store/Reducers/SearchReducer";
import {
  currentPagesSelector,
  searchMoviesSelector,
  searchTvSelector,
} from "../Store/Selectors/SearchSelector";
import { AppStateType } from "../Store/store";
// import { MovieListType, SearchType } from "../../Types/Types";

type PropsType = {
  movies: number | undefined;
  tv: number | undefined;
  person: number | undefined;
  collections: number | undefined;
  query: string;
  showSearchtype: (value: string) => void;
};

const SearchResults: FC<PropsType> = ({
  query,
  movies,
  tv,
  person,
  collections,
  showSearchtype,
}) => {
  const currentPage = useSelector((state:AppStateType)=>currentPagesSelector(state))
  const dispatch = useDispatch();

  const showMovie = () => {
    dispatch(requestSearchMovie(query,currentPage));
  };
  const showTv = () => {
    dispatch(requestSearchTv(query));
  };
  const showPerson = () => {
    dispatch(requestSearchPeople(query));
  };
  const showCollections = () => {
    dispatch(requestSearchCollections(query));
  };

  return (
    <div className="resultswrapp">
      <div className="resultswrapp__header">
        <h2>Search Results</h2>
      </div>
      <div className="resultswrapp__body">
        <ul className="menulist">
          <li
            className="menulist__item menulist__item--active"
            onClick={() => {
              showMovie();
              showSearchtype("movie");
            }}
          >
            <span className="menulist__name">movies</span>{" "}
            <span className="menulist__number">{movies ? movies : 0}</span>
          </li>
          <li
            className="menulist__item"
            onClick={() => {
              showTv();
              showSearchtype("tv");
            }}
          >
            <span className="menulist__name">tv shows</span>{" "}
            <span className="menulist__number">{tv ? tv : 0}</span>
          </li>
          <li
            className="menulist__item"
            onClick={() => {
              showPerson();
              showSearchtype("person");
            }}
          >
            <span className="menulist__name">people</span>{" "}
            <span className="menulist__number">{person ? person : 0}</span>
          </li>
          {/* <li className="menulist__item">
            <span className="menulist__name">companies</span>{" "}
            <span className="menulist__number">30</span>
          </li>
          <li className="menulist__item">
            <span className="menulist__name">keywords</span>{" "}
            <span className="menulist__number">30</span>
          </li> */}
          <li
            className="menulist__item"
            onClick={() => {
              showCollections();
              showSearchtype("collections");
            }}
          >
            <span className="menulist__name">collections</span>{" "}
            <span className="menulist__number">{collections}</span>
          </li>
          {/* <li className="menulist__item">
            <span className="menulist__name">networks</span>{" "}
            <span className="menulist__number">30</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
