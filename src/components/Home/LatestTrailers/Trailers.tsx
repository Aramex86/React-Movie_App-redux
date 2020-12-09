import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestVideos } from "../../Store/Reducers/MovieListReducer";
import { popularSelector } from "../../Store/Selectors/HomePageSelector";
import { viedoSelector } from "../../Store/Selectors/MovieSelector";
import { AppStateType } from "../../Store/store";

type TraylersType = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
};

const Trailers = () => {
  const popular = useSelector((state: AppStateType) => popularSelector(state));
  const video = useSelector((state: AppStateType) => viedoSelector(state));
  const dispatch = useDispatch();

  const popularId = [...popular.map((item) => item.id)];

  const trailes = [];

  trailes.push(video)

  useEffect(() => {
      dispatch(requestVideos(popularId[0]));
        console.log("video1");
  }, []);
  

  //console.log(popularId)
  console.log(video);
  console.log(trailes)

  return (
    <div className="trailerswrapp">
      <h1>Trailer</h1>
      <div className="container"></div>
    </div>
  );
};

export default Trailers;
