import React from "react";

const SearchResults = () => {
  return (
    <div className="resultswrapp">
      <div className="resultswrapp__header">
        <h2>Search Results</h2>
      </div>
      <div className="resultswrapp__body">
        <ul className="menulist">
          <li className="menulist__item menulist__item--active">
            <span className="menulist__name">movies</span>{" "}
            <span className="menulist__number">30</span>
          </li>
          <li className="menulist__item">
            <span className="menulist__name">tv shows</span>{" "}
            <span className="menulist__number">30</span>
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
