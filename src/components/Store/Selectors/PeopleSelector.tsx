import { AppStateType } from "../store"

export const detailSelector=(state:AppStateType)=>{
    return state.people.detail
}
export const combineCastSelector=(state:AppStateType)=>{
    return state.people.combinedCreditsCast
}
export const combineCrewSelector=(state:AppStateType)=>{
    return state.people.combinedCreditsCrew
}
export const socialSelector=(state:AppStateType)=>{
    return state.people.social
}
export const popularSelector=(state:AppStateType)=>{
    return state.people.popularPeople
}
