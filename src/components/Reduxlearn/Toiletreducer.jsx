import {Buy_Toilet} from "./ActionType"

const initialState ={
    numberOfToilets : 20
}

const Toiletreducer = (state = initialState, action) =>{

    console.log(action.type)
    console.log(state)
    
    switch(action.type){
        case Buy_Toilet : return{
            ...state,
            numberOfToilets : state.numberOfToilets - 1
        }
        default: return state
    }

  
    

}

export default Toiletreducer