import { AppStateType } from "../store"

export const detailSelector=(state:AppStateType)=>{
    return state.people.detail
}