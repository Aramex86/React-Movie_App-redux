import { getPeopleApi } from "../../../Api/Api";
import {CombinedCreditsType, DetailType } from "../../../Types/Types";

const GET_DETAIL = "GET_DETAIL";
const GET__COMBINE_CREDITS ='GET__COMBINE_CREDITS';

const initialState = {
  detail: null as DetailType | null,
  combinedCredits: [] as Array<CombinedCreditsType>
};

type initialStateType = typeof initialState;

const peopleReducer = (state = initialState, action: any):initialStateType => {
  switch (action.type) {
    case GET_DETAIL: {
      return {
        ...state,
        detail: action.detail,
      };
    }
    case GET__COMBINE_CREDITS: {
      return {
        ...state,
        combinedCredits: action.combinedCredits,
      };
    }
    default:
      return state;
  }
};
//Actions
//Detail
type GetPeopleDetailType = {
  type: typeof GET_DETAIL;
  detail: DetailType;
};

export const getPeopleDetail = (detail: DetailType): GetPeopleDetailType => {
  return { type: GET_DETAIL, detail };
};

//CombineCredits
type GetCombine ={
  type:typeof GET__COMBINE_CREDITS
  combinedCredits: CombinedCreditsType
}

export const getCombineCredits=(combinedCredits:CombinedCreditsType):GetCombine=>{
  return {type:GET__COMBINE_CREDITS,combinedCredits}
}

//Thunk
export const requestDetail=(personId:number)=>async(dispatch:any)=>{
    const res = await getPeopleApi.getDetails(personId)
    dispatch(getPeopleDetail(res))
}

export const requestCombine=(personId:number)=>async(dispatch:any)=>{
  const res = await getPeopleApi.getCombinedCredits(personId)
  dispatch(getCombineCredits(res))
}


export default peopleReducer;
