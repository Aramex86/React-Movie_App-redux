import { getPeopleApi } from "../../../Api/Api";
import { CombineCreditsCrewType, CombinedCreditsCastType, DetailType } from "../../../Types/Types";

const GET_DETAIL = "GET_DETAIL";
const GET__COMBINE_CREDITS_CAST ='GET__COMBINE_CREDITS_CAST';
const GET__COMBINE_CREDITS_CREW ='GET__COMBINE_CREDITS_CREW';

const initialState = {
  detail: null as DetailType | null,
  combinedCreditsCast: [] as Array<CombinedCreditsCastType>,
  combinedCreditsCrew: [] as Array<CombineCreditsCrewType>
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
    case GET__COMBINE_CREDITS_CAST: {
      return {
        ...state,
        combinedCreditsCast: action.combinedCreditsCast,
      };
    }
    case GET__COMBINE_CREDITS_CREW: {
      return {
        ...state,
        combinedCreditsCrew: action.combinedCreditsCrew,
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

//CombineCreditsCast
type GetCombineCast ={
  type:typeof GET__COMBINE_CREDITS_CAST
  combinedCreditsCast: CombinedCreditsCastType
}

export const getCombineCreditsCast=(combinedCreditsCast:CombinedCreditsCastType):GetCombineCast=>{
  return {type:GET__COMBINE_CREDITS_CAST,combinedCreditsCast}
}
//CombineCreditsCrew
type GetCombineCrew ={
  type:typeof GET__COMBINE_CREDITS_CREW
  combinedCreditsCrew: CombineCreditsCrewType
}

export const getCombineCreditsCrew=(combinedCreditsCrew:CombineCreditsCrewType):GetCombineCrew=>{
  return {type:GET__COMBINE_CREDITS_CREW,combinedCreditsCrew}
}

//Thunk
export const requestDetail=(personId:number)=>async(dispatch:any)=>{
    const res = await getPeopleApi.getDetails(personId)
    dispatch(getPeopleDetail(res))
}

export const requestCombineCast=(personId:number)=>async(dispatch:any)=>{
  const res = await getPeopleApi.getCombinedCreditsCast(personId)
  dispatch(getCombineCreditsCast(res))
}
export const requestCombineCrew=(personId:number)=>async(dispatch:any)=>{
  const res = await getPeopleApi.getCombinedCreditsCrew(personId)
  dispatch(getCombineCreditsCrew(res))
}


export default peopleReducer;
