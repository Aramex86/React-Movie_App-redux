import { AppStateType } from "../store";

export const moviesSelector =(state:any)=>{
    return state.movies.movieList
}

export const isFetchingSelector=(state:AppStateType)=>{ 
    return state.movies.isFetching
}

export const creditsSelector=(state:AppStateType)=>{
    return state.movies.credits
}

export const genresSelector=(state:AppStateType)=>{
    return state.movies.genres
}

export const detailsSelector=(state:AppStateType)=>{
    return state.movies.movieDetails
}

export const reviewsSelector=(state:AppStateType)=>{
    return state.movies.movieReviews;
}
export const viedoSelector=(state:AppStateType)=>{
    return state.movies.movieVideos;
}
export const recomadSelector=(state:AppStateType)=>{
    return state.movies.recomad;
}
export const keywordsSelector=(state:AppStateType)=>{
    return state.movies.keywords;
}