import React from "react";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import PlayCircleFilledWhiteRoundedIcon from "@material-ui/icons/PlayCircleFilledWhiteRounded";
import { Link } from "react-router-dom";

import { MovieDetailsType, VideoType } from "../../../Types/Types";
import { allMedia } from "../../Helper/allMedia";

type PropsType = {
  details: MovieDetailsType | null;
  videos: Array<VideoType>;
};

const CardMedia = ({ details, videos = [] }: PropsType) => {
  const allImg: Array<string> = [];

  // console.log(details?.belongs_to_collection.poster_path);
  // console.log(details?.belongs_to_collection.backdrop_path);
  allMedia(
    details?.belongs_to_collection === null
      ? ""
      : details?.belongs_to_collection.poster_path,
    details?.poster_path,
    allImg
  );
  allMedia(
    details?.belongs_to_collection === null
      ? ""
      : details?.belongs_to_collection.backdrop_path,
    details?.backdrop_path,
    allImg
  );
  const addPrefix = allImg.map(
    (item: string) => `https://image.tmdb.org/t/p/w500${item}`
  );
  const noImg = addPrefix.filter((i) => {
    if (i.includes(".jpg")) return i;
  });
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const movieId = details?.id;

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
              All Media <span>{noImg.length + videos.length}</span>
            </Link>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
              Videos <span>{videos.length}</span>
            </a>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
              Backdrops <span>{noImg.slice(0, 2).length}</span>
            </a>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
              Posters <span>{noImg.slice(2, 4).length}</span>
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
              {" "}
              <a
                className="mediaWrapp__wrapper-videolink-link"
                href={`https://www.youtube.com/watch?v=${video.key}`}
                rel="noopener noreferrer"
                target="_blank"
                style={{ backgroundImage: `url(${noImg[0]})` }}
              >
                <PlayCircleFilledWhiteRoundedIcon />
              </a>
            </div>
          ))}
          <div className='mediaWrapp__wrapper-viewmore'>
            <Link to={`/allmedia/${movieId}`}>
              View More <ArrowForwardRoundedIcon />
            </Link>
          </div>
        </div>
      </div>
      <h4>
        <Link to={`/allmedia/${movieId}`} onClick={moveToTop}>
          Full Media
        </Link>
      </h4>
    </div>
  );
};

export default CardMedia;
