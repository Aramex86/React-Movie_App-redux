import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestNowPlaying } from "../../Store/Reducers/HomePageReducer";
import { nowPlayingSelector } from "../../Store/Selectors/HomePageSelector";
import { AppStateType } from "../../Store/store";

type PropsType = {
  freeToWaTch: string;
  showValue: (value: string) => void;
};

const FreeToWatchNav: React.FC<PropsType> = ({ freeToWaTch, showValue }) => {
  const nowPlaying = useSelector((state: AppStateType) =>
    nowPlayingSelector(state)
  );
  const dispatch = useDispatch();

  const selectPageOne = () => {
    dispatch(requestNowPlaying(Math.floor(Math.random() * 20) + 1));
  };

  return (
    <ul className="herowrapnav">
      <li className="herowrapnav__item">
        <button
          onClick={() => {
            showValue("movies");
            selectPageOne();
          }}
          className={`btn btn--heronav ${
            freeToWaTch === "movies" ? "btn--heroactive" : ""
          }`}
        >
          <span>movies</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => {
            showValue("Tv");
            selectPageOne();
          }}
          className={`btn btn--heronav ${
            freeToWaTch === "Tv" ? "btn--heroactive" : ""
          }`}
        >
          <span>tv</span>
        </button>
      </li>
    </ul>
  );
};

export default FreeToWatchNav;
