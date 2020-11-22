import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { AppStateType } from "../../Store/store";
import { DetailType} from "../../../Types/Types";
import {
  requestDetail,
  getPeopleDetail
} from "../../Store/Reducers/PeopleReducer";
import { useParams } from "react-router";
import { detailSelector } from "../../Store/Selectors/PeopleSelector";



type ParamsType = {
  id: string;
};



const PosterStaffPage:React.FC<DetailType> = ({ detail,requestDetail }) => {
  const personId:ParamsType = useParams()

  useEffect(()=>{
    requestDetail(+personId.id)
  },[])

  console.log(detail)
  return <div>
      <h1>{detail?detail.id:''}</h1>
    
  </div>;
};


const mapStateToProps = (state: AppStateType) => {
  return {
    detail:detailSelector(state)
  };
};

export default connect(mapStateToProps,{requestDetail,getPeopleDetail})(PosterStaffPage);

