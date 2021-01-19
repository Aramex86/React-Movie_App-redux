import { type } from "os";
import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CollectionCard from "../Common/CollectionsCard";
import { requestCredits } from "../Store/Reducers/MovieListReducer";
import { creditsSelector } from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";

type PropsType = {
  readonly credistId: Array<number>;
};

const FeaturedCast: FC<PropsType> = ({ credistId }) => {
  const credits = useSelector((state: AppStateType) => creditsSelector(state));
  const dispatch = useDispatch();

  const id = credistId?.slice(0, 1).toString();

  useEffect(() => {
    dispatch(requestCredits(Number(id)));
  }, [credistId]);

  return (
    <>
      <h1 className="heading__collection">Featured Cast</h1>
      <div className="featuredcastwrapp">
        <CollectionCard cast={credits?.cast} />
      </div>
    </>
  );
};

export default FeaturedCast;
