import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SearchResults from "./SearchResults";
import SearchResultsItems from "./SearchResultsItems";
import Paginator from "../Common/Paginator";
import { useSelector } from "react-redux";
import { AppStateType } from "../Store/store";
import { searchMoviesSelector } from "../Store/Selectors/HomePageSelector";

const ResultsPage = () => {

  const results = useSelector((state:AppStateType)=> searchMoviesSelector(state))

//console.log('result',results?.results)


  return (
    <>
      <div className="search__header">
        <SearchOutlinedIcon />
        <input
          type="text"
          placeholder="Search for a movie, tv show, person..."
        />
      </div>
      <div className="resultspagewrapp">
        <div className="resultspagewrapp__body">
          <div className="resultspagewrapp__body__left">
            <SearchResults results={results?.results}/>
          </div>
          <div className="resultspagewrapp__body__right">
            <SearchResultsItems />
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
