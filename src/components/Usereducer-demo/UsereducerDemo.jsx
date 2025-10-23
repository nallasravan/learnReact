import { useReducer } from "react";

let initalState = {
    viewersCount:5   //store
}

function reducer(state, action){  //actions here we need to perform
    switch(action.type){
        case("join"):
        return{viewersCount : state.viewersCount + 1 };
        case("exist"):
        return{viewersCount : state.viewersCount - 1 };
        default:
            break
    }
}


export const UsereducerDemo = () =>{

    const[state, dispatch] = useReducer(reducer, initalState)

    function JoinClick(){
       dispatch({type:"join"}) 
    }
      function ExistClick(){
       dispatch({type:"exist"}) 
    }

    return(

        <div className="container-fluid">
            <div className="card w-50">
                <div className="card-header">
<iframe title="YouTube Video" src="https://www.youtube.com/embed" />
                </div>
                <div className="card-body">
<h4>youtube live display</h4>
 {/* viwers component */}
<h5>viewers count: {state.viewersCount}</h5>
                </div>
                <div className="card-footer">
<button onClick = {JoinClick} className="btn btn-warning p-2 m-2">join</button>
<button onClick = {ExistClick} className="btn btn-danger p-2 m-2">exist</button>
                </div>
            </div>
        </div>
    )
}