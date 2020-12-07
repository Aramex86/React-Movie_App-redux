import { getHomePgeApi } from "../../../Api/Api";
import { NowPlayngType, PopularType } from "../../../Types/Types";

const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
const GET_NOW_PLAYING = "GET_NOW_PLAYING";

const initialState = {
  popularMovies: [] as Array<PopularType>,
  currentPage: 1,
  nowPlaying: [] as Array<NowPlayngType>,
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
  console.log(res)
  dispatch(getNowPlaying(res.results));
};

export default homePageReducer;
