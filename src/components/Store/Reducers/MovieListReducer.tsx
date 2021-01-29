import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getFilter, getMoviesApi } from "../../../Api/Api";
import {
  CreditsType,
  GenresType,
  KeywordsType,
  MovieDetailsType,
  MovieListType,
  RecomandType,
  ReviewsType,
  SortType,
  TvDetailType,
  VideoType,
} from "../../../Types/Types";
import { AppStateType } from "../store";

const GET_MOVIES = "movie-app/movies/GET_MOVIES";
const FETCHING_REQUEST = "movie-app/movies/FETCHING_REQUEST";
const GET_CREDITS = "movie-app/movies/GET_CREDITS";
const GET_GENRES = "movie-app/movies/GET_GENRES";
const GET_DETAILS = "movie-app/movies/GET_DETAILS";
const GET_REVIEWS = "movie-app/movies/GET_REVIEWS";
const GET_VIDEOS = "movie-app/movies/GET_VIDEOS";
const GET_RECOMAND = "movie-app/movies/GET_RECOMAND";
const GET_KEYWORDS = "movie-app/movies/GET_KEYWORDS";
const SORT = "movie-app/movies/SORT";
const SHOW_SORT = "movie-app/movies/SHOW_SORT";

const initialState = {
  movieList: [] as Array<MovieListType>,
  credits: null as CreditsType | null,
  genres: [] as Array<GenresType>,
  isFetching: false,
  movieDetails: null as MovieDetailsType | null,
  tvDetails: null as TvDetailType | null,
  movieReviews: [] as Array<ReviewsType>,
  movieVideos: [] as Array<VideoType>,
  recomad: [] as Array<RecomandType>,
  keywords: [] as Array<KeywordsType>,
  errorMessage: "",
  sort: null as SortType |null,
  showSort:false,
};

type initialStateType = typeof initialState;
type ActionsTypes =
  | GetMoviesListType
  | IsFetchingReqType
  | GetCreditsType
  | GetGenresType
  | GetMovieDetailsType
  | GetMovieReviewsType
  | GetVideosType
  | GetRecomandType
  | GetKeywordsType
  | SortReducerType|ShowSortType;

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
    case GET_MOVIES: {
      return {
        ...state,
        movieList: action.movieList,
      };
    }
    case FETCHING_REQUEST: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case GET_CREDITS: {
      return {
        ...state,
        credits: action.credits,
      };
    }
    case GET_GENRES: {
      return {
        ...state,
        genres: action.genres,
      };
    }
    case GET_DETAILS: {
      return {
        ...state,
        movieDetails: action.movieDetails,
      };
    }
    case GET_REVIEWS: {
      return {
        ...state,
        movieReviews: action.movieReviews,
      };
    }
    case GET_VIDEOS: {
      return {
        ...state,
        movieVideos: action.movieVideos,
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
    case SORT: {
      return {
        ...state,
        sort: action.sort,
      };
    }
    case SHOW_SORT:{
      return{
        ...state,
        showSort: action.showSort
      }
    }


    default:
      return state;
  }
};

//action
//Movies
type GetMoviesListType = {
  type: typeof GET_MOVIES;
  movieList: Array<MovieListType>;
};

export const getMoviesList = (
  movieList: Array<MovieListType>
): GetMoviesListType => {
  return { type: GET_MOVIES, movieList };
};
type IsFetchingReqType = {
  type: typeof FETCHING_REQUEST;
  isFetching: boolean;
};
//Fetching
export const isFetchingReq = (isFetching: boolean): IsFetchingReqType => {
  return { type: FETCHING_REQUEST, isFetching };
};
//Credits
type GetCreditsType = {
  type: typeof GET_CREDITS;
  credits: CreditsType;
};

export const getCredits = (credits: CreditsType): GetCreditsType => {
  return { type: GET_CREDITS, credits };
};
// Genres
type GetGenresType = {
  type: typeof GET_GENRES;
  genres: Array<GenresType>;
};

export const getGenres = (genres: Array<GenresType>): GetGenresType => {
  return { type: GET_GENRES, genres };
};

//Details
type GetMovieDetailsType = {
  type: typeof GET_DETAILS;
  movieDetails: MovieDetailsType;
};

export const getDeatails = (
  movieDetails: MovieDetailsType
): GetMovieDetailsType => {
  return { type: GET_DETAILS, movieDetails };
};

//Reviews

type GetMovieReviewsType = {
  type: typeof GET_REVIEWS;
  movieReviews: Array<ReviewsType>;
};

export const getReviwes = (
  movieReviews: Array<ReviewsType>
): GetMovieReviewsType => {
  return { type: GET_REVIEWS, movieReviews };
};
//Videos

type GetVideosType = {
  type: typeof GET_VIDEOS;
  movieVideos: Array<VideoType>;
};
export const getVideos = (movieVideos: Array<VideoType>): GetVideosType => {
  return { type: GET_VIDEOS, movieVideos };
};

//Recomand

type GetRecomandType = {
  type: typeof GET_RECOMAND;
  recomad: Array<RecomandType>;
};

export const getRecomand = (recomad: Array<RecomandType>): GetRecomandType => {
  return { type: GET_RECOMAND, recomad };
};

//keywords

type GetKeywordsType = {
  type: typeof GET_KEYWORDS;
  keywords: Array<KeywordsType>;
};

export const getKeywords = (keywords: Array<KeywordsType>): GetKeywordsType => {
  return { type: GET_KEYWORDS, keywords };
};

//Sort
type SortReducerType = {
  type: typeof SORT;
  sort: SortType;
};

export const getSort = (sort: SortType): SortReducerType => {
  return { type: SORT, sort };
};

type ShowSortType={
  type:typeof SHOW_SORT;
  showSort: boolean
}

export const showSortAc=(showSort:boolean):ShowSortType=>{
  return{type:SHOW_SORT, showSort}
}



// Thuck
export const requestMovieList = (): ThunkType => async (
  dispatch: DispatchType
): Promise<void> => {
  dispatch(isFetchingReq(true));
  const res = await getMoviesApi.getMovies();
  dispatch(getMoviesList(res));
  dispatch(isFetchingReq(false));
};

export const requestCredits = (movieId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getMoviesApi.getCast(movieId);
  dispatch(getCredits(res));
};

export const requestGenres = (): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getMoviesApi.getGenre();
  dispatch(getGenres(res));
};

export const requestDetails = (movieId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getMoviesApi.getDetails(movieId);
  dispatch(isFetchingReq(true));
  dispatch(getDeatails(res));
  dispatch(isFetchingReq(false));
};

export const requestReviews = (movieId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getMoviesApi.getReviews(movieId);
  dispatch(getReviwes(res));
};
export const requestVideos = (movieId: number): ThunkType => async (
  dispatch: any
) => {
  const res = await getMoviesApi.getVideos(movieId);
  dispatch(getVideos(res));
};

export const requestRecomand = (movieId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getMoviesApi.getRecomand(movieId);
  dispatch(getRecomand(res));
};
export const requestKeywords = (movieId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getMoviesApi.getKeywords(movieId);
  dispatch(getKeywords(res));
};

export const requestSort=(value:string,currentPage:number):ThunkType=>async(dispatch:DispatchType)=>{
  const res = await getFilter.getSortMovies(value,currentPage);
   dispatch(getSort(res));
}

export default movieListReducer;
