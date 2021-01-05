import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getPeopleApi } from "../../../Api/Api";
import {
  CombineCreditsCrewType,
  CombinedCreditsCastType,
  DetailType,
  ExternalIdsType,
  PopularPeopleObjectType,
} from "../../../Types/Types";
import { AppStateType } from "../store";

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

type ActionsTypes =
  | GetPeopleDetailType
  | GetCombineCastType
  | GetCombineCrewType
  | GetSocialType
  | GetPopularPeopleType

  type DispatchType = Dispatch<ActionsTypes>
  type GetStateType = ()=> AppStateType
  type ThunkType =ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

const peopleReducer = (state = initialState, action: ActionsTypes): initialStateType => {
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
type GetCombineCastType = {
  type: typeof GET_COMBINE_CREDITS_CAST;
  combinedCreditsCast: Array<CombinedCreditsCastType>
};
export const getCombineCreditsCast = (
  combinedCreditsCast:Array<CombinedCreditsCastType>
): GetCombineCastType => {
  return { type: GET_COMBINE_CREDITS_CAST, combinedCreditsCast };
};
//CombineCreditsCrew
type GetCombineCrewType = {
  type: typeof GET_COMBINE_CREDITS_CREW;
  combinedCreditsCrew:Array<CombineCreditsCrewType>;
};

export const getCombineCreditsCrew = (
  combinedCreditsCrew: Array<CombineCreditsCrewType>
): GetCombineCrewType => {
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
type GetPopularPeopleType = {
  type: typeof GET_POPULAR_PEOPLE;
  popularPeople: PopularPeopleObjectType;
};
export const getPopularPeolple = (
  popularPeople: PopularPeopleObjectType
): GetPopularPeopleType => {
  return { type: GET_POPULAR_PEOPLE, popularPeople };
};

//Thunk
export const requestDetail = (personId: string):ThunkType => async (dispatch: DispatchType) => {
  const res = await getPeopleApi.getDetails(personId);
  dispatch(getPeopleDetail(res));
};

export const requestCombineCast = (personId: string):ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getPeopleApi.getCombinedCreditsCast(personId);
  dispatch(getCombineCreditsCast(res));
};
export const requestCombineCrew = (personId: string):ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getPeopleApi.getCombinedCreditsCrew(personId);
  dispatch(getCombineCreditsCrew(res));
};
export const requestSocial = (personId: string):ThunkType => async (dispatch: DispatchType) => {
  const res = await getPeopleApi.getExternalId(personId);
  dispatch(getSocial(res));
};

export const requestPopularPeople = (currentPage: number):ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getPeopleApi.getPopular(currentPage);
  dispatch(getPopularPeolple(res));
};

export default peopleReducer;
