import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  requestCollection,
  requestParts,
} from "../Store/Reducers/CollectionReducer";
import { requestGenres } from "../Store/Reducers/MovieListReducer";
import { collectionSelector } from "../Store/Selectors/CollectionSelector";
import { AppStateType } from "../Store/store";
import CollectionHeader from "./CollectionHeader";
import FeaturedCast from "./FeaturedCast";
import FeaturedCrew from "./FeaturedCrew";
import Movies from "./Movies";
import PosterIntro from "./PosterIntro";

type PartsType = {
  parts: Array<PartsType>;
};

const Collection = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const collection = useSelector((state: AppStateType) =>
    collectionSelector(state)
  );
  const credistId = collection ? collection?.parts.map((item) => item.id) : [];

  useEffect(() => {
    dispatch(requestCollection(id));
    dispatch(requestGenres());
    dispatch(requestParts(id));
  }, []);

  return (
    <div>
      <CollectionHeader />
      <PosterIntro collection={collection} />
      <FeaturedCast credistId={credistId} />
      <FeaturedCrew credistId={credistId} />
      <Movies />
    </div>
  );
};

export default Collection;
