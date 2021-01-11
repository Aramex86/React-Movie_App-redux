import { AppStateType } from "../store"

export const tvDetailsSelector=(state:AppStateType)=>{
    return state.tv.tvDetails
}
export const tvCastSelector=(state:AppStateType)=>{
    return state.tv.credits
}