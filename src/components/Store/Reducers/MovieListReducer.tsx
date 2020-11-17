import { getMoviesApi } from "../../../Api/Api";
import { CreditsType, GenresType, MovieDetailsType, MovieListType, ResultsType, ReviewsType, VideoType } from "../../../Types/Types";

const GET_MOVIES = "GET_MOVIES";
const FETCHING_REQUEST = "FETCHING_REQUEST";
const GET_CREDITS ="GET_CREDITS";
const GET_GENRES ="GET_GENRES";
const GET_DETAILS ="GET_DETAILS";
const GET_REVIEWS ='GET_REVIEWS';
const GET_VIDEOS ='GET_VIDEOS';




const initialState = {
  movieList: [] as Array<MovieListType>,
  credits: null as CreditsType | null ,
  genres: [] as Array<GenresType>,
  isFetching: false,
  movieDetails: null as MovieDetailsType | null,
  movieReviews: [] as Array<ResultsType>,
  movieVideos: [] as Array<VideoType>,
  errorMessage:''
};

type initialStateType = typeof initialState;

const movieListReducer = (
  state = initialState,
  action: any
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
    case GET_CREDITS:{
      return{
        ...state,
        credits: action.credits
      }
   }
   case GET_GENRES:{
    return{
      ...state,
      genres:action.genres
    }
  }
   case GET_DETAILS:{
    return{
      ...state,
      movieDetails:action.movieDetails
    }
  }
   case GET_REVIEWS:{
    return{
      ...state,
      movieReviews:action.movieReviews
    }
  }
   case GET_VIDEOS:{
    return{
      ...state,
      movieVideos:action.movieVideos
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
type GetCreditsType={
  type:typeof GET_CREDITS
  credits: CreditsType
}

export const getCredits=(credits:CreditsType):GetCreditsType=>{
  return{type: GET_CREDITS, credits}
}
// Genres 
type GetGenresType={
  type: typeof GET_GENRES
  genres:Array<GenresType>
}

export const getGenres=(genres:Array<GenresType>):GetGenresType=>{
  return{type:GET_GENRES , genres}
}

//Details
type GetMovieDetailsType={
  type: typeof GET_DETAILS
  movieDetails: MovieDetailsType
}

export const getDeatails=(movieDetails:MovieDetailsType):GetMovieDetailsType=>{
  return{type:GET_DETAILS,movieDetails}
}

//Reviews

type GetMovieReviews={
  type: typeof GET_REVIEWS
  movieReviews: ReviewsType
}

export const getReviwes=(movieReviews:ReviewsType):GetMovieReviews=>{
  return{type:GET_REVIEWS, movieReviews}
}
//Videos

type GetVideosType={
  type: typeof GET_VIDEOS
  movieVideos: VideoType
}
export const getVideos=(movieVideos:VideoType):GetVideosType=>{
  return{type:GET_VIDEOS,movieVideos}
}

// Thuck
export const requestMovieList = () => async (dispatch: any) => {
  dispatch(isFetchingReq(true));
  const res = await getMoviesApi.getMovies();
  dispatch(getMoviesList(res));
  dispatch(isFetchingReq(false));
};


export const requestCredits=(movieId:number)=>async(dispatch:any)=>{
 const res = await getMoviesApi.getCast(movieId);
  dispatch(getCredits(res));
}

export const requestGenres=()=>async(dispatch:any)=>{
  const res = await getMoviesApi.getGenre();
  dispatch(getGenres(res))
}

export const requestDetails=(movieId:number)=>async(dispatch:any)=>{
  const res = await getMoviesApi.getDetails(movieId);
  const err = await getMoviesApi.getDetails(movieId);
  //console.log(err)
  dispatch(getDeatails(res))
}

export const requestReviews=(movieId:number)=>async(dispatch:any)=>{
  const res = await getMoviesApi.getReviews(movieId);
  dispatch(getReviwes(res))
}
export const requestVideos=(movieId:number)=>async(dispatch:any)=>{
  const res = await getMoviesApi.getVideos(movieId);
  dispatch(getVideos(res))
}

export default movieListReducer;
