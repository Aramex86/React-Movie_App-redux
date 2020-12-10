import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PopularType, VideoType } from "../../../Types/Types";
import { requestHomeMovies } from "../../Store/Reducers/HomePageReducer";
import { homeVideosSelector, popularSelector } from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";

type PropsType= {
  popularMovies:Array<PopularType>
  trailers:Array<VideoType>
};

const Trailers:FC<PropsType> = ({popularMovies,trailers}) => {
  
  //console.log(popularMovies)
  
  
  const dispatch = useDispatch()
  
 
  //602211,671583,741067
  
  console.log(trailers)

  return (
    <div className="trailerswrapp">
      <h1>Trailer</h1>
      <div className="container">
{trailers.map(item=><div>{item.id}</div>)}
      </div> 
    </div>
  );
};

export default Trailers;
