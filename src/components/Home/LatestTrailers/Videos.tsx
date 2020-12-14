import React, {FC} from 'react';
import {VideoType} from '../../../Types/Types';
import {CgClose} from 'react-icons/cg'

type PropsType = {
  trailers: Array<VideoType>;
  openModal: boolean;
  closeModal:()=> void;
};

const width = window.innerWidth;

const Videos: FC<PropsType> = ({trailers, openModal,closeModal}) => {

  return (
    <>
      <div className="videowrapp">
          {openModal?
        <div className="videowrapp__modal">
          <div className="videowrapp__modal__header">
            <button className="btn btn--close" onClick={closeModal}><CgClose/></button>
          </div>
          <iframe
            width="85%"
            height={width === 900 ? '700' : '400'}
            src={
              openModal
                ? `https://www.youtube.com/embed/${trailers
                    .slice(0, 1)
                    .map((trailer) => trailer.key)}`
                : ''
            }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="movie trailer"
          ></iframe>
        </div>
        :''}
      </div>
    </>
  );
};

export default Videos;
