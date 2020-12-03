import { getHomePgeApi } from "../../../Api/Api";
import { PopularType } from "../../../Types/Types";

const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";

const initialState = {
  popularMovies: [] as Array<PopularType>,
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

    default:
      return state;
  }
};

//Popular Movies
type GetPopularType = {
  type: typeof GET_POPULAR_MOVIES;
  popularMovies: Array<PopularType>;
};

export const getPopular = (
  popularMovies: Array<PopularType>
): GetPopularType => {
  return { type: GET_POPULAR_MOVIES, popularMovies };
};

//Thunk
export const requestPopular = () => async (dispatch: any) => {
  const res = await getHomePgeApi.getPopular();
  dispatch(getPopular(res.results));
};

export default homePageReducer;
