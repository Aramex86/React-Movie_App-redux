import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {getHomePgeApi, getMoviesApi} from '../../../Api/Api';
import {
  NowPlayingObjectType,
  PopularObjectType,
  PopularTvObjectType,
  TopRatedObjectType,
  TraidingsType,
  UpComingObjectType,
  VideoType,
} from '../../../Types/Types';
import {AppStateType} from '../store';

const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE';
const GET_NOW_PLAYING = 'GET_NOW_PLAYING';
const GET_NOW_TVPLAYING = 'GET_NOW_TVPLAYING';
const GET_AIRING_TODAY = 'GET_AIRING_TODAY';
const GET_ON_TV = 'GET_ON_TV';
const GET__TOP__RATED__TV = 'GET__TOP__RATED__TV';
//const GET_SEARCH_MOVIES = 'GET_SEARCH_MOVIES';
const GET_TRAILERS = 'GET_TRAILERS';
const GET_TREDINGS = 'GET_TREDINGS';
const GET_UPCOMING = 'GET_UPCOMING';
const GET__TOP__RATED = 'GET__TOP__RATED';
const FETCHING = 'FETCHING';

const initialState = {
  popularMovies: null as PopularObjectType | null,
  currentPage: 1,
  nowPlaying: null as NowPlayingObjectType | null,
  nowTvPlaying: null as PopularTvObjectType | null,
  airingToday: null as PopularTvObjectType | null,
  onTv: null as PopularTvObjectType | null,
  topRatedTv: null as PopularTvObjectType | null,
  trailers: [] as Array<VideoType>,
  traidings: [] as Array<TraidingsType>,
  upComing: null as UpComingObjectType | null,
  topRated: null as TopRatedObjectType | null,
  fetching: true,
};

type initialStateType = typeof initialState;

type ActionsTypes =
  | GetPopularType
  | GetCurrentPageType
  | GetNowPlayingType
  | GetNowTvPlaingType
  | GetAiringTodayType
  | GetOnTvType
  | GetTopRatedTvType
  | GetTrailersType
  | GetTraidingsType
  | GetUpComingType
  | GetTopRatedtype
  | FetchingType;

type DispatchType = Dispatch<ActionsTypes>;
type GetStateType = () => AppStateType;
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

