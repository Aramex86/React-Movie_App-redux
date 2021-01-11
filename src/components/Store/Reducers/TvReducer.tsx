import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getTvApi } from "../../../Api/Api";
import { CreditsType, TvDetailType } from "../../../Types/Types";
import { AppStateType } from "../store";

const GET_DETAILS_TV = "GET_DETAILS_TV";
const FETCHING_REQUEST = "FETCHING_REQUEST";
const GET_CREDITS_TV = "GET_CREDITS_TV";

const initialState = {
  tvDetails: null as TvDetailType | null,
  credits: null as CreditsType | null,
  isFetching: false,
  errorMessage: "",
};

type initialStateType = typeof initialState;
type ActionsTypes = GetTvDetailsType | IsFetchingReqType | GetCreditsType;

type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

const movieListReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case GET_DETAILS_TV: {
      return {
        ...state,
        tvDetails: action.tvDetails,
      };
    }
    case FETCHING_REQUEST: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case GET_CREDITS_TV: {
      return {
        ...state,
        credits: action.credits,
      };
    }
    default:
      return state;
  }
};

type GetTvDetailsType = {
  type: typeof GET_DETAILS_TV;
  tvDetails: TvDetailType;
};

export const getTvDeatails = (tvDetails: TvDetailType): GetTvDetailsType => {
  return { type: GET_DETAILS_TV, tvDetails };
};
type IsFetchingReqType = {
  type: typeof FETCHING_REQUEST;
  isFetching: boolean;
};
export const isFetchingReq = (isFetching: boolean): IsFetchingReqType => {
  return { type: FETCHING_REQUEST, isFetching };
};
type GetCreditsType = {
  type: typeof GET_CREDITS_TV;
  credits: CreditsType;
};

export const getCreditsTv = (credits: CreditsType): GetCreditsType => {
  return { type: GET_CREDITS_TV, credits };
};

// Thunk

export const requestTvDetails = (TvId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getTvApi.getTvDetails(TvId);
  dispatch(getTvDeatails(res));
};
export const requestCredits = (TvId: number):ThunkType => async (dispatch: DispatchType) => {
    const res = await getTvApi.getCastTv(TvId);
    dispatch(getCreditsTv(res));
  };

export default movieListReducer;
