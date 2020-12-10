import React, {FC, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {PopularType, VideoType} from '../../../Types/Types';
import {requestHomeMovies} from '../../Store/Reducers/HomePageReducer';
import {
  homeVideosSelector,
  popularSelector,
} from '../../Store/Selectors/HomePageSelector';
import {AppStateType} from '../../Store/store';

type PropsType = {
  //popularMovies: Array<PopularType>;
  trailers: string
  id:number
  title:string
};

const Trailers = () => {

  
  const video = useSelector((state:AppStateType)=>popularSelector(state))
  
  const dispatch = useDispatch()
  useEffect(() => {
    
  dispatch(requestHomeMovies(741067))

}, []);

  //602211,671583,741067


  console.log(video);


  return (
    <div className="trailerswrapp">
      <h1>Trailer</h1>
        <div className="container" style={{width:'600px'}} >
          <img src={`https://image.tmdb.org/t/p/w500`} alt="" style={{width:'50%'}}/>
        </div>
 <div></div>

     </div>
  );
};

export default Trailers;
