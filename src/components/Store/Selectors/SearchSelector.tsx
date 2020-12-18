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
export const searchCollectionsSelector = (state: AppStateType) => {
    return state.search.searchCollection;
  };
export const totalPagesSelector = (state: AppStateType) => {
    return state.search.totalPages;
  };
export const currentPagesSelector = (state: AppStateType) => {
    return state.search.currentPage;
  };