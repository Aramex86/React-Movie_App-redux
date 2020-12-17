import { getHomePgeApi, getMoviesApi, getSearchApi } from "../../../Api/Api";
import {
  NowPlayngType,
  PopularType,
  SearchType,
  TraidingsType,
  TVPopularType,
  UpComingType,
  VideoType,
} from "../../../Types/Types";

const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
const GET_NOW_PLAYING = "GET_NOW_PLAYING";
const GET_NOW_TVPLAYING = "GET_NOW_TVPLAYING";
const GET_SEARCH_MOVIES = "GET_SEARCH_MOVIES";
const GET_TRAILERS = "GET_TRAILERS";
const GET_TREDINGS = "GET_TREDINGS";
const GET_UPCOMING = "GET_UPCOMING";
const FETCHING = "FETCHING";

const initialState = {
  popularMovies: [] as Array<PopularType>,
  currentPage: 1,
  nowPlaying: [] as Array<NowPlayngType>,
  nowTvPlaying: [] as Array<TVPopularType>,
  searchMovies: null as SearchType | null,
  trailers: [] as Array<VideoType>,
  traidings: [] as Array<TraidingsType>,
  upComing: [] as Array<UpComingType>,
  fetching: true,
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

//Search
type GetSearchMovies = {
  type: typeof GET_SEARCH_MOVIES;
  searchMovies: SearchType;
};

export const getSearchMovies = (searchMovies: SearchType): GetSearchMovies => {
  return { type: GET_SEARCH_MOVIES, searchMovies };
};

//Thunk
export const requestPopularMovies = (currentPage: number) => async (
  dispatch: any
) => {
  dispatch(getFetching(true));
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getPopular(currentPage);
  //console.log(res)
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

export const requestSearchMovie = (query: string) => async (dispatch: any) => {
  const res = await getSearchApi.getMulti(query);
  console.log(res);
  dispatch(getSearchMovies(res));
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

export default homePageReducer;
