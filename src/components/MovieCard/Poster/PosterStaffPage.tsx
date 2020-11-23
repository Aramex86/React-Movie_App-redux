import {useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { AppStateType } from "../../Store/store";
import { CombinedCreditsType, DetailType} from "../../../Types/Types";
import {
  requestCombine,
  requestDetail,
} from "../../Store/Reducers/PeopleReducer";
import { useParams } from "react-router";
import { combineSelector, detailSelector } from "../../Store/Selectors/PeopleSelector";
import StaffCard from './StaffCard';
import StaffHeader from './StaffHeader';


type ParamsType = {
  id: string;
};



const PosterStaffPage:React.FC<DetailType> = () => {
  const detail:DetailType|null = useSelector((state:AppStateType) => detailSelector(state));
  const combine:Array<CombinedCreditsType> = useSelector((state:AppStateType)=> combineSelector(state))
  const dispatch = useDispatch()
  const personId:ParamsType = useParams()

  
// console.log(personId);
// console.log(detail)
// console.log(combine)

  useEffect(()=>{
  dispatch(requestDetail(+personId.id))
  dispatch(requestCombine(+personId.id))  
  },[dispatch,personId.id])

  return <div>
      <StaffHeader/>
      <StaffCard cardDetails={detail} combine={combine}/>
    
  </div>;
};




export default PosterStaffPage;

