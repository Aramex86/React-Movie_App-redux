import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getCollections } from "../../../Api/Api";
import { CollectionsType } from "../../../Types/Types";
import { AppStateType } from "../store";

const GET_COLLECTION = "movie-app/colection/GET_COLLECTION";

const initialState = {
  collection: null as CollectionsType | null,
};

type initialStateType = typeof initialState;

type ActionsTypes = GetCollectionsType;

type DispatchType = Dispatch<ActionsTypes>;

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;

const collectionReducer = (
  state = initialState,
  action: ActionsTypes
): initialStateType => {
  switch (action.type) {
    case GET_COLLECTION: {
      return {
        ...state,
        collection: action.collection,
      };
    }

    default:
      return state;
  }
};

type GetCollectionsType = {
  type: typeof GET_COLLECTION;
  collection: CollectionsType;
};

export const getCollection = (
  collection: CollectionsType
): GetCollectionsType => {
  return { type: GET_COLLECTION, collection };
};

export const requestCollection = (collectionId:number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getCollections.getCollection(collectionId);
  dispatch(getCollection(res));
};

export default collectionReducer;
