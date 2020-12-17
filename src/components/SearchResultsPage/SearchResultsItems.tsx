import React, { FC } from "react";
import Test from "../../assets/noPoster.jpg";
import { SearchType } from "../../Types/Types";


type PropsType={
  results:Array<SearchType> |undefined
}

const SearchResultsItems:FC<PropsType> = ({results =[]}) => {

console.log(results)
  
  return (<>
      {results.map(result=>(<>
    <div className="searchresultitems">
      <div className="searchresultitems__img">
        <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt="pic" />
      </div>
      <div className="searchresultitems__desc">
        <h4>{result.title}</h4>
        <span>{result.release_date}</span>
        <p>{result.overview.slice(0,150)}</p>
      </div>
    </div>
      </>))}
  </>);
};

export default SearchResultsItems;
