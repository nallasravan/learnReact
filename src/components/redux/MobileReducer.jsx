import { Buy_Mobile } from "./MobileType"

const initialState = {
    numberOfMobiles : 10
}

const MobileReducer = (state = initialState, action) =>{
    switch(action.type){
        case Buy_Mobile : return{
            ...state,
            numberOfMobiles : state.numberOfMobiles - 1
        }
        default: return state
    }
}

export default MobileReducer