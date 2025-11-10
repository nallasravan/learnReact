// Callback.js
import { useState, useCallback } from "react";
import ChildOfCallback from "./ChildOfCallback";

const Callback = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Stable reference

//   const handleIncrement = () => {
//     setCount(prev => prev + 1);
//   };

  return (
    <div>
  
      <h1>count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>

      <hr/>

          <ChildOfCallback onIncrement={handleIncrement} /> Now passed!
    </div>
  );
};

export default Callback;