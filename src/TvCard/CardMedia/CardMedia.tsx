import React from 'react';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import PlayCircleFilledWhiteRoundedIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import {Link} from 'react-router-dom';

import {MovieDetailsType, VideoType} from '../../Types/Types';
import {allMedia} from '../../components/Helper/allMedia';

type PropsType = {
  details: MovieDetailsType | null;
  videos: Array<VideoType>;
};

const CardMedia = ({details, videos}: PropsType) => {
  const allImg: Array<string> = [];
  allMedia(
    details?.backdrop_path === null
      ? ''
      : details?.poster_path,
    details?.poster_path,
    allImg
  );
  allMedia(
    details?.backdrop_path === null
      ? ''
      : details?.backdrop_path,
    details?.backdrop_path,
    allImg
  );
  const addPrefix = allImg.map(
    (item: string) => `https://image.tmdb.org/t/p/w500${item}`
  );
  const noImg = addPrefix.filter((i) => {
    if (i.includes('.jpg')) return i;
  });

  return (
    <div className="mediaWrapp">
      <div className="mediaWrapp__header">
        <h3 className="mediaWrapp__header-heading">Media</h3>
        <ul className="mediaWrapp__header-list">
          <li className="mediaWrapp__header-item">
            <Link
              to="/allmedia"
              className="mediaWrapp__header-link mediaWrapp__header-link--active"
            >
              All Media <span>{addPrefix.length + videos.length}</span>
            </Link>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
              Videos <span>{videos.length}</span>
            </a>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
              Backdrops <span>{addPrefix.slice(0, 2).length}</span>
            </a>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
              Posters <span>{addPrefix.slice(2, 4).length}</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mediaWrapp__wrapper">
        <div className="mediaWrapp__wrapper-media">
          {noImg.reverse().map((item: string, index: number) => (
            <img src={item} alt="poster" key={index} />
          ))}
          {videos.slice(0, 2).map((video) => (
            <div className="mediaWrapp__wrapper-videolink" key={video.id}>
              {' '}
              <a
                className="mediaWrapp__wrapper-videolink-link"
                href={`https://www.youtube.com/watch?v=${video.key}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <PlayCircleFilledWhiteRoundedIcon />
              </a>
            </div>
          ))}
          <div>
            <Link to="/allmedia">
              View More <ArrowForwardRoundedIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMedia;
