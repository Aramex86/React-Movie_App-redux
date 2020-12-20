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
const TOTAL__PAGES = 'TOTAL__PAGES';
const CURRENT__PAGE = 'CURRENT__PAGE';

//const GET__KEYWORDS ='GET__KEYWORDS'
// const GET__COMPANIES ='GET__COMPANIES'
//const GET__MULTI = 'GET__MULTI'

const initialState = {
  searchMovies: null as SearchObjectType | null,
  searchTv: null as SearchObjectType | null,
  searchPeople: null as SearchObjectType | null,
  searchCollection: null as CollectionObjectType | null,
  searchQuery: "",
  totalPages: 0,
  currentPage:1

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
    case TOTAL__PAGES: {
      return {
        ...state,
        totalPages: action.totalPages,
      };
    }
    case CURRENT__PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
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
//Query String
type GetSearchQuery = {
  type: typeof GET__SEARCH__QUERY;
  searchQuery: string;
};

export const getSerachQuery = (searchQuery: string): GetSearchQuery => {
  return { type: GET__SEARCH__QUERY, searchQuery };
};
//Total Pages
type TotalPagesType={
  type:typeof TOTAL__PAGES
  totalPages:number
}
export const getTotalPages = (totalPages: number): TotalPagesType => {
  return { type: TOTAL__PAGES, totalPages };
};
//Current Page

type CurrentPagesType={
  type:typeof CURRENT__PAGE
  currentPage:number
}
export const getCurrentPage = (currentPage: number): CurrentPagesType => {
  return { type: CURRENT__PAGE, currentPage };
};



export const requestSearchMovie = (query: string,currentPage:number) => async (dispatch: any) => {
  const res = await getSearchApi.getMovies(query,currentPage);
  console.log('Movies',res);
  dispatch(getMovies(res));
  dispatch(getCurrentPage(currentPage));
  dispatch(getTotalPages(res?.total_pages));
};

export const requestSearchTv = (query: string) => async (dispatch: any) => {
  const res = await getSearchApi.getTv(query);
  //console.log('TV',res);
  dispatch(getTv(res));
 // dispatch(getCurrentPages(currentPage));
  dispatch(getTotalPages(res?.total_pages));
  
};
export const requestSearchPeople = (query: string) => async (dispatch: any) => {
  const res = await getSearchApi.getPeople(query);
  //console.log('people',res);
  dispatch(getPeople(res));
  dispatch(getTotalPages(res?.total_pages));
  //dispatch(getCurrentPages(currentPage));
  
};
export const requestSearchCollections = (query: string) => async (
  dispatch: any
) => {
  const res = await getSearchApi.getCollection(query);
  //console.log('collections',res);
  dispatch(getCollections(res));
  dispatch(getTotalPages(res?.total_pages));
  //dispatch(getCurrentPages(currentPage));
  
};

export const requestSearchQuery = (query: string) => async (dispatch: any) => {
  dispatch(getSerachQuery(query));
};

export const requestTotalPages = (totalPages: number) => async (dispatch: any) => {
  dispatch(getTotalPages(totalPages));
};
export const requestCurrentPage = (currentPage: number) => async (dispatch: any) => {
  dispatch(getCurrentPage(currentPage));
};



export default searchReducer;
