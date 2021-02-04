import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { AppStateType } from "../../components/Store/store";
import {
  CombineCreditsCrewType,
  CombinedCreditsCastType,
  DetailType,
  ExternalIdsType,
} from "../../Types/Types";
import {
  requestCombineCast,
  requestCombineCrew,
  requestDetail,
  requestSocial,
} from "../../components/Store/Reducers/PeopleReducer";
import { useParams } from "react-router";
import {
  combineCastSelector,
  combineCrewSelector,
  detailSelector,
  socialSelector,
} from "../../components/Store/Selectors/PeopleSelector";
import StaffCard from "./StaffCard";
import StaffHeader from "./StaffHeader";

type ParamsType = {
  id: string;
};

const PosterStaffPage: React.FC<DetailType> = () => {
  const detail: DetailType | null = useSelector((state: AppStateType) =>
    detailSelector(state)
  );
  const combineCast: Array<CombinedCreditsCastType> = useSelector(
    (state: AppStateType) => combineCastSelector(state)
  );
  const combineCrew: Array<CombineCreditsCrewType> = useSelector(
    (state: AppStateType) => combineCrewSelector(state)
  );
  const social: ExternalIdsType | null = useSelector((state: AppStateType) =>
    socialSelector(state)
  );
  const dispatch = useDispatch();
  const personId: ParamsType = useParams();

  // console.log(personId);
  // console.log(detail)
  //  console.log(combineCast)
  //  console.log(combineCrew)

  useEffect(() => {
    dispatch(requestDetail(personId.id));
    dispatch(requestCombineCast(personId.id));
    dispatch(requestCombineCrew(personId.id));
    dispatch(requestSocial(personId.id));
  }, [dispatch, personId.id]);

  return (
    <>
      <StaffHeader />
      <StaffCard
        cardDetails={detail}
        combineCast={combineCast}
        combineCrew={combineCrew}
        social={social}
      />
    </>
  );
};

export default PosterStaffPage;
