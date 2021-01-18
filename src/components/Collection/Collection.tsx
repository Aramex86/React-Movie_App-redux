import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCollection } from "../Store/Reducers/CollectionReducer";
import { requestGenres } from "../Store/Reducers/MovieListReducer";
import { collectionSelector } from "../Store/Selectors/CollectionSelector";
import { AppStateType } from "../Store/store";
import CollectionHeader from "./CollectionHeader";
import FeaturedCast from "./FeaturedCast";
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

  const credistId = collection?.parts.map(item=>item.id);

  console.log(credistId);

  return (
    <div>
      <CollectionHeader />
      <PosterIntro parts={collection?.parts} collection={collection} />
      <FeaturedCast credistId={credistId} />
      <div>Featured Crew</div>
      <div>movies</div>
    </div>
  );
};

export default Collection;
