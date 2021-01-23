import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getCollections } from "../../../Api/Api";
import { CollectionsType, PartsType } from "../../../Types/Types";
import { filterDateAsc, filterDateDsc } from "../../Helper/filterDates";
import { AppStateType } from "../store";

const GET_COLLECTION = "movie-app/collection/GET_COLLECTION";
const GET_PARTS_DSC = "movie-app/collection/GET_PARTS_DSC";
const GET_PARTS_ASC = "movie-app/collection/GET_PARTS_ASC";
const SORT_BY_RAITING_ASC = "movie-app/collection/SORT_BY_RAITING_ASC";
const SORT_BY_RAITING_DSC = "movie-app/collection/SORT_BY_RAITING_DSC";
const SORT_BY_REALESE_DATE_ASC =
  "movie-app/collection/SORT_BY_REALESE_DATE_ASC";
const SORT_BY_REALESE_DATE_DSC =
  "movie-app/collection/SORT_BY_REALESE_DATE_ASC";
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
  | GetPartsType
  | SortByRaitingAscType
  | SortByRaitingDscType
  | SortByRealeseDateAscType
  | SortByRealeseDateDscType;

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
    case SORT_BY_RAITING_ASC: {
      return {
        ...state,
        parts: [
          ...action.parts.sort(
            (a: any, b: any) => a.vote_average - b.vote_average
          ),
        ],
      };
    }
    case SORT_BY_RAITING_DSC: {
      return {
        ...state,
        parts: [
          ...action.parts.sort(
            (a: any, b: any) => b.vote_average - a.vote_average
          ),
        ],
      };
    }
    case SORT_BY_REALESE_DATE_ASC: {
      return {
        ...state,
        parts: filterDateAsc(action.parts)
      };
    }
    case SORT_BY_REALESE_DATE_DSC: {
      return {
        ...state,
        parts: filterDateDsc(action.parts)
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
type SortByRaitingAscType = {
  type: typeof SORT_BY_RAITING_ASC;
  parts: Array<PartsType>;
};

export const sortByRaitingAsc = (
  parts: Array<PartsType>
): SortByRaitingAscType => {
  return { type: SORT_BY_RAITING_ASC, parts };
};
type SortByRaitingDscType = {
  type: typeof SORT_BY_RAITING_DSC;
  parts: Array<PartsType>;
};

export const sortByRaitingDsc = (
  parts: Array<PartsType>
): SortByRaitingDscType => {
  return { type: SORT_BY_RAITING_DSC, parts };
};
type SortByRealeseDateAscType = {
  type: typeof SORT_BY_REALESE_DATE_ASC;
  parts: Array<PartsType>;
};

export const sortByRealeseDateAsc = (
  parts: Array<PartsType>
): SortByRealeseDateAscType => {
  return { type: SORT_BY_REALESE_DATE_ASC, parts };
};
type SortByRealeseDateDscType = {
  type: typeof SORT_BY_REALESE_DATE_DSC;
  parts: Array<PartsType>;
};

export const sortByRealeseDateDsc = (
  parts: Array<PartsType>
): SortByRealeseDateAscType => {
  return { type: SORT_BY_REALESE_DATE_DSC, parts };
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
export const requestRaitingAsc = (parts: Array<PartsType>): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(sortByRaitingAsc(parts));
};
export const requestRaitingDsc = (parts: Array<PartsType>): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(sortByRaitingDsc(parts));
};
export const requestRealeseDateAsc = (
  parts: Array<PartsType>
): ThunkType => async (dispatch: DispatchType) => {
  dispatch(sortByRealeseDateAsc(parts));
};
export const requestRealeseDateDsc = (
  parts: Array<PartsType>
): ThunkType => async (dispatch: DispatchType) => {
  dispatch(sortByRealeseDateDsc(parts));
};

export default collectionReducer;
