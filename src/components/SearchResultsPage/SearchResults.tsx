import React, { FC, useState } from "react";
import { MovieListType, SearchType } from "../../Types/Types";

type PropsType = {
  results: Array<SearchType> | undefined;
};

const SearchResults: FC<PropsType> = ({ results = [] }) => {
  const movies: any = [];
  const tv: any = [];

  console.log(results);

  const mediaType = (arr: Array<SearchType>) => {
    return arr.filter((item) => {
      if (item.media_type === "movie") {
        movies.push(item);
      } else if (item.media_type === "tv") tv.push(item);
    });
  };

  mediaType(results);
  console.log(movies);
  console.log(tv);

  return (
    <div className="resultswrapp">
      <div className="resultswrapp__header">
        <h2>Search Results</h2>
      </div>
      <div className="resultswrapp__body">
        <ul className="menulist">
          <li className="menulist__item menulist__item--active">
            <span className="menulist__name">movies</span>{" "}
            <span className="menulist__number">{movies.length}</span>
          </li>
          <li className="menulist__item">
            <span className="menulist__name">tv shows</span>{" "}
            <span className="menulist__number">{tv.length}</span>
          </li>
          <li className="menulist__item">
            <span className="menulist__name">people</span>{" "}
            <span className="menulist__number">30</span>
          </li>
          <li className="menulist__item">
            <span className="menulist__name">companies</span>{" "}
            <span className="menulist__number">30</span>
          </li>
          <li className="menulist__item">
            <span className="menulist__name">keywords</span>{" "}
            <span className="menulist__number">30</span>
          </li>
          <li className="menulist__item">
            <span className="menulist__name">collections</span>{" "}
            <span className="menulist__number">30</span>
          </li>
          <li className="menulist__item">
            <span className="menulist__name">networks</span>{" "}
            <span className="menulist__number">30</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
