import { getHomePgeApi } from "../../../Api/Api";
import {
  NowPlayngType,
  PopularType,
  TVPopularType,
} from "../../../Types/Types";

const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
const GET_NOW_PLAYING = "GET_NOW_PLAYING";
const GET_NOW_TVPLAYING = "GET_NOW_TVPLAYING";

const initialState = {
  popularMovies: [] as Array<PopularType>,
  currentPage: 1,
  nowPlaying: [] as Array<NowPlayngType>,
  nowTvPlaying: [] as Array<TVPopularType>,
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

//Thunk
export const requestPopularMovies = (currentPage: number) => async (
  dispatch: any
) => {
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getPopular(currentPage);
  dispatch(getPopularMovies(res.results));
};
export const requestNowPlaying = (currentPage: number) => async (
  dispatch: any
) => {
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getNowPlaying(currentPage);
  dispatch(getNowPlaying(res.results));
};

export const requestNowTvPlaying = (currentPage:number) => async (dispatch: any) => {
  const res = await getHomePgeApi.getNowTvPlaying(currentPage);
  console.log(res);
  dispatch(getNowTvPlaying(res.results));
};

export default homePageReducer;
