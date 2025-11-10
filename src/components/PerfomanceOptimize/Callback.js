// Callback.js
import { useState, useCallback } from "react";
import ChildOfCallback from "./ChildOfCallback";

const Callback = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Stable reference

  return (
    <div>
      <ChildOfCallback onIncrement={handleIncrement} /> {/* Now passed! */}
      <h1>count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
};

export default Callback;