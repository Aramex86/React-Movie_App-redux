import React, { useState } from "react";
import { useSelector } from "react-redux";
import { popularSelector } from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";
import Video from "./Videos";
import { FaPlay } from "react-icons/fa";
import { PopularType } from "../../../Types/Types";

const Trailers = () => {
  const [bg, setBg] = useState<PopularType>();
  const popular = useSelector((state: AppStateType) => popularSelector(state));

  const checkIds = (valueId: number) => {
    popular.find((item) => {
      if (item.id === valueId) {
        setBg(item);
      }
    });
  };

  return (
    <div
      className="trailerswrapp"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${bg?.backdrop_path})`,
      }}
    >
        
      <div className="trailerswrapp__substrate">
      <h2  className="trailerswrapp__substrate__heading">Latest Trailers</h2>
        {popular.map((item) => (
          <>
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
                <div className="btn btn--play">
                  <FaPlay />
                </div>
              </div>
              <div className="videos">
                <Video id={item.id} title={item.title} />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Trailers;
