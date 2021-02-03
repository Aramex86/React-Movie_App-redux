import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsSelector,
  creditsSelector,
} from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";
import CradHeader from "../Common/CardHeader";
import { GoArrowLeft } from "react-icons/go";
import { useHistory, useParams } from "react-router";
import { requestCredits } from "../Store/Reducers/MovieListReducer";
import { requestDetails } from "../Store/Reducers/MovieListReducer";
import { Link } from "react-router-dom";
import CastCard from "../Common/CastCard";

type ParamsType = {
  id: string;
};

const FullList = () => {
  let { id }: ParamsType = useParams();
  let goBack = useHistory();
  const details = useSelector((state: AppStateType) => detailsSelector(state));
  const credits = useSelector((state: AppStateType) => creditsSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCredits(Number(id)));
    dispatch(requestDetails(Number(id)));
  }, [id, dispatch]);

  const realeseYear = details?.release_date.slice(0, 4);
  const handleBack = () => {
    goBack.push(`/movie-card/${id}`);
  };

  console.log(details);
  console.log(credits);

  return (
    <div className="fulllistwrapp">
      <CradHeader />
      <div className="movieinfo">
        <div className="movieinfo__img">
          <img
            src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="movieinfo__desc">
          <span>
            {details?.title} ({realeseYear})
          </span>
          <button className="btn btn--back" onClick={handleBack}>
            <GoArrowLeft />
            Back to main
          </button>
        </div>
      </div>
      <div className="credistwrapp">
        <div className="credistwrapp__cast">
            <span className='credistwrapp__cast-heading'>Cast <span>{credits?.cast.length}</span></span>
          {credits?.cast.map((elem) => (
            <Link to="somewere" key={elem.credit_id}>
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
        <div className="credistwrapp__crew"></div>
      </div>
    </div>
  );
};

export default FullList;
