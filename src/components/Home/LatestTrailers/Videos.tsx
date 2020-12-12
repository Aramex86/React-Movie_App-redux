import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { VideoType } from '../../../Types/Types';
import {requestTrailers} from '../../Store/Reducers/HomePageReducer';


type PropsType = {
  trailers: Array<VideoType>
};

const Videos: FC<PropsType> = ({trailers}) => {

  console.log(trailers.slice(0,1))
//   const dispatch = useDispatch()
// useEffect(() => {
//   dispatch(requestTrailers(openModal))
// }, []);
//   console.log(openModal);
  return (
    <>
      <div className="videowrapp">
        <div className="videowrapp__title">
          <span></span>
          <br />
          <span></span>
        </div>
        <div className="videowrapp__modal">
          <iframe
              width="100%"
              height={900 ? '700' : '500'}
              src={`https://www.youtube.com/embed/${trailers.slice(0,1).map(i=> i.key)}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="movie trailer"
            ></iframe>
        </div>
      </div>
    </>
  );
};

export default Videos;
