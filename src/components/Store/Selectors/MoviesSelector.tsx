import {AppStateType} from '../store';

export const popularSelector = (state: AppStateType) => {
  return state.moviesPage.popularMoviesPage
};

// export const curentPageSelector = (state: AppStateType) => {
//   return state.homePage.currentPage;
// };

export const nowPlayingSelector = (state: AppStateType) => {
  return state.moviesPage.nowPlayingPage
};

// export const fetchingSelector = (state: AppStateType) => {
//   return state.homePage.fetching;
// };
