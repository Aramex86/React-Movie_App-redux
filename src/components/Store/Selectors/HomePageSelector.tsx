import { AppStateType } from "../store";

export const popularSelector = (state: AppStateType) => {
  return state.homePage.popularMovies;
};

export const curentPageSelector=(state:AppStateType)=>{
  return state.homePage.currentPage;
}

export const nowPlayingSelector=(state:AppStateType)=>{
  return state.homePage.nowPlaying;
}
export const nowTvPlayingSelector=(state:AppStateType)=>{
  return state.homePage.nowTvPlaying;
}

