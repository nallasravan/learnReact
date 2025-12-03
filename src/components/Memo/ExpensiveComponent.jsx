import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState('red');

  // This simulates an EXPENSIVE calculation
  const expensiveCalculation = (num) => {
    console.log('Calculating... (this is slow)');
    let result = 0;
    for (let i = 0; i < 3; i++) {
      result += num * i;
    }
    return result;
  };

  // Without useMemo → runs on EVERY render (even when color changes)
  // const result = expensiveCalculation(count);

  // With useMemo → runs ONLY when 'count' changes
  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]); // dependency array



  return (
    <div>
      <h2>useMemo Example</h2>
      
      <p>Count: {count}</p>
      <p>Expensive Result: {result}</p>
      
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <br /><br />

      <p>Color: {color}</p>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
        Change Color (won't recalculate!)
      </button>
    </div>
  );
}

export default ExpensiveComponent;