const homePageReducer = (
  state = initialState,
  action: ActionsTypes
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
    case GET_AIRING_TODAY: {
      return {
        ...state,
        airingToday: action.airingToday,
      };
    }
    case GET_ON_TV: {
      return {
        ...state,
        onTv: action.onTv,
      };
    }
    case GET__TOP__RATED__TV: {
      return {
        ...state,
        topRatedTv: action.topRatedTv,
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
    case GET__TOP__RATED: {
      return {
        ...state,
        topRated: action.topRated,
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
  popularMovies: PopularObjectType;
};

export const getPopularMovies = (
  popularMovies: PopularObjectType
): GetPopularType => {
  return {type: GET_POPULAR_MOVIES, popularMovies};
};
//
type GetCurrentPageType = {
  type: typeof GET_CURRENT_PAGE;
  currentPage: number;
};

export const getCurrentPage = (currentPage: number): GetCurrentPageType => {
  return {type: GET_CURRENT_PAGE, currentPage};
};

//
type GetNowPlayingType = {
  type: typeof GET_NOW_PLAYING;
  nowPlaying: NowPlayingObjectType;
};

export const getNowPlaying = (
  nowPlaying: NowPlayingObjectType
): GetNowPlayingType => {
  return {type: GET_NOW_PLAYING, nowPlaying};
};
// TV
type GetNowTvPlaingType = {
  type: typeof GET_NOW_TVPLAYING;
  nowTvPlaying: PopularTvObjectType;
};

export const getNowTvPlaying = (
  nowTvPlaying: PopularTvObjectType
): GetNowTvPlaingType => {
  return {type: GET_NOW_TVPLAYING, nowTvPlaying};
};
type GetAiringTodayType = {
  type: typeof GET_AIRING_TODAY;
  airingToday: PopularTvObjectType;
};

export const getAiringToday = (
  airingToday: PopularTvObjectType
): GetAiringTodayType => {
  return {type: GET_AIRING_TODAY, airingToday};
};
type GetOnTvType = {
  type: typeof GET_ON_TV;
  onTv: PopularTvObjectType;
};

export const getOnTv = (onTv: PopularTvObjectType): GetOnTvType => {
  return {type: GET_ON_TV, onTv};
};
type GetTopRatedTvType = {
  type: typeof GET__TOP__RATED__TV;
  topRatedTv: PopularTvObjectType;
};

export const getTopRatedTv = (
  topRatedTv: PopularTvObjectType
): GetTopRatedTvType => {
  return {type: GET__TOP__RATED__TV, topRatedTv};
};
//Trailers
type GetTrailersType = {
  type: typeof GET_TRAILERS;
  trailers: Array<VideoType>;
};

export const getTrailers = (trailers: Array<VideoType>): GetTrailersType => {
  return {type: GET_TRAILERS, trailers};
};
//Traidings
type GetTraidingsType = {
  type: typeof GET_TREDINGS;
  traidings: Array<TraidingsType>;
};
export const getTraidings = (
  traidings: Array<TraidingsType>
): GetTraidingsType => {
  return {type: GET_TREDINGS, traidings};
};

type GetUpComingType = {
  type: typeof GET_UPCOMING;
  upComing: UpComingObjectType;
};

export const getUpComing = (upComing: UpComingObjectType): GetUpComingType => {
  return {type: GET_UPCOMING, upComing};
};

//

type GetTopRatedtype = {
  type: typeof GET__TOP__RATED;
  topRated: TopRatedObjectType;
};

export const getTopRated = (topRated: TopRatedObjectType): GetTopRatedtype => {
  return {type: GET__TOP__RATED, topRated};
};

type FetchingType = {
  type: typeof FETCHING;
  fetching: boolean;
};
export const getFetching = (fetching: boolean): FetchingType => {
  return {type: FETCHING, fetching};
};
//Thunk

//Movies
export const requestPopularMovies = (currentPage: number): ThunkType => async (
  dispatch: DispatchType,
  getState: GetStateType
): Promise<void> => {
  dispatch(getFetching(true));
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getPopular(currentPage);
  // console.log(res)
  dispatch(getPopularMovies(res));
  dispatch(getFetching(false));
};
export const requestNowPlaying = (currentPage: number): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(getFetching(true));
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getNowPlaying(currentPage);
  // console.log(res)
  dispatch(getNowPlaying(res));
  dispatch(getFetching(false));
};

export const requestUpComing = (currentPage: number): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(getFetching(true));
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getUpcomming(currentPage);
 // console.log(res);
  dispatch(getUpComing(res));
  dispatch(getFetching(false));
};

export const requestTopRated = (currentPage: number): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(getFetching(true));
  dispatch(getCurrentPage(currentPage));
  const res = await getHomePgeApi.getTopRated(currentPage);
  console.log(res);
  dispatch(getTopRated(res));
  dispatch(getFetching(false));
};

export const requestTrailers = (movieId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getMoviesApi.getVideos(movieId);
  dispatch(getTrailers(res));
};

export const requestTraidings = (value: string): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(getFetching(true));
  const res = await getHomePgeApi.getTraidings(value);
  dispatch(getTraidings(res));
  dispatch(getFetching(false));
};
///TV
export const requestNowTvPlaying = (currentPage: number): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(getFetching(true));
  const res = await getHomePgeApi.getNowTvPlaying(currentPage);
  dispatch(getNowTvPlaying(res));
  dispatch(getFetching(false));
};
export const requestAiringToday = (currentPage: number): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(getFetching(true));
  const res = await getHomePgeApi.geAiringTodayTv(currentPage);
  dispatch(getAiringToday(res));
  dispatch(getFetching(false));
};
export const requestOnTv = (currentPage: number): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(getFetching(true));
  const res = await getHomePgeApi.getOnTv(currentPage);
  dispatch(getOnTv(res));
  dispatch(getFetching(false));
};
export const requestTopRatedTv = (currentPage: number): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(getFetching(true));
  const res = await getHomePgeApi.getTopRatedTv(currentPage);
  dispatch(getTopRatedTv(res));
  dispatch(getFetching(false));
};

export default homePageReducer;
