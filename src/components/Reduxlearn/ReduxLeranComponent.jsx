
import { useSelector, useDispatch } from "react-redux";

import { ActionToilet } from "./ActionToilet";
const ReduxLearnComponent = () => {

const value = useSelector((state)=>state.numberOfToilets);
console.log("value=", value)
const dispatch = useDispatch();

console.log("ActionToilet=", ActionToilet())

function handledDispatch(){
dispatch(ActionToilet())
}
  return (
    <div>
      <h1>Learn Redux: {value} </h1>:
      <button onClick={handledDispatch}>Buy</button>
    </div>
  );
};

export default ReduxLearnComponent;