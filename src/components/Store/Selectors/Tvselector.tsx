import { AppStateType } from "../store"

export const tvDetailsSelector=(state:AppStateType)=>{
    return state.tv.tvDetails
}
export const tvCastSelector=(state:AppStateType)=>{
    return state.tv.credits
}

export const tvReviewsSelector=(state:AppStateType)=>{
    return state.tv.reviews
}
export const tvVideosSelector=(state:AppStateType)=>{
    return state.tv.videos
}
export const tvRecomandSelector=(state:AppStateType)=>{
    return state.tv.recomad
}
export const tvKeywordsSelector=(state:AppStateType)=>{
    return state.tv.keywords
}
export const tvExternalSelector=(state:AppStateType)=>{
    return state.tv.external
}
export const sortedSelector=(state:AppStateType)=>{
    return state.tv.sortedTv
}
export const errorsSelector=(state:AppStateType)=>{
    return state.tv.errorMessage
}
export const showSortSelector=(state:AppStateType)=>{
    return state.tv.showSort
}