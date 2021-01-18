import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../Store/store";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { genresSelector } from "../Store/Selectors/MovieSelector";
import { FC } from "react";
import { CollectionsType } from "../../Types/Types";

type PropsType = {
  collection: CollectionsType;
};

const PosterIntro: FC<PropsType> = ({ collection }) => {
  const genres = useSelector((state: AppStateType) => genresSelector(state));

  const bck = `linear-gradient(to left, rgb(45 45 45 / 89%), #010c29), url(https://image.tmdb.org/t/p/w500/${collection?.backdrop_path}) center center / cover no-repeat`;

  const collectionGeres = function () {
    const collectionIds = collection?.parts.flatMap((g) => g.genre_ids);
    const removeDuble = collectionIds?.filter(
      (item, index) => collectionIds.indexOf(item) === index
    );
    const genreNames: Array<string> = [];
    for (let i = 0; i < removeDuble?.length; i++) {
      genres.filter((item) => {
        if (item.id === removeDuble[i]) {
          genreNames.push(item.name);
        }
      });
    }
    return genreNames;
  };
  const genreList = collectionGeres().map((genre, i) => (
    <span key={i}>{genre}</span>
  ));

  const voteAvarage = function () {
    let avrage = 0;
    for (let i = 0; i < collection?.parts.length; i++) {
      avrage += Math.trunc(
        (collection.parts[i].vote_average / collection.parts.length) * 100
      );
    }

    if (avrage > 101) {
      return Number(avrage.toLocaleString().slice(0, 2));
    }
    return avrage;
  };

  const voteNumber = voteAvarage();
  const trailColorLine = (value: number) => {
    if (value < 30) {
      return "#fd1818";
    } else if (value > 30 && value < 70) {
      return "#ffff5d";
    } else {
      return "#50ff50de";
    }
  };

  return (
    <div className="posterwrapp" style={{ background: bck }}>
      <div className="posterinfo">
        <div className="posterinfo__left">
          <img
            src={`https://image.tmdb.org/t/p/w500/${collection?.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="posterinfo__right">
          <h3 className="posterinfo__right-title">{collection?.name}</h3>
          <div className="posterinfo__right-genre">{genreList}</div>
          <div className="posterinfo__right-userscrore">
            <CircularProgressbar
              value={voteNumber}
              text={`${voteNumber}%`}
              styles={buildStyles({
                //trail: { stroke: "#fff" },
                textColor: "#fff",
                textSize: "3rem",
                backgroundColor: "#000",
                trailColor: "#3d543fba",
                pathColor: trailColorLine(voteNumber),
              })}
            />
            <span>User Score</span>
          </div>
          <div className="posterinfo__right-overview">
            <h3>Overview</h3>

            {collection?.overview}
          </div>
          <div className="posterinfo__right-info">
            <span>Number of movies {collection?.parts.length}</span>
            <br />
            <span>revenue</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterIntro;
//background: `linear-gradient(to left, #7f7f7f9e, black), url(https://image.tmdb.org/t/p/w500/${props.details?.poster_path}) no-repeat`,
