import { url } from "inspector";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CardHeader from "../../Common/CardHeader";
import CardHeaderAll from "../../Common/CardHeaderAll";
import { requestVideos } from "../../Store/Reducers/MovieListReducer";
import {
  detailsSelector,
  viedoSelector,
} from "../../Store/Selectors/MovieSelector";
import { AppStateType } from "../../Store/store";

type useParamsType = {
  id: string;
};

const CardMediaAll = () => {
  const details = useSelector((state: AppStateType) => detailsSelector(state));
  const videos = useSelector((state: AppStateType) => viedoSelector(state));
  const dispatch = useDispatch();

  let { id }: useParamsType = useParams();
  useEffect(() => {
    dispatch(requestVideos(Number(id)));
  }, [dispatch, id]);

  const backdrops = [
    `https://image.tmdb.org/t/p/w500${details?.backdrop_path}`,
    // `https://image.tmdb.org/t/p/w500${details?.belongs_to_collection.backdrop_path}`,
  ] as Array<string>;
  const posters = [
    `https://image.tmdb.org/t/p/w500${details?.poster_path}`,
    // `https://image.tmdb.org/t/p/w500${details?.belongs_to_collection.poster_path}`,
  ] as Array<string>;

  const videoBg = `https://image.tmdb.org/t/p/w500${details?.poster_path}`;

  const checkIfExist = () => {
    if (details?.belongs_to_collection !== null) {
      backdrops.push(
        `https://image.tmdb.org/t/p/w500${details?.belongs_to_collection.backdrop_path}`
      );
      posters.push(
        `https://image.tmdb.org/t/p/w500${details?.belongs_to_collection.poster_path}`
      );
    }
  };
  checkIfExist();

  let height = 0;

  const videoHeigth = function () {
    if (videos.length < 4) {
      return (height = 500);
    } else {
      return (height = 200);
    }
  };
videoHeigth();
  return (
    <div>
      <CardHeader />
      <CardHeaderAll />
      <div className="allmediawrapp">
        <div className="backdrop">
          <span className="heading">backdrops</span>
          <div className="allmediacontainer">
            {backdrops.map((el) => (
              <a href={el} target="_blank" rel="noreferrer">
                <figure className="container__back">
                  {" "}
                  <img src={el} alt="backdrop" />
                </figure>
              </a>
            ))}
          </div>
        </div>
        <div className="poster">
          <span className="heading">posters</span>
          <div className="allmediacontainer">
            {posters.map((el) => (
              <a href={el} target="_blank" rel="noreferrer">
                <figure className="container__back">
                  {" "}
                  <img src={el} alt="backdrop" />
                </figure>
              </a>
            ))}
          </div>
        </div>
        <div className="video">
          <span className="heading">video</span>
          <div className="allmediacontainer__video">
            {videos.map((video) => (
              <iframe
                width="80%"
                height={height} //{width < 900 ? '400' : '700'}
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="movie trailer"
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMediaAll;
