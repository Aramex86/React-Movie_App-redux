import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCollection } from "../Store/Reducers/CollectionReducer";
import { requestGenres } from "../Store/Reducers/MovieListReducer";
import { collectionSelector } from "../Store/Selectors/CollectionSelector";
import { AppStateType } from "../Store/store";
import CollectionHeader from "./CollectionHeader";
import PosterIntro from "./PosterIntro";

const Collection = () => {
    const dispatch = useDispatch();
    const collection = useSelector((state: AppStateType) =>
    collectionSelector(state)
  );
  useEffect(() => {
    dispatch(requestCollection());
    dispatch(requestGenres());
  }, []);

  console.log(collection);
  return (
    <div>
      <CollectionHeader />
      <PosterIntro collection={collection}/>
      <div>Featured Cast</div>
      <div>Featured Crew</div>
      <div>movies</div>
    </div>
  );
};

export default Collection;
