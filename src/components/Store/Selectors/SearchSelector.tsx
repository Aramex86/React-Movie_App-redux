import { AppStateType } from "../store";

//Search
export const searchMoviesSelector = (state: AppStateType) => {
    return state.search.searchMovies;
  };