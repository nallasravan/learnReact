import Buy_Toilet from "./ActionToilet"

const initialState ={
    numberOfToilets : 10
}

const Toiletreducer = (state = initialState, action) =>{
    switch(action.type){
        case Buy_Toilet : return{
            ...state,
            numberOfToilets : state.numberOfToilets - 1
        }
        default: return state
    }

}

export default Toiletreducer