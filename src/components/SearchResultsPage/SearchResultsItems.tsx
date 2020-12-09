import React from "react";
import Test from "../../assets/noPoster.jpg";

const SearchResultsItems = () => {
  return (
    <div className="searchresultitems">
      <div className="searchresultitems__img">
        <img src={Test} alt="pic" />
      </div>
      <div className="searchresultitems__desc">
        <h4>some title</h4>
        <span>realease date</span>
        <p>some description</p>
      </div>
    </div>
  );
};

export default SearchResultsItems;
