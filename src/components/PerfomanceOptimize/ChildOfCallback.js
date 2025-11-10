// ChildOfCallback.js
import React from "react";

const ChildOfCallback = React.memo(({ onIncrement }) => {
    console.log("onIncrement==", onIncrement)
  console.log("Child rendered!");

  return (
    <div>
      <h1>ChildOfCallback</h1>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
});

export default ChildOfCallback;