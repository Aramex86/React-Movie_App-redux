import { AppStateType } from "../store";

//Search
export const searchMoviesSelector = (state: AppStateType) => {
    return state.search.searchMovies;
  };
export const searchMoviesQuerySelector = (state: AppStateType) => {
    return state.search.searchQuery;
  };
export const searchTvSelector = (state: AppStateType) => {
    return state.search.searchTv;
  };
export const searchPeopleSelector = (state: AppStateType) => {
    return state.search.searchPeople;
  };