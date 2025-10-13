import Axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const DemouseEffect = () => {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Fetch data once
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log("Fetched users:", res.data);
        setPosts(res.data);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
      });

    // Start timer once
    intervalRef.current = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        console.log("Component unmounted, timer stopped");
      }
    };
  }, [count]);

  return (
    <div>
      <h1>DemouseEffect</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>

      <h2>Fetched Users:</h2>
      <ul>
        {posts.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemouseEffect;