import React, {FC} from 'react';
import {VideoType} from '../../../Types/Types';

type PropsType = {
  trailers: Array<VideoType>;
  openModal: boolean;
};

const Videos: FC<PropsType> = ({trailers, openModal}) => {
  console.log(openModal);
  console.log(trailers);

  return (
    <>
      <div className="videowrapp">
        <div className="videowrapp__modal">
          <iframe
            width="100%"
            height={900 ? '700' : '500'}
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
        
      </div>
    </>
  );
};

export default Videos;
