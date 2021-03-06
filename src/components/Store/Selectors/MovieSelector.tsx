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
export const errorSelector=(state:AppStateType)=>{
    return state.movies.errorMessage
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
export const sortselector=(state:AppStateType)=>{
    return state.movies.sort;
}
export const showSortselector=(state:AppStateType)=>{
    return state.movies.showSort;
}