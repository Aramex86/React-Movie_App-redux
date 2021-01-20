import { AppStateType } from "../store";

export const collectionSelector = (state: AppStateType) => {
  return state.collection.collection;
};
export const partsSelector = (state: AppStateType) => {
  return state.collection.parts;
};
