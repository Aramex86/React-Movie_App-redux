import { getHomePgeApi, getMoviesApi, getSearchApi } from "../../../Api/Api";
import {
  MovieListType,
  NowPlayngType,
  PopularType,
  TVPopularType,
  VideoType,
} from "../../../Types/Types";

const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
const GET_NOW_PLAYING = "GET_NOW_PLAYING";
const GET_NOW_TVPLAYING = "GET_NOW_TVPLAYING";
const GET_SEARCH_MOVIES = "GET_SEARCH_MOVIES";
const GET_HOME_VIDEOS = "GET_HOME_VIDEOS";

const initialState = {
  popularMovies: [] as Array<PopularType>,
  currentPage: 1,
  nowPlaying: [] as Array<NowPlayngType>,
  nowTvPlaying: [] as Array<TVPopularType>,
  searchMovies: "",
  homeVideo: [] as Array<VideoType>,
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
    case GET_SEARCH_MOVIES: {
      return {
        ...state,
        searchMovies: action.searchMovies,
      };
    }
    case GET_HOME_VIDEOS: {
      return {
        ...state,
        homeVideo:action.homeVideo
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

//Search
type GetSearchMovies = {
  type: typeof GET_SEARCH_MOVIES;
  searchMovies: string;
};

export const getSearchMovies = (searchMovies: string): GetSearchMovies => {
  return { type: GET_SEARCH_MOVIES, searchMovies };
};
//Videos
type GetHomeVideosType = {
  type: typeof GET_HOME_VIDEOS;
  homeVideo: Array<VideoType>;
};

export const getHomeMovies = (
  homeVideo: Array<VideoType>
): GetHomeVideosType => {
  return { type: GET_HOME_VIDEOS, homeVideo };
};

//Thunk
export const requestPopularMovies = (currentPage: number) => async (
  dispatch: any
) => {
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getPopular(currentPage);
  console.log(res)
  dispatch(getPopularMovies(res.results));
};
export const requestNowPlaying = (currentPage: number) => async (
  dispatch: any
) => {
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getNowPlaying(currentPage);
  dispatch(getNowPlaying(res.results));
};

export const requestNowTvPlaying = (currentPage: number) => async (
  dispatch: any
) => {
  const res = await getHomePgeApi.getNowTvPlaying(currentPage);
  dispatch(getNowTvPlaying(res.results));
};

export const requestSearchMovie = (query: string) => async (dispatch: any) => {
  const res = await getSearchApi.getmovies(query);
  console.log(res);
  dispatch(getSearchMovies(res));
};

export const requestHomeMovies = (movieId: number) => async (dispatch: any) => {
  const res = await getMoviesApi.getVideos(movieId);
    dispatch(getHomeMovies(res));

};

export default homePageReducer;
