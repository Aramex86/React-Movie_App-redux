import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsSelector,
  creditsSelector,
} from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";
import CradHeader from "../Common/CardHeader";
import { useParams } from "react-router";
import { requestCredits } from "../Store/Reducers/MovieListReducer";
import { Link } from "react-router-dom";
import CastCard from "../Common/CastCard";
import CrewCard from "../Common/CrewCard";
import CardHeaderAll from "../Common/CardHeaderAll";

type ParamsType = {
  id: string;
};

const FullList = () => {
  let { id }: ParamsType = useParams();
  const credits = useSelector((state: AppStateType) => creditsSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCredits(Number(id)));
  }, [id, dispatch]);

  return (
    <div className="fulllistwrapp">
      <CradHeader />
      <CardHeaderAll />
      <div className="credistwrapp">
        <div className="credistwrapp__cast">
          <span className="credistwrapp-heading">
            Cast <span>{credits?.cast.length}</span>
          </span>
          {credits?.cast.map((elem) => (
            <Link to={`/posterstaff/${elem.id}`} key={elem.credit_id}>
              <CastCard
                character={elem.character}
                gender={elem.gender}
                credit_id={elem.credit_id}
                id={elem.id}
                name={elem.name}
                profile_path={elem.profile_path}
              />
            </Link>
          ))}
        </div>
        <div className="credistwrapp__crew">
          <span className="credistwrapp-heading">
            Crew <span>{credits?.crew.length}</span>
          </span>
          {credits?.crew.map((elem) => (
            <Link to={`/posterstaff/${elem.id}`} key={elem.credit_id}>
              <CrewCard
                gender={elem.gender}
                credit_id={elem.credit_id}
                id={elem.id}
                name={elem.name}
                profile_path={elem.profile_path}
                department={elem.department}
                elem={elem}
                job={elem.job}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullList;
