import { getSearchApi } from "../../../Api/Api"
import { DetailType, NowPlayngType, SearchObjectType } from "../../../Types/Types"

const GET__MOVIES = 'GET__MOVIES'
const GET__TV = 'GET__TV'
const GET__PEOPLE = 'GET__PEOPLE'
//const GET__KEYWORDS ='GET__KEYWORDS'
// const GET_COLLECTIONS='GET_COLLECTIONS'
// const GET__COMPANIES ='GET__COMPANIES'
// const GET__MULTI = 'GET__MULTI'

const initialState ={
    searchMovies : null as SearchObjectType | null,
    searchTv : [] as Array<NowPlayngType>,
    searchPeople : [] as Array<DetailType>,
    // searchMovies = [] as Array<NowPlayngType>
}

type initialStateType = typeof initialState;


const searchReducer=(state=initialState,action:any):initialStateType=>{
    switch(action.type){
        case GET__MOVIES:{
            return{
                ...state,
                searchMovies:action.searchMovies,
            }
        }

        default:return state;
    }
}




type GetMoviesType={
    type: typeof GET__MOVIES;
    searchMovies:Array<NowPlayngType>
}

export const getMovies=(searchMovies:Array<NowPlayngType>):GetMoviesType=>{
    return{type:GET__MOVIES,searchMovies}
}


export const requestSearchMovie = (query: string) => async (dispatch: any) => {
    const res = await getSearchApi.getMovies(query);
    console.log(res);
    dispatch(getMovies(res));
  };


export default searchReducer;