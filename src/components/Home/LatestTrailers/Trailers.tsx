import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {homeVideosSelector, popularSelector} from '../../Store/Selectors/HomePageSelector';
import {AppStateType} from '../../Store/store';
import Video from './Videos';
import {FaPlay} from 'react-icons/fa';
import {PopularType} from '../../../Types/Types';
import { requestTrailers } from '../../Store/Reducers/HomePageReducer';

const Trailers = () => {
  const [bg, setBg] = useState<PopularType>();
  const [openModal, setOpenModal] = useState<number>(0);
  const popular = useSelector((state: AppStateType) => popularSelector(state));
  const trailers = useSelector((state:AppStateType)=> homeVideosSelector(state))
const dispatch = useDispatch()

  

  const checkIds = (valueId: number) => {
    popular.find((item) => {
      if (item.id === valueId) {
        setBg(item);
      }
    });
  };

  //console.log(openModal);
  console.log(trailers)

  return (
    <div
      className="trailerswrapp"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${bg?.backdrop_path})`,
      }}
    >
      <div className="videos">
        <Video trailers={trailers} />
      </div>
      <div className="trailerswrapp__substrate">
        <h2 className="trailerswrapp__substrate__heading">Latest Trailers</h2>
        <div className="videowrap">
          {popular.map((item) => (
            <div
              className="container"
              key={item.id}
              onMouseEnter={() => checkIds(item.id)}
            >
              <div className="container__img">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt="poster"
                />
                <button
                  className="btn btn--play"
                  onClick={() => dispatch(requestTrailers(item.id))}
                >
                  <FaPlay />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trailers;
