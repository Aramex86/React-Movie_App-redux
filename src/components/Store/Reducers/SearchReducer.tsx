import { getSearchApi } from "../../../Api/Api";
import {
  CollectionObjectType,
  DetailType,
  NowPlayngType,
  SearchObjectType,
} from "../../../Types/Types";

const GET__MOVIES = "GET__MOVIES";
const GET__TV = "GET__TV";
const GET__PEOPLE = "GET__PEOPLE";
const GET__SEARCH__QUERY = "GET__SEARCH__QUERY";
const GET__COLLECTIONS = "GET_COLLECTIONS";
//const GET__KEYWORDS ='GET__KEYWORDS'
// const GET__COMPANIES ='GET__COMPANIES'
// const GET__MULTI = 'GET__MULTI'

const initialState = {
  searchMovies: null as SearchObjectType | null,
  searchTv: null as SearchObjectType | null,
  searchPeople: null as SearchObjectType | null,
  searchCollection: null as CollectionObjectType | null,
  searchQuery: "",
  // searchMovies = [] as Array<NowPlayngType>
};

type initialStateType = typeof initialState;

const searchReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case GET__MOVIES: {
      return {
        ...state,
        searchMovies: action.searchMovies,
      };
    }
    case GET__SEARCH__QUERY: {
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    }
    case GET__TV: {
      return {
        ...state,
        searchTv: action.searchTv,
      };
    }
    case GET__PEOPLE: {
      return {
        ...state,
        searchPeople: action.searchPeople,
      };
    }
    case GET__COLLECTIONS: {
      return {
        ...state,
        searchCollection: action.searchCollection,
      };
    }

    default:
      return state;
  }
};

type GetMoviesType = {
  type: typeof GET__MOVIES;
  searchMovies: Array<NowPlayngType>;
};

export const getMovies = (
  searchMovies: Array<NowPlayngType>
): GetMoviesType => {
  return { type: GET__MOVIES, searchMovies };
};
type GetTvType = {
  type: typeof GET__TV;
  searchTv: Array<NowPlayngType>;
};

export const getTv = (searchTv: Array<NowPlayngType>): GetTvType => {
  return { type: GET__TV, searchTv };
};
type GetPeopleType = {
  type: typeof GET__PEOPLE;
  searchPeople: Array<DetailType>;
};

export const getPeople = (searchPeople: Array<DetailType>): GetPeopleType => {
  return { type: GET__PEOPLE, searchPeople };
};

type GetCollectionsType = {
  type: typeof GET__COLLECTIONS;
  searchCollection: CollectionObjectType;
};

export const getCollections = (
  searchCollection: CollectionObjectType
): GetCollectionsType => {
  return { type: GET__COLLECTIONS, searchCollection };
};

type GetSearchQuery = {
  type: typeof GET__SEARCH__QUERY;
  searchQuery: string;
};

export const getSerachQuery = (searchQuery: string): GetSearchQuery => {
  return { type: GET__SEARCH__QUERY, searchQuery };
};

export const requestSearchMovie = (query: string) => async (dispatch: any) => {
  const res = await getSearchApi.getMovies(query);
  //console.log('Movies',res);
  dispatch(getMovies(res));
};

export const requestSearchTv = (query: string) => async (dispatch: any) => {
  const res = await getSearchApi.getTv(query);
  //console.log('TV',res);
  dispatch(getTv(res));
};
export const requestSearchPeople = (query: string) => async (dispatch: any) => {
  const res = await getSearchApi.getPeople(query);
  //console.log('people',res);
  dispatch(getPeople(res));
};
export const requestSearchCollections = (query: string) => async (
  dispatch: any
) => {
  const res = await getSearchApi.getCollection(query);
  //console.log('collections',res);
  dispatch(getCollections(res));
};

export const requestSearchQuery = (query: string) => async (dispatch: any) => {
  dispatch(dispatch(getSerachQuery(query)));
};

export default searchReducer;
