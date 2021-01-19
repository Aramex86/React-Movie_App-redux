import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { requestCollection } from "../Store/Reducers/CollectionReducer";
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

  useEffect(() => {
    dispatch(requestCollection(id));
    dispatch(requestGenres());
  }, []);

  const parts = collection ? collection.parts : [];
  const credistId = collection ? collection?.parts.map((item) => item.id) : [];

  return (
    <div>
      <CollectionHeader />
      <PosterIntro parts={parts} collection={collection} />
      <FeaturedCast credistId={credistId} />
      <FeaturedCrew credistId={credistId} />
      <Movies parts={parts} />
    </div>
  );
};

export default Collection;
