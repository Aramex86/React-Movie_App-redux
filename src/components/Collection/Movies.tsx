import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PartsType } from "../../Types/Types";
import NoPoster from "../../assets/noPoster.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  requestPartsAsc,
  requestPartsDsc,
  requestRaitingAsc,
  requestRaitingDsc,
  requestRealeseDateAsc,
  requestRealeseDateDsc,
} from "../Store/Reducers/CollectionReducer";
import { AppStateType } from "../Store/store";
import { partsSelector } from "../Store/Selectors/CollectionSelector";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

// type PropsType = {
//   parts: Array<PartsType>;
// };

const Movies = () => {
  const parts = useSelector((state: AppStateType) => partsSelector(state));
  const dispatch = useDispatch();
  const [showSort, setShowSort] = useState(false);
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShowSort = () => {
    setShowSort(!showSort);
  };

  console.log(parts.map(i=>i.release_date));

  return (
    <div style={{ padding: "2rem 0" }}>
      <div className="movies__header">
        <h1 className="heading__collection heading__collection--movies">
          {parts?.length} movies
        </h1>
        <div className="sortwrap">
          <span className="sortwrap__heading" onClick={handleShowSort}>
            Sort <MdKeyboardArrowDown />
          </span>
          <ul className={showSort ? "sortwrap__list" : "sortwrap__list--hide"}>
            <li className="sortwrap__list__item">
              popularity <MdKeyboardArrowRight />
              <div className="sortwrap__list__item__subItem">
                <button
                  className="btn btn--ascending"
                  onClick={() => dispatch(requestPartsAsc(parts))}
                >
                  Ascending
                </button>
                <button
                  className="btn btn--descending"
                  onClick={() => dispatch(requestPartsDsc(parts))}
                >
                  Descending
                </button>
              </div>
            </li>
            <li className="sortwrap__list__item">
              raiting <MdKeyboardArrowRight />
              <div className="sortwrap__list__item__subItem">
                <button
                  className="btn btn--ascending"
                  onClick={() => dispatch(requestRaitingAsc(parts))}
                >
                  Ascending
                </button>
                <button
                  className="btn btn--descending"
                  onClick={() => dispatch(requestRaitingDsc(parts))}
                >
                  Descending
                </button>
              </div>
            </li>
            <li className="sortwrap__list__item">
              realese date <MdKeyboardArrowRight />
              <div className="sortwrap__list__item__subItem">
                <button
                  className="btn btn--ascending"
                  onClick={() => dispatch(requestRealeseDateAsc(parts))}
                >
                  Ascending
                </button>
                <button
                  className="btn btn--descending"
                  onClick={() => dispatch(requestRealeseDateDsc(parts))}
                >
                  Descending
                </button>
              </div>
            </li>
          </ul>
        </div>
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
