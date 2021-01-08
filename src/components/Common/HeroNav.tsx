import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPopularMovies } from "../Store/Reducers/HomePageReducer";
import { selectedSelector } from "../Store/Selectors/HomePageSelector";
import { AppStateType } from "../Store/store";

type PropsType = {
  show: string;
  showValue: (value: string) => void;
};

const HeroNav: React.FC<PropsType> = ({ show, showValue}) => {
  const dispatch = useDispatch();


  const selectPage = () => {
    dispatch(requestPopularMovies(Math.floor(Math.random() * 20) + 1));
  };

  return (
    <ul className="herowrapnav">
      <li className="herowrapnav__item">
        <button
          onClick={() => {
            showValue("stream");
            selectPage();
          }}
          className={`btn btn--heronav ${
            show === "stream" ? "btn--heroactive" : ""
          }`}
        >
          <span>streming</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => {
            showValue("onTv");
            selectPage();
          }}
          className={`btn btn--heronav ${
            show === "onTv" ? "btn--heroactive" : ""
          }`}
        >
          <span>on tv</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => {
            showValue("rent");
            selectPage();
          }}
          className={`btn btn--heronav ${
            show === "rent" ? "btn--heroactive" : ""
          }`}
        >
          <span>for ret</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => {
            showValue("theater");
            selectPage();
          }}
          className={`btn btn--heronav ${
            show === "theater" ? "btn--heroactive" : ""
          }`}
        >
          <span>in theaters</span>
        </button>
      </li>
    </ul>
  );
};

export default HeroNav;
