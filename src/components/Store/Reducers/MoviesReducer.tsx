import { getHomePgeApi } from "../../../Api/Api";
import {
  NowPlayingObjectType,
  PopularObjectType,
} from "../../../Types/Types";

const GET_POPULAR_MOVIES__PAGE = "GET_POPULAR_MOVIES";
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
const GET_NOW_PLAYING__PAGE = "GET_NOW_PLAYING";
const FETCHING = "FETCHING";

const initialState = {
  popularMoviesPage: null as PopularObjectType | null,
  currentPage: 1,
  nowPlayingPage: null as NowPlayingObjectType | null,
  fetching: true,
};

type initialStateType = typeof initialState;

const moviesReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case GET_POPULAR_MOVIES__PAGE: {
      return {
        ...state,
        popularMoviesPage: action.popularMoviesPage,
      };
    }
    case GET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case GET_NOW_PLAYING__PAGE: {
      return {
        ...state,
        nowPlayingPage: action.nowPlayingPage,
      };
    }
    case FETCHING: {
      return {
        ...state,
        fetching: action.fetching,
      };
    }
   
    default:
      return state;
  }
};

//Popular Movies
type GetPopularType = {
  type: typeof GET_POPULAR_MOVIES__PAGE;
  popularMoviesPage: PopularObjectType;
};

export const getPopularMoviesPage = (
  popularMoviesPage: PopularObjectType
): GetPopularType => {
  return { type: GET_POPULAR_MOVIES__PAGE, popularMoviesPage };
};
//
type GetCurrentPage = {
  type: typeof GET_CURRENT_PAGE;
  currentPage: number;
};

export const getCurrentPage = (currentPage: number): GetCurrentPage => {
  return { type: GET_CURRENT_PAGE, currentPage };
};

//
type GetNowPlayingtype = {
  type: typeof GET_NOW_PLAYING__PAGE;
  nowPlayingPage: NowPlayingObjectType
};

export const getNowPlaying = (
  nowPlayingPage: NowPlayingObjectType
): GetNowPlayingtype => {
  return { type: GET_NOW_PLAYING__PAGE, nowPlayingPage };
};
type FetchingType = {
  type: typeof FETCHING;
  fetching: boolean;
};
export const getFetching = (fetching: boolean): FetchingType => {
  return { type: FETCHING, fetching };
};

//Thunk
export const requestPopularMoviesPage = (currentPage: number) => async (
  dispatch: any
) => {
  dispatch(getFetching(true));
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getPopular(currentPage);
  console.log(res);
  dispatch(getPopularMoviesPage(res));
  dispatch(getFetching(false));
};

export const requestNowPlayingMoviesPage = (currentPage: number) => async (
  dispatch: any
) => {
  dispatch(getFetching(true));
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getNowPlaying(currentPage);
  dispatch(getNowPlaying(res));
  dispatch(getFetching(false));
};


export default moviesReducer;
