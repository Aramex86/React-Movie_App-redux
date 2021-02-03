import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { tvDetailsSelector } from "../../components/Store/Selectors/Tvselector";
import { AppStateType } from "../../components/Store/store";
import NoImage from "../../assets/noPoster.jpg";

type SeasonType = {
  air_date: "2019-11-12";
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
};

const CurrentSeason = () => {
  const tvDetail = useSelector((state: AppStateType) =>
    tvDetailsSelector(state)
  );

  const lastSeazonPoster = tvDetail?.seasons.find(
    (item, index) => index === tvDetail.seasons.length - 1
  );

  return (
    <div className="socialWrapp">
      <div className="socialWrapp__header">
        <h3 className="socialWrapp__header-heading">Current Season</h3>
      </div>
      <div className="socialWrapp__reviews socialWrapp__reviews--tv">
        <div className="socialWrapp__reviews--tv-img">
        {lastSeazonPoster?.poster_path == null ? (
          <img
            src={NoImage}
            alt="poster"
            style={{margin: '0 0 0 15px'}}
          />
        ) : (
          <img
          src={`https://image.tmdb.org/t/p/w500/${lastSeazonPoster?.poster_path}`}
          alt="poster"
        />
        )}
         
        </div>
        <div className="socialWrapp__reviews--tv-overview">
          <div className="socialWrapp__reviews--tv-overview-heading">
            <p>Season {lastSeazonPoster?.season_number}</p>
            <p>
              {lastSeazonPoster?.air_date} | {lastSeazonPoster?.episode_count}{" "}
              Episodes
            </p>
          </div>
          <p>{lastSeazonPoster?.overview}</p>
        </div>
      </div>
      <h4>
        <Link to="/allreview/">View All Seasons</Link>
      </h4>
    </div>
  );
};

export default CurrentSeason;
