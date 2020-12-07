import React from "react";
import { useDispatch } from "react-redux";
import { requestPopularMovies } from "../../Store/Reducers/HomePageReducer";

type PropsType = {
  freeToWaTch: string;
  showValue: (value: string) => void;
};

const HeroNav: React.FC<PropsType> = ({ freeToWaTch, showValue }) => {
  //const currentPages = useSelector((state:AppStateType) =>curentPageSelector(state))
  const dispatch = useDispatch();

  const selectPageOne = () => {
    dispatch(requestPopularMovies(Math.floor(Math.random() * 20) + 1));
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

export default HeroNav;
