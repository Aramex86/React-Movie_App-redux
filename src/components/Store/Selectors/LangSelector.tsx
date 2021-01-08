import { AppStateType } from "../store"

export const langSelector=(state:AppStateType)=>{
    return state.language.languages;
}
export const transSelector=(state:AppStateType)=>{
    return state.language.translations;
}
