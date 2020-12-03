import { AppStateType } from "../store";

export const popularSelector = (state: AppStateType) => {
  return state.homePage.popularMovies;
};
