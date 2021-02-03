import React from "react";
import { useSelector } from "react-redux";
import { errorSelector } from "../Store/Selectors/MovieSelector";
import { errorsSelector } from "../Store/Selectors/Tvselector";
import { AppStateType } from "../Store/store";

const PageNotFound = () => {
  const errorMOV = useSelector((state: AppStateType) => errorSelector(state));
  const errorTv = useSelector((state: AppStateType) => errorsSelector(state));

  const closeTab = () => {
    window.close();
  };

  return (
    <div className="notfoundwrapper">
      <div className="notfoundwrapper_banner">
        <h1>{errorMOV}{errorTv}</h1>
        <button className="btn btn--closeTab" onClick={closeTab}>
          close tab
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
