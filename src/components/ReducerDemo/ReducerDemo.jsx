
import { useReducer } from "react";




const initialState = {
    count:0
}

const Reducer = (state = initialState, action) => {
    let nextState = state;
    switch (action.type) {
        case "INCREMENT":
            nextState = { ...state, count: state.count + 1 };
            break;
        case "DECREMENT":
            nextState = { ...state, count: state.count - 1 };
            break;
        default:
            nextState = state;
            break;
    }
    return nextState;
}



const ReducerDemo = () => {


    const [state, dispatch] = useReducer(Reducer, initialState);

    function increment() {
      dispatch({ type: "INCREMENT" });
    }   
    function decrement() {
        dispatch({ type: "DECREMENT" });
     
    }   
  return (
    <div>
      <h1>learn reducer</h1>

      <h2>Count: {state.count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default ReducerDemo;
