import React from "react";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
//test
import test from "../../../assets/mediatest.jpg";
import { MovieDetailsType, VideoType } from "../../../Types/Types";
import {allMedia} from '../../Helper/allMedia';
import { url } from "inspector";

type PropsType={
  details:MovieDetailsType | null
  videos:Array<VideoType>
}




const CardMedia = ({details,videos}:PropsType) => {
  
  
  const allImg:any =[]
  allMedia(details?.belongs_to_collection.poster_path,details?.poster_path,allImg)
  allMedia(details?.belongs_to_collection.backdrop_path,details?.backdrop_path,allImg)

  const addPrefix = allImg.map((item:string) => `https://image.tmdb.org/t/p/w500${item}`);

 const videoBck = 'https://www.youtube.com/watch?v=ZN7PWE2dyAY';
  

  console.log(details);
  console.log(videos);
  console.log(allImg);
  console.log(addPrefix);
  return (
    <div className="mediaWrapp">
      <div className="mediaWrapp__header">
        <h3 className="mediaWrapp__header-heading">Media</h3>
        <ul className="mediaWrapp__header-list">
          <li className="mediaWrapp__header-item">
            <a
              href="#"
              className="mediaWrapp__header-link mediaWrapp__header-link--active"
            >
              All Media <span>{addPrefix.length + videos.length}</span>
            </a>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
  Videos <span>{videos.length}</span>
            </a>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
  Backdrops <span>{addPrefix.slice(0,2).length}</span>
            </a>
          </li>
          <li className="mediaWrapp__header-item">
            <a href="#" className="mediaWrapp__header-link">
              Posters <span>{addPrefix.slice(2,4).length}</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mediaWrapp__wrapper">
        <div className="mediaWrapp__wrapper-media">
          {addPrefix.reverse().map((item:string)=><img src={item} alt='poster'/>)}
          {videos.map(video =><div> <a href={` https://www.youtube.com/watch?v=${video.key}`}></a></div>)}
          <div>

          <a href="#">
            View More <ArrowForwardRoundedIcon />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMedia;
