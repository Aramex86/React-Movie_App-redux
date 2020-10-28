import { getMoviesApi } from "../../../Api/Api";
import { CreditsType, MovieListType } from "../../../Types/Types";

const GET_MOVIES = "GET_MOVIES";
const FETCHING_REQUEST = "FETCHING_REQUEST";
const GET_CREDITS ="GET_CREDITS";

const initialState = {
  movieList: [] as Array<MovieListType>,
  credits: [] as Array<CreditsType>,
  isFetching: false,
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
  credits: Array<CreditsType>
}

export const getCredits=(credits:Array<CreditsType>):GetCreditsType=>{
  return{type: GET_CREDITS, credits}
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
  dispatch(getCredits(res.cast));
}

export default movieListReducer;
