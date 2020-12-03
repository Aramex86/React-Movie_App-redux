import React from "react";
import { VideoType } from "../../Types/Types";

type StateType = {
  playTrailer: boolean;
};

type PropsType = {
  videos: Array<VideoType>;
  playState: StateType;
  closePlay: () => void;
};

const PopupTrailer = ({ videos, playState, closePlay }: PropsType) => {
  const trailer = videos.filter((v) => v.type === "Trailer");
  const key = trailer.find((t) => {
   if (t.name.includes("Trailer")) {
      return t.key;
    }
  });

  const width = window.innerWidth;

  return (
    <>
      <div
        className={
          playState.playTrailer
            ? "popuptrailer popuptrailer--show"
            : "popuptrailer"
        }
      >
        <div className="popuptrailer__header">
          <button onClick={closePlay} className="btn btn--close">
            close
          </button>
        </div>
        <div className="popuptrailer__videobox ">
          <iframe
            width="100%"
            height={width<=900?'500':''}
            src={`https://www.youtube.com/embed/${key?.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title='movie trailer'
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PopupTrailer;
