import { getHomePgeApi, getMoviesApi, getSearchApi } from "../../../Api/Api";
import {
  NowPlayngType,
  PopularType,
  TraidingsType,
  TVPopularType,
  UpComingType,
  VideoType,
} from "../../../Types/Types";

const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
const GET_NOW_PLAYING = "GET_NOW_PLAYING";
const GET_NOW_TVPLAYING = "GET_NOW_TVPLAYING";
//const GET_SEARCH_MOVIES = 'GET_SEARCH_MOVIES';
const GET_TRAILERS = "GET_TRAILERS";
const GET_TREDINGS = "GET_TREDINGS";
const GET_UPCOMING = "GET_UPCOMING";
const FETCHING = "FETCHING";
const LOAD__MORE__POP = "LOAD__MORE_POP";
const LOAD__MORE__NPL = "LOAD__MORE__NPL";

const initialState = {
  popularMovies: [] as Array<PopularType>,
  currentPage: 1,
  nowPlaying: [] as Array<NowPlayngType>,
  nowTvPlaying: [] as Array<TVPopularType>,
  trailers: [] as Array<VideoType>,
  traidings: [] as Array<TraidingsType>,
  upComing: [] as Array<UpComingType>,
  fetching: true,
  loadMorePop: [] as Array<PopularType>,
  loadMoreNowPl: [] as Array<NowPlayngType>,
};

type initialStateType = typeof initialState;

const homePageReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case GET_POPULAR_MOVIES: {
      return {
        ...state,
        popularMovies: action.popularMovies,
      };
    }
    case GET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case GET_NOW_PLAYING: {
      return {
        ...state,
        nowPlaying: action.nowPlaying,
      };
    }
    case GET_NOW_TVPLAYING: {
      return {
        ...state,
        nowTvPlaying: action.nowTvPlaying,
      };
    }

    case GET_TRAILERS: {
      return {
        ...state,
        trailers: action.trailers,
      };
    }
    case GET_TREDINGS: {
      return {
        ...state,
        traidings: action.traidings,
      };
    }
    case GET_UPCOMING: {
      return {
        ...state,
        upComing: action.upComing,
      };
    }
    case FETCHING: {
      return {
        ...state,
        fetching: action.fetching,
      };
    }
    case LOAD__MORE__POP: {
      return {
        ...state,
        loadMorePop: [...state.loadMorePop,action.loadMorePop].flat(),
      };
    }
    case LOAD__MORE__NPL: {
      return {
        ...state,
        loadMoreNowPl: [...state.loadMoreNowPl, ...action.loadMoreNowPl],
      };
    }
    default:
      return state;
  }
};

//Popular Movies
type GetPopularType = {
  type: typeof GET_POPULAR_MOVIES;
  popularMovies: Array<PopularType>;
};

export const getPopularMovies = (
  popularMovies: Array<PopularType>
): GetPopularType => {
  return { type: GET_POPULAR_MOVIES, popularMovies };
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
  type: typeof GET_NOW_PLAYING;
  nowPlaying: Array<NowPlayngType>;
};

export const getNowPlaying = (
  nowPlaying: Array<NowPlayngType>
): GetNowPlayingtype => {
  return { type: GET_NOW_PLAYING, nowPlaying };
};
// TV
type GetNowTvPlaing = {
  type: typeof GET_NOW_TVPLAYING;
  nowTvPlaying: Array<TVPopularType>;
};

export const getNowTvPlaying = (
  nowTvPlaying: Array<TVPopularType>
): GetNowTvPlaing => {
  return { type: GET_NOW_TVPLAYING, nowTvPlaying };
};
//Trailers
type GetTrailersType = {
  type: typeof GET_TRAILERS;
  trailers: Array<VideoType>;
};

export const getTrailers = (trailers: Array<VideoType>): GetTrailersType => {
  return { type: GET_TRAILERS, trailers };
};
//Traidings
type GetTraidingsType = {
  type: typeof GET_TREDINGS;
  traidings: Array<TraidingsType>;
};
export const getTraidings = (
  traidings: Array<TraidingsType>
): GetTraidingsType => {
  return { type: GET_TREDINGS, traidings };
};

type GetUpComingType = {
  type: typeof GET_UPCOMING;
  upComing: Array<UpComingType>;
};

export const getUpComing = (upComing: Array<UpComingType>): GetUpComingType => {
  return { type: GET_UPCOMING, upComing };
};
type FetchingType = {
  type: typeof FETCHING;
  fetching: boolean;
};
export const getFetching = (fetching: boolean): FetchingType => {
  return { type: FETCHING, fetching };
};
/////////////////////////////////////////////
type LoadMorePopType = {
  type: typeof LOAD__MORE__POP;
  loadMorePop: Array<PopularType>;
};

export const getLoadMorePop = (loadMorePop: Array<PopularType>): LoadMorePopType => {
  return { type: LOAD__MORE__POP, loadMorePop };
};
type LoadMoreNPLType = {
  type: typeof LOAD__MORE__NPL;
  loadMoreNowPl: Array<NowPlayngType>;
};

export const getLoadMoreNPL = (loadMoreNowPl: Array<PopularType>): LoadMoreNPLType => {
  return { type: LOAD__MORE__NPL, loadMoreNowPl };
};
///////////////////////////////
//Thunk
export const requestPopularMovies = (currentPage: number) => async (
  dispatch: any
) => {
  dispatch(getFetching(true));
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getPopular(currentPage);
  console.log(res)
  dispatch(getPopularMovies(res.results));
  dispatch(getFetching(false));
};
export const requestNowPlaying = (currentPage: number) => async (
  dispatch: any
) => {
  dispatch(getFetching(true));
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getNowPlaying(currentPage);
  dispatch(getNowPlaying(res.results));
  dispatch(getFetching(false));
};

export const requestNowTvPlaying = (currentPage: number) => async (
  dispatch: any
) => {
  dispatch(getFetching(true));
  const res = await getHomePgeApi.getNowTvPlaying(currentPage);
  dispatch(getNowTvPlaying(res.results));
  dispatch(getFetching(false));
};

export const requestTrailers = (movieId: number) => async (dispatch: any) => {
  const res = await getMoviesApi.getVideos(movieId);
  dispatch(getTrailers(res));
};

export const requestTraidings = (value: string) => async (dispatch: any) => {
  dispatch(getFetching(true));
  const res = await getHomePgeApi.getTraidings(value);
  dispatch(getTraidings(res));
  dispatch(getFetching(false));
};
export const requestUpComing = (randomPage: number) => async (
  dispatch: any
) => {
  dispatch(getFetching(true));
  const res = await getHomePgeApi.getUpcomming(randomPage);
  dispatch(getUpComing(res));
  dispatch(getFetching(false));
};

export const requestloadMorePopular = (currentPage: number) => async (
  dispatch: any
) => {
  const res = await getHomePgeApi.getPopular(currentPage);
  //console.log(res);
  dispatch(getLoadMorePop(res.results));
  dispatch(getCurrentPage(currentPage));
};
export const requestloadMoreNowPlaying = (currentPage: number) => async (
  dispatch: any
) => {
  const res = await getHomePgeApi.getNowPlaying(currentPage);
  //console.log(res);
  dispatch(getLoadMoreNPL(res.results));
  dispatch(getCurrentPage(currentPage));
};

export default homePageReducer;
