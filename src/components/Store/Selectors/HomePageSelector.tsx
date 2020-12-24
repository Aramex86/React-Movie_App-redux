import {AppStateType} from '../store';

export const popularSelector = (state: AppStateType) => {
  return state.homePage.popularMovies;
};

export const curentPageSelector = (state: AppStateType) => {
  return state.homePage.currentPage;
};

export const nowPlayingSelector = (state: AppStateType) => {
  return state.homePage.nowPlaying;
};
export const nowTvPlayingSelector = (state: AppStateType) => {
  return state.homePage.nowTvPlaying;
};

export const homeVideosSelector = (state: AppStateType) => {
  return state.homePage.trailers;
};
export const traidingsSelector = (state: AppStateType) => {
  return state.homePage.traidings;
};
export const upComingSelector = (state: AppStateType) => {
  return state.homePage.upComing;
};
export const fetchingSelector = (state: AppStateType) => {
  return state.homePage.fetching;
};
export const loadMoreSelector=(state:AppStateType)=>{
  return state.homePage.loadMore;
}
