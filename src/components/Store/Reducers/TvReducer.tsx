import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getTvApi } from "../../../Api/Api";
import {
  CreditsType,
  ExternalIdsType,
  KeywordsType,
  RecomandType,
  ReviewsType,
  TvDetailType,
  VideoType,
} from "../../../Types/Types";
import { AppStateType } from "../store";

const GET_DETAILS_TV = "GET_DETAILS_TV";
const FETCHING_REQUEST = "FETCHING_REQUEST";
const GET_CREDITS_TV = "GET_CREDITS_TV";
const GET_REVIEWS = "GET_REVIEWS";
const GET_VIDEOS = "GET_VIDEOS";
const GET_RECOMAND = "GET_RECOMAND";
const GET_KEYWORDS = "GET_KEYWORDS";
const GET_EXTERNAL = "GET_EXTERNAL";

const initialState = {
  tvDetails: null as TvDetailType | null,
  credits: null as CreditsType | null,
  reviews: [] as Array<ReviewsType>,
  videos: [] as Array<VideoType>,
  recomad: [] as Array<RecomandType>,
  keywords: [] as Array<KeywordsType>,
  external: null as ExternalIdsType | null,
  isFetching: false,
  errorMessage: "",
};

type initialStateType = typeof initialState;
type ActionsTypes =
  | GetTvDetailsType
  | IsFetchingReqType
  | GetCreditsType
  | GetTvReviewsType
  | GetVideosType
  | GetRecomandType
  | GetKeywordsType
  | GetExternalType;

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
    case GET_REVIEWS: {
      return {
        ...state,
        reviews: action.reviews,
      };
    }
    case GET_VIDEOS: {
      return {
        ...state,
        videos: action.videos,
      };
    }
    case GET_RECOMAND: {
      return {
        ...state,
        recomad: action.recomad,
      };
    }
    case GET_KEYWORDS: {
      return {
        ...state,
        keywords: action.keywords,
      };
    }
    case GET_EXTERNAL: {
      return {
        ...state,
        external: action.external,
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

type GetTvReviewsType = {
  type: typeof GET_REVIEWS;
  reviews: Array<ReviewsType>;
};

export const getTvReviews = (reviews: Array<ReviewsType>): GetTvReviewsType => {
  return { type: GET_REVIEWS, reviews };
};

type GetVideosType = {
  type: typeof GET_VIDEOS;
  videos: Array<VideoType>;
};
export const getVideos = (videos: Array<VideoType>): GetVideosType => {
  return { type: GET_VIDEOS, videos };
};
type GetRecomandType = {
  type: typeof GET_RECOMAND;
  recomad: Array<RecomandType>;
};

export const getRecomand = (recomad: Array<RecomandType>): GetRecomandType => {
  return { type: GET_RECOMAND, recomad };
};

type GetKeywordsType = {
  type: typeof GET_KEYWORDS;
  keywords: Array<KeywordsType>;
};

export const getKeywords = (keywords: Array<KeywordsType>): GetKeywordsType => {
  return { type: GET_KEYWORDS, keywords };
};

type GetExternalType = {
  type: typeof GET_EXTERNAL;
  external: ExternalIdsType;
};

export const getExternal = (external: ExternalIdsType): GetExternalType => {
  return { type: GET_EXTERNAL, external };
};

// Thunk

export const requestTvDetails = (tvId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(isFetchingReq(true));
  const res = await getTvApi.getTvDetails(tvId);
  dispatch(getTvDeatails(res));
  dispatch(isFetchingReq(false));
};
export const requestCredits = (tvId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getTvApi.getCastTv(tvId);
  dispatch(getCreditsTv(res));
};

export const requestTvReviews = (tvId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getTvApi.getReviews(tvId);
  dispatch(getTvReviews(res));
};
export const requestVideos = (movieId: number): ThunkType => async (
  dispatch: any
) => {
  const res = await getTvApi.getVideos(movieId);
  dispatch(getVideos(res));
};
export const requestRecomand = (tvId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getTvApi.getRecomand(tvId);
  dispatch(getRecomand(res));
};
export const requestKeywords = (tvId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getTvApi.getKeywords(tvId);
  dispatch(getKeywords(res));
};

export const requestExternal = (tvId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getTvApi.getExternalIds(tvId);
  dispatch(getExternal(res));
};

export default movieListReducer;
