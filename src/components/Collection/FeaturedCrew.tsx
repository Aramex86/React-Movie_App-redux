import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CollectionCard from "../Common/CollectionsCard";
import { requestCredits } from "../Store/Reducers/TvReducer";
import { creditsSelector } from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";

type PropsType = {
  credistId: Array<number>;
};

const FeaturedCrew: FC<PropsType> = ({ credistId }) => {
  const credits = useSelector((state: AppStateType) => creditsSelector(state));
  const dispatch = useDispatch();

  const id = credistId?.slice(0, 1).toString();

  useEffect(() => {
    dispatch(requestCredits(Number(id)));
  }, [credistId]);

  return (
    <>
      <h1 className="heading__collection">Featured Crew</h1>
      <div className="featuredcastwrapp">
        <CollectionCard crew={credits?.crew} />
      </div>
    </>
  );
};

export default FeaturedCrew;
