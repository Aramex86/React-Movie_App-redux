import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getCollections } from "../../../Api/Api";
import { CollectionsType, PartsType } from "../../../Types/Types";
import { AppStateType } from "../store";

const GET_COLLECTION = "movie-app/collection/GET_COLLECTION";
const GET_PARTS_DSC = "movie-app/collection/GET_PARTS_DSC";
const GET_PARTS_ASC = "movie-app/collection/GET_PARTS_ASC";
const GET_PARTS = "movie-app/collection/GET_PARTS";

const initialState = {
  collection: null as CollectionsType | null,
  parts: [] as Array<PartsType>,
};

type initialStateType = typeof initialState;

type ActionsTypes =
  | GetCollectionsType
  | GetPartsTypeAsc
  | GetPartsTypeDsc
  | GetPartsType;

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
    case GET_PARTS: {
      let partArr = [];
      partArr.push(state.collection?.parts ? state.collection.parts : []);
      console.log(partArr);
      return {
        ...state,
        parts: action.parts,
      };
    }
    case GET_PARTS_DSC: {
      return {
        ...state,
        parts: [
          ...action.parts.sort((a: any, b: any) => b.popularity - a.popularity),
        ],
      };
    }
    case GET_PARTS_ASC: {
      return {
        ...state,
        parts: [
          ...action.parts.sort((a: any, b: any) => a.popularity - b.popularity),
        ],
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

type GetPartsType = {
  type: typeof GET_PARTS;
  parts: Array<PartsType>;
};

export const getParts = (parts: Array<PartsType>): GetPartsType => {
  return { type: GET_PARTS, parts };
};

type GetPartsTypeDsc = {
  type: typeof GET_PARTS_DSC;
  parts: Array<PartsType>;
};

export const getPartsDsc = (parts: Array<PartsType>): GetPartsTypeDsc => {
  return { type: GET_PARTS_DSC, parts };
};
type GetPartsTypeAsc = {
  type: typeof GET_PARTS_ASC;
  parts: Array<PartsType>;
};

export const getPartsAsc = (parts: Array<PartsType>): GetPartsTypeAsc => {
  return { type: GET_PARTS_ASC, parts };
};

export const requestCollection = (collectionId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getCollections.getCollection(collectionId);
  dispatch(getCollection(res));
};

export const requestParts = (collectionId: number): ThunkType => async (
  dispatch: DispatchType
) => {
  const res = await getCollections.getParts(collectionId);
  dispatch(getParts(res));
};

export const requestPartsDsc = (parts: Array<PartsType>): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(getPartsDsc(parts));
};
export const requestPartsAsc = (parts: Array<PartsType>): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(getPartsAsc(parts));
};

export default collectionReducer;
