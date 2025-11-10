// ChildOfCallback.js
import React from "react";

const ChildOfCallback = ({ onIncrement }) => {
  console.log("Child rendered!");

  

  return (
    <div>
      <h1>ChildOfCallback</h1>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
};

export default React.memo(ChildOfCallback);