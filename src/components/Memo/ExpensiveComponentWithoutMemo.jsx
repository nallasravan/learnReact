import React, { useState } from 'react';

function ExpensiveComponentWithoutMemo() {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState('red');

  // This simulates an EXPENSIVE calculation
  const expensiveCalculation = (num) => {
    console.log('Calculating... (running again unnecessarily!)');
    let result = 0;
    for (let i = 0; i < 3; i++) {
      result += num * i;
    }
    return result;
  };

  // WITHOUT useMemo → runs on EVERY render!
  const result = expensiveCalculation(count);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Without useMemo (SLOW!)</h2>
      
      <p><strong>Count:</strong> {count}</p>
      <p><strong>Expensive Result:</strong> {result}</p>
      
      <button onClick={() => setCount(prev => prev + 1)} style={{ margin: '5px' }}>
        Increment Count
      </button>

      <br /><br />

      <p><strong>Color:</strong> <span style={{ color }}>{color}</span></p>
      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
        Change Color (still recalculates!)
      </button>

      <p style={{ marginTop: '20px', color: 'red', fontWeight: 'bold' }}>
        Open console → Click "Change Color" → See it logs "Calculating..." every time!
      </p>
    </div>
  );
}

export default ExpensiveComponentWithoutMemo;