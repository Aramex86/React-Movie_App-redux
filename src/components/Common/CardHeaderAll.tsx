import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  requestReviews,
  requestDetails,
} from "../Store/Reducers/MovieListReducer";
import { detailsSelector } from "../Store/Selectors/MovieSelector";
import { AppStateType } from "../Store/store";
import { GoArrowLeft } from "react-icons/go";


type ParamsType = {
  id: string;
};
const CardHeaderAll = () => {
  const details = useSelector((state: AppStateType) => detailsSelector(state));
  let goBack = useHistory();
  let { id }: ParamsType = useParams();
  const realeseYear = details?.release_date.slice(0, 4);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestReviews(Number(id)));
    dispatch(requestDetails(Number(id)));
  }, [id, dispatch]);

  const handleBack = () => {
    goBack.push(`/movie-card/${id}`);
  };

  return (
    <div>
      <div className="cardheaderall">
        <div className="cardheaderall__img">
          <img
            src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="cardheaderall__desc">
          <span>
            {details?.title} ({realeseYear})
          </span>
          <button className="btn btn--back" onClick={handleBack}>
            <GoArrowLeft />
            Back to main
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardHeaderAll;
