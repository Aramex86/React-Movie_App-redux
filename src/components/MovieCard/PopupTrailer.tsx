import React, { useEffect, useState } from "react";
import { VideoType } from "../../Types/Types";



type StateType={
    playTrailer:boolean
}

type PropsType = {
  videos: Array<VideoType>
  playState:StateType
  closePlay:()=>void
};

const PopupTrailer = ({ videos,playState,closePlay}: PropsType) => {
const[x,setX]=useState()
  const trailer = videos.filter((v) => v.type === "Trailer");
  const key = trailer.find((t) => {
    if (t.name.includes("Trailer")) {
      return t.key;
    }
  });
console.log('videos', key?.key);

  return (
      <>
      <div className={playState.playTrailer?"popuptrailer popuptrailer--show":"popuptrailer"}>
          <button onClick={closePlay} className='btn btn--close'>close</button>
      <div className="popuptrailer__videobox ">
          <iframe
          width="100%"
          height="700"
          src={`https://www.youtube.com/embed/${key?.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </>);
};

export default PopupTrailer;
