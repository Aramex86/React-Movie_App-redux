import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestloadMoreNowPlaying, requestloadMorePopular } from "../Store/Reducers/HomePageReducer";
import { loadMorePopSelector, loadMoreNplSelector } from "../Store/Selectors/HomePageSelector";
import { AppStateType } from "../Store/store";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";

const Movies = () => {
//   const popular = useSelector((state: AppStateType) => loadMorePopSelector(state));
//   const nowPlaying = useSelector((state: AppStateType) => loadMoreNplSelector(state));
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     dispatch(requestloadMorePopular(1));
//     dispatch(requestloadMoreNowPlaying(1))
// }, []);

// console.log(nowPlaying);
// console.log(popular);

 
  return (<></>
    // <div className="movieswrapp">
    //   <Popular popular={popular} />
    //   <NowPlaying nowPlaying={nowPlaying} />
    // </div>
  );
};

export default Movies;
