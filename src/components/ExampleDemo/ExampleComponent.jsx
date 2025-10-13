import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  // State for counter
  const [count, setCount] = useState(0);
  // State for API data
  const [data, setData] = useState(null);
  // State for loading and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect for Counter: Mount, Update, and Cleanup
  useEffect(() => {
    // This runs on mount and whenever count changes
    console.log(`Counter updated: ${count}`);

    // Optional: Simulate a side effect, like a timer
    const timer = setInterval(() => {
      console.log('Timer running...');
    }, 1000);

    // Cleanup function (runs before unmount or before the next effect)
    return () => {
      console.log('Cleaning up timer for count:', count);
      clearInterval(timer); // Cleanup the timer to prevent memory leaks
    };
  }, [count]); // Dependency: count (effect runs when count changes)

  // useEffect for Fetching Data from API (runs only on mount)
  useEffect(() => {
    // Set loading state
    setLoading(true);

    // Fetch data from a sample API (e.g., JSONPlaceholder)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

    // Cleanup (optional, for aborting fetch if component unmounts)
    return () => {
      console.log('Cleaning up API fetch');
      // Note: For real-world apps, you might use AbortController to cancel fetch
    };
  }, []); // Empty dependency array: runs only on mount

  // Function to increment counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useEffect Example</h1>

      {/* Counter Section */}
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>

      {/* API Fetch Section */}
      <h2>API Fetch Example</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default ExampleComponent;