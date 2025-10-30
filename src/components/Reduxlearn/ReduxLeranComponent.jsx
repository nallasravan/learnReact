import { useSelector, useDispatch } from "react-redux";
import { ActionToilet } from "./ActionToilet";

const ReduxLearnComponent = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.numberOfToilets);
  console.log("value===", value)

  return (
    <div>
      <h1>Learn Redux: {value}</h1>
      <button onClick={() => dispatch(ActionToilet())}>Buy</button>
    </div>
  );
};

export default ReduxLearnComponent;