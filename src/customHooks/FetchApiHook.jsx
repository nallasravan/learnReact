// customHooks/FetchApiHook.js
import axios from "axios";
import { useEffect, useState } from "react";

// Custom Hook
export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, [url]);

  return data;
};