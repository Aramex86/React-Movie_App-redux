import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestloadMore } from "../Store/Reducers/HomePageReducer";
import { loadMoreSelector } from "../Store/Selectors/HomePageSelector";
import { AppStateType } from "../Store/store";
import Popular from "./Popular";

const Movies = () => {
  const popular = useSelector((state: AppStateType) => loadMoreSelector(state));
  const dispatch = useDispatch();
  const [increment, setIncrement] = useState(1);

  const loadMore = () => {
    setIncrement((prev) =>  prev +1);
    dispatch(requestloadMore(increment));
  };
  useEffect(() => {
    dispatch(requestloadMore(increment));
}, []);
 console.log(increment);
  return (
    <div className="movieswrapp">
      <Popular popular={popular} loadMore={loadMore}/>
    </div>
  );
};

export default Movies;
