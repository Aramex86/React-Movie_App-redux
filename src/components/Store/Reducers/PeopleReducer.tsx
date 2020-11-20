import { getPeopleApi } from "../../../Api/Api";
import { DetailType } from "../../../Types/Types";

const GET_DETAIL = "GET_DETAIL";

const initialState = {
  detail: null as DetailType | null,
};

type initialStateType = typeof initialState;

const peopleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DETAIL: {
      return {
        ...state,
        detail: action.detail,
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

//Thunk
export const requestDetail=(personId:number)=>async(dispatch:any)=>{
    const res = await getPeopleApi.getDetails(personId)
    dispatch(getPeopleDetail(res))
}

export default peopleReducer;
