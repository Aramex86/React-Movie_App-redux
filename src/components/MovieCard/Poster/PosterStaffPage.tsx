import {useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { AppStateType } from "../../Store/store";
import { CombineCreditsCrewType, CombinedCreditsCastType, DetailType} from "../../../Types/Types";
import {
  requestCombineCast,
  requestCombineCrew,
  requestDetail,
} from "../../Store/Reducers/PeopleReducer";
import { useParams } from "react-router";
import { combineCastSelector, combineCrewSelector, detailSelector } from "../../Store/Selectors/PeopleSelector";
import StaffCard from './StaffCard';
import StaffHeader from './StaffHeader';


type ParamsType = {
  id: string;
};



const PosterStaffPage:React.FC<DetailType> = () => {
  const detail:DetailType|null = useSelector((state:AppStateType) => detailSelector(state));
  const combineCast:Array<CombinedCreditsCastType> = useSelector((state:AppStateType)=> combineCastSelector(state))
  const combineCrew: Array<CombineCreditsCrewType> = useSelector((state:AppStateType)=> combineCrewSelector(state))
  const dispatch = useDispatch()
  const personId:ParamsType = useParams()

  
//console.log(personId);
// console.log(detail)
//  console.log(combineCast)
//  console.log(combineCrew)

  useEffect(()=>{
  dispatch(requestDetail(+personId.id))
  dispatch(requestCombineCast(+personId.id))  
  dispatch(requestCombineCrew(+personId.id))  
  },[dispatch,personId.id])

  return <div>
      <StaffHeader/>
      <StaffCard cardDetails={detail} combineCast={combineCast} combineCrew={combineCrew}/>
      
  </div>;
};




export default PosterStaffPage;

