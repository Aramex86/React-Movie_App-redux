import { getPeopleApi } from "../../../Api/Api";
import {
  CombineCreditsCrewType,
  CombinedCreditsCastType,
  DetailType,
  ExternalIdsType,
  PopularPeopleObjectType,
} from "../../../Types/Types";

const GET_DETAIL = "GET_DETAIL";
const GET_COMBINE_CREDITS_CAST = "GET__COMBINE_CREDITS_CAST";
const GET_COMBINE_CREDITS_CREW = "GET__COMBINE_CREDITS_CREW";
const GET_EXTERNAL_ID = "GET_EXTERNAL_ID";
const GET_POPULAR_PEOPLE = "GET_POPULAR_PEOPLE";

const initialState = {
  detail: null as DetailType | null,
  combinedCreditsCast: [] as Array<CombinedCreditsCastType>,
  combinedCreditsCrew: [] as Array<CombineCreditsCrewType>,
  social: null as ExternalIdsType | null,
  popularPeople: null as PopularPeopleObjectType | null,
};
type initialStateType = typeof initialState;

const peopleReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case GET_DETAIL: {
      return {
        ...state,
        detail: action.detail,
      };
    }

    case GET_COMBINE_CREDITS_CAST: {
      return {
        ...state,
        combinedCreditsCast: action.combinedCreditsCast,
      };
    }
    case GET_COMBINE_CREDITS_CREW: {
      return {
        ...state,
        combinedCreditsCrew: action.combinedCreditsCrew,
      };
    }
    case GET_EXTERNAL_ID: {
      return {
        ...state,
        social: action.social,
      };
    }
    case GET_POPULAR_PEOPLE: {
      return {
        ...state,
        popularPeople: action.popularPeople,
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
type GetCombineCast = {
  type: typeof GET_COMBINE_CREDITS_CAST;
  combinedCreditsCast: CombinedCreditsCastType;
};

export const getCombineCreditsCast = (
  combinedCreditsCast: CombinedCreditsCastType
): GetCombineCast => {
  return { type: GET_COMBINE_CREDITS_CAST, combinedCreditsCast };
};
//CombineCreditsCrew
type GetCombineCrew = {
  type: typeof GET_COMBINE_CREDITS_CREW;
  combinedCreditsCrew: CombineCreditsCrewType;
};

export const getCombineCreditsCrew = (
  combinedCreditsCrew: CombineCreditsCrewType
): GetCombineCrew => {
  return { type: GET_COMBINE_CREDITS_CREW, combinedCreditsCrew };
};

// Social
type GetSocialType = {
  type: typeof GET_EXTERNAL_ID;
  social: ExternalIdsType;
};
export const getSocial = (social: ExternalIdsType): GetSocialType => {
  return { type: GET_EXTERNAL_ID, social };
};
//Popular
type GetPopularPeople = {
  type: typeof GET_POPULAR_PEOPLE;
  popularPeople: PopularPeopleObjectType;
};
export const getPopularPeolple = (
  popularPeople: PopularPeopleObjectType
): GetPopularPeople => {
  return { type: GET_POPULAR_PEOPLE, popularPeople };
};

//Thunk
export const requestDetail = (personId: string) => async (dispatch: any) => {
  const res = await getPeopleApi.getDetails(personId);
  dispatch(getPeopleDetail(res));
};

export const requestCombineCast = (personId: string) => async (
  dispatch: any
) => {
  const res = await getPeopleApi.getCombinedCreditsCast(personId);
  dispatch(getCombineCreditsCast(res));
};
export const requestCombineCrew = (personId: string) => async (
  dispatch: any
) => {
  const res = await getPeopleApi.getCombinedCreditsCrew(personId);
  dispatch(getCombineCreditsCrew(res));
};
export const requestSocial = (personId: string) => async (dispatch: any) => {
  const res = await getPeopleApi.getExternalId(personId);
  dispatch(getSocial(res));
};

export const requestPopularPeople=(currentPage:number)=> async (dispatch:any)=>{
  const res = await getPeopleApi.getPopular(currentPage);
   dispatch(getPopularPeolple(res))
}

export default peopleReducer;
