import React from "react";
import { useDispatch } from "react-redux";
import { requestTraidings } from "../../Store/Reducers/HomePageReducer";

type PropsType = {
  traiding: string;
  showValue: (value: string) => void;
};

const TraidingNav: React.FC<PropsType> = ({ traiding, showValue }) => {
  const dispatch = useDispatch();

  const selectPageOne = (value: string) => {
    dispatch(requestTraidings(value));
  };

  return (
    <ul className="herowrapnav herowrapnav--traidings">
      <li className="herowrapnav__item">
        <button
          onClick={() => {
            showValue("today");
            selectPageOne("day");
          }}
          className={`btn btn--heronav ${
            traiding === "today" ? "btn--heroactive" : ""
          }`}
        >
          <span>today</span>
        </button>
      </li>
      <li className="herowrapnav__item">
        <button
          onClick={() => {
            showValue("this week");
            selectPageOne("week");
          }}
          className={`btn btn--heronav ${
            traiding === "this week" ? "btn--heroactive" : ""
          }`}
        >
          <span>this week</span>
        </button>
      </li>
    </ul>
  );
};

export default TraidingNav;
