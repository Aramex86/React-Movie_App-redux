import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PartsType } from "../../Types/Types";
import NoPoster from "../../assets/noPoster.jpg";

type PropsType = {
  parts:Array<PartsType>;
};

const Movies: FC<PropsType> = ({ parts }) => {
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
const [part,setParts]=useState(parts);
 

  const as = function () {
    const part = parts.sort((a:any, b:any) => b.popularity - a.popularity);
    setParts(part);
  };
  const des = function () {
    const part= parts?.sort((a:any, b:any) => a.popularity - b.popularity);
    setParts(part);
  };

//   console.log(as());
//   console.log(des());

   console.log(part);
    //console.log(des(parts));
  return (
    <div style={{ padding: "2rem 0" }}>
      <div className="movies__header">
        <h1 className="heading__collection heading__collection--movies">
          {parts?.length} movies
        </h1>
        <button onClick={des}>des</button>
        <button onClick={as}>as</button>
      </div>
      {parts?.map((movie) => (
        <Link to={`/movie-card/${movie.id}`} key={movie.id} onClick={moveToTop}>
          <div className="movieswrapp">
            <div className="movieswrapp__img">
              {movie.poster_path === null ? (
                <img src={NoPoster} alt="pic" />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="pic"
                />
              )}
            </div>
            <div className="movieswrapp__desc">
              <h4>{movie.title}</h4>
              <span>{movie.release_date}</span>
              <p>{movie.overview.slice(0, 150)}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Movies;
