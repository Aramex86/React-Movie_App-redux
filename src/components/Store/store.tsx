import { createStore, combineReducers,compose, applyMiddleware } from "redux";
import movieListReducer from "./Reducers/MovieListReducer";

import thunkMidlleWare from "redux-thunk";
import peopleReducer from "./Reducers/PeopleReducer";
import homePageReducer from "./Reducers/HomePageReducer";
import searchReducer from "./Reducers/SearchReducer";
import langsReducer from "./Reducers/LangReducer";
import TvReducer from "./Reducers/TvReducer";




let rootReducers = combineReducers({
    movies:movieListReducer,
    people:peopleReducer,
    homePage:homePageReducer,
    search:searchReducer,
    language:langsReducer,
    tv:TvReducer
});


type RootReducerType = typeof rootReducers;

export type AppStateType = ReturnType<RootReducerType>


//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancers(applyMiddleware(thunkMidlleWare)))

//@ts-ignore
window.___store__ = store

export default store
