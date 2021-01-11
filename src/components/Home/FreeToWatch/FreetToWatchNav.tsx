import React from "react";
import { useDispatch} from "react-redux";
import { requestNowPlaying } from "../../Store/Reducers/HomePageReducer";

type PropsType = {
  freeToWaTch: string;
  showValue: (value: string) => void;
};

const FreeToWatchNav: React.FC<PropsType> = ({ freeToWaTch, showValue }) => {
   const dispatch = useDispatch();

  const selectPageOne = () => {
    dispatch(requestNowPlaying(1));
  };

  return (
    <ul className="herowrapnav herowrapnav--freetowatch">
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
