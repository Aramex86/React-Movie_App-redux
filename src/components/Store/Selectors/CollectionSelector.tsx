import { AppStateType } from "../store";

export const collectionSelector=(state:AppStateType)=>{
    return state.collection.collection;
